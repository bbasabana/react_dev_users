import React, { Component } from 'react';
import axios from 'axios';
import User  from './User';
import SeachUsers from './SearchUser'

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

    searchUserForGit = (data) =>{
        if(data !== ''){
            axios.get(`https://api.github.com/search/users?q=${data}`)
            .then(response => {
                this.setState({
                    users: response.data.items
                })
                console.log(response)
            })
        }
    }

    componentDidMount(){
        this.getUsers();
    }
    
    render() {
        return (
            <div>
              <SeachUsers getUsersSearch={this.searchUserForGit} />
              <div className="p-24 flex flex-wrap items-center justify-center">
                {this.state.users.map(user => (
                      <div key={user.id} className="flex-shrink-0 m-6 relative overflow-hidden  rounded-lg max-w-xs shadow-lg">
                        <User user={user}/>
                      </div>
                ))}
              </div>
            </div>
        )
    }
}
