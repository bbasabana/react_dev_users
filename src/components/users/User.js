import React, { Component } from 'react'

export class User extends Component {
    render() {

        const {login, avatar_url, html_url, repos_url} = this.props.user;
        
        return (
            <div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={avatar_url} alt=""/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{login}</div>
                        </div>

                        <div class="px-6 py-4">
                            <a href={html_url} className="bg-blue-600 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Show more</a>
                            <a href={repos_url} className="bg-red-600 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Repositories</a> 
                        </div>
                </div>  
            </div>
        )
    }
}

export default User
