import React from 'react';
import SearchBar from './searchbar'


class App extends React.Component {
    onSearchSubmit(searchTerm) {
        console.log(searchTerm)
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div >
        )
    }
}

export default App;