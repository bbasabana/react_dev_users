import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class User extends Component {
    render() {

        const {login, avatar_url, html_url, repos_url} = this.props.user;
        
        return (
            <div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={avatar_url} alt=""/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{login}</div>
                        </div>

                        <div className="px-6 py-4">
                            <Link to={'/users/'+login} className="bg-blue-600 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Show more</Link>
                            <a href={repos_url} className="bg-red-600 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Repositories</a> 
                        </div>
                </div>  
            </div>
        )
    }
}

export default User
