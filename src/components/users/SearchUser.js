import React, { Component } from 'react'

class SearchUser extends Component {
    state = {
        search: ''
    }

    handleForm = (e) => {
        this.setState({
            search: e.target.value
        })

    }

    searchUsers = (e) => {
        e.preventDefault();
        this.props.getUsersSearch(this.state.search)
    }

    
    render() {

        const { search } = this.state;

        return (
            <div>
              <div className="flex flex-wrap items-center justify-center">
                <form className="m-4 flex w-3/4" onSubmit={this.searchUsers}>
                    <input onChange={this.handleForm} value={search} className="w-full rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Search developers"/>
                    <button className="px-8 rounded-r-lg bg-blue-600  text-white font-bold p-4 uppercase border-blue-800 border-t border-b border-r">Search</button>
                </form>
              </div>
            </div>
        )
    }
}

export default SearchUser
