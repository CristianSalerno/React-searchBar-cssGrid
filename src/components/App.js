import React from 'react';
import SearchBar from './searchbar'
import unsplash from '../api/unsplash'
import Display from './display'

class App extends React.Component {
    state = { images: new Array() };

    onSearchSubmit = async searchTerm => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm },
        }
        )
        this.setState({ images: response.data.results });
    }


    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <Display images={this.state.images} />
            </div >
        )
    }
}


export default App;