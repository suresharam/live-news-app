import React from 'react';
import { connect } from 'react-redux';

import { startGetNewsArticles } from '../../actions/ArticlesActions';

import ShowArticle from '../article/ShowArticle';

function TechnologyNews(props) {

    if (props.articles.length === 0) {
        props.dispatch(startGetNewsArticles({ category: 'technology' }))
    }

    return (
        <div className="container">
            {
                props.articles.length ?
                    props.articles.map(article => {
                        return (
                            <div className="row">
                                <ShowArticle article={article} />
                            </div>
                        )
                    })
                    : <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.technologyArticles
    }
}

export default connect(mapStateToProps)(TechnologyNews);