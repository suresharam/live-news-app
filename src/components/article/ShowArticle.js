import React from 'react';

function ShowArticle(props) {
    return (
        <div className="col mb-4 mt-4">
            <div className="card" width="100%">
                <a href={props.article.url}>
                    <img src={props.article.urlToImage} class="card-img-top" height= "500"></img>
                </a>
                <div className="card-body">
                    <h5 className="card-title">{props.article.title}</h5>
                    <p className="card-text">{props.article.description}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            {props.article.author} {props.article.publishedAt}
                        </small>
                    </p>
                    <a href={props.article.url}>Read..</a>
                </div>
            </div>
        </div>
    );
};

export default ShowArticle;