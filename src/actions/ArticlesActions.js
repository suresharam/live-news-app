import axios from 'axios';

export const setHedlines = (articles) => {
    return {
        type: 'SET_HEADLINES',
        payload: articles
    }
}

export const setBusinessArticles = (articles) => {
    return {
        type: 'SET_BUSINESS_ARTICLES',
        payload: articles
    };
};

export const setEntertainmentArticles = (articles) => {
    return {
        type: 'SET_ENTERTAINMENT_ARTICLES',
        payload: articles
    }
};

export const setGeneralArticles = (articles) => {
    return {
        type: 'SET_GENERAL_ARTICLES',
        payload: articles
    }
}

export const setHealthArticles = (articles) => {
    return {
        type: 'SET_HEALTH_ARTICLES',
        payload: articles
    }
};

export const setScienceArticles = (articles) => {
    return {
        type: 'SET_SCINECE_ARTICLES',
        payload: articles
    }
};

export const setSportsArticles = (articles) => {
    return {
        type: 'SET_SPORTS_ARTICLES',
        payload: articles
    }
};

export const setTechnologyArticles = (articles) => {
    return {
        type: 'SET_TECHNOLOGY_ARTICLES',
        payload: articles
    }
};

export const setCountry = (country) => {
    return {
        type: 'SET_COUNTRY',
        payload: country
    }
}

export const startGetNewsArticles = params => {
    const { category } = params
    return (dispatch) => {
        const { url, options } = getRequestDetails({ category });
        axios.get(url, options)
            .then(response => {
                const { articles } = response.data
                switch (category) {
                    case 'headlines' : {
                        if (response.data.totalResults > 0) {
                            dispatch(setHedlines(articles));
                        } else {
                            dispatch(setHedlines([])) // empty array when no articles found
                        }
                        break;
                    }

                    case 'business': {
                        if (response.data.totalResults > 0) {
                            dispatch(setBusinessArticles(articles));
                        } else {
                            dispatch(setBusinessArticles([])) // empty array when no articles found
                        }
                        break;
                    }

                    case 'entertainment': {
                        if (response.data.totalResults > 0) {
                            dispatch(setEntertainmentArticles(articles));
                        } else {
                            dispatch(setEntertainmentArticles([])) // empty array when no articles found
                        }
                        break;
                    }

                    case 'general': {
                        if (response.data.totalResults > 0) {
                            dispatch(setGeneralArticles(articles));
                        } else {
                            dispatch(setGeneralArticles([])) // empty array when no articles found
                        }
                        break;
                    }

                    case 'health': {
                        if (response.data.totalResults > 0) {
                            dispatch(setHealthArticles(articles));
                        } else {
                            dispatch(setHealthArticles([])) // empty array when no articles found
                        }
                        break;
                    }

                    case 'science': {
                        if (response.data.totalResults > 0) {
                            dispatch(setScienceArticles(articles));
                        } else {
                            dispatch(setScienceArticles([])) // empty array when no articles found
                        }
                        break;
                    }

                    case 'sports': {
                        if (response.data.totalResults > 0) {
                            dispatch(setSportsArticles(articles));
                        } else {
                            dispatch(setSportsArticles([])) // empty array when no articles found
                        }
                        break;
                    }

                    case 'technology': {
                        if (response.data.totalResults > 0) {
                            dispatch(setTechnologyArticles(articles));
                        } else {
                            dispatch(setTechnologyArticles([])) // empty array when no articles found
                        }
                        break;
                    }

                    default: {
                        break;
                    }
                };
            })
            .catch(error => {
                alert(error)
            });
    };

}

const getRequestDetails = params => {
    const { category } = params;
    const country = process.env.REACT_APP_COUNTRY;
    const apiKey = process.env.REACT_APP_API_KEY;
    let url;
    if (category !== 'headlines') {
        url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=100`;
    } else {
        url = `http://newsapi.org/v2/top-headlines?country=${country}&pageSize=100`;
    }
    
    const options = {
        headers: {
            'X-Api-Key': apiKey
        }
    };

    return {
        url,
        options
    }
}
