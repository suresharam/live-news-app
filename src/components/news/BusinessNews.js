import React from 'react';
import { connect } from 'react-redux';
import {startGetBusinessArticles} from '../../actions/ArticlesActions';

function BusinessNews(props) {

    if (props.articles.length === 0) {
        props.dispatch(startGetBusinessArticles())
    }

    return (
        <div>
            {
                props.articles.length ? <h1>Articles count : {props.articles.length}</h1> : ''
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.businessArticles
    }
}

export default connect(mapStateToProps)(BusinessNews);