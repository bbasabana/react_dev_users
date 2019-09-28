import React, { Component } from 'react'

export class SearchUser extends Component {
    render() {
        return (
            <div>
              <div className="flex flex-wrap items-center justify-center">
                <form class="m-4 flex w-3/4">
                    <input class="w-full rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Search developers"/>
                    <button class="px-8 rounded-r-lg bg-blue-600  text-white font-bold p-4 uppercase border-blue-800 border-t border-b border-r">Search</button>
                </form>
              </div>
            </div>
        )
    }
}

export default SearchUser
