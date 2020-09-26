import React from 'react';
import axios from 'axios';

import ShowArticle from '../article/ShowArticle'


class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchString: '',
            searchResults: [],
            showSpinner: false
        }
    };

    handleClick = () => {
        // clear component state
        this.setState({
            searchString: '',
            searchResults: [],
            showSpinner: false
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        const apiKey = process.env.REACT_APP_API_KEY;
        const options = {
            headers: {
                'X-Api-Key': apiKey
            }
        };
        const url = `http://newsapi.org/v2/everything?q="${e.target.value}"`
        axios.get(url, options)
            .then(response => {
                console.log(response.data);
                this.setState({
                    searchResults: response.data.articles
                })
            })
            .catch(error => {
                alert(error);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" name="searchString" value={this.state.searchString}
                            placeholder="Type here to search news" onChange={this.handleChange}></input>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger" onClick={this.handleClick}>x</button>
                    </div>
                </div>
                {
                    this.state.searchResults.length ?
                        this.state.searchResults.map(article => {
                            return (
                                <div className="row">
                                    <ShowArticle article={article} />
                                </div>
                            )
                        })
                        : ''
                }
                <div>
                    {
                        this.state.showSpinner ? (
                            <div className="spinner-border text-success" role="status">
                                <span className="sr-only-focusable">Loading...</span>
                            </div>
                        ) : ''
                    }
                </div>
            </div>

        )
    }
}

export default Search;