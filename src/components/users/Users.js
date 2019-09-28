import React, { Component } from 'react';
import axios from 'axios';
import User  from './User';

export default class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users : []
        }
        
    }

    getUsers = () => {
        axios.get('https://api.github.com/users')
             .then(response => {
                 this.setState({
                     users : response.data
                 })

             })
    }

    componentDidMount(){
        this.getUsers();
    }
    
    render() {
        return (
            <div>
              <div className="p-24 flex flex-wrap items-center justify-center">
                {this.state.users.map(user => (
                      <div className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg">
                        <User user={user}/>
                      </div>
                ))}
              </div>
            </div>
        )
    }
}
