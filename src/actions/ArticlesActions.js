import axios from 'axios';

export const setBusinessArticles = (articles) => {
    return {
        type: 'SET_BUSINESS_ARTICLES',
        payload: articles
    };
};


export const startGetBusinessArticles = () => {
    return (dispatch) => {
        const country = process.env.REACT_APP_COUNTRY;
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `http://newsapi.org/v2/top-headlines?country${country}&category=business&pageSize=100`;
        const options = {
            headers: {
                'X-Api-Key': apiKey
            }
        };
        axios.get(url, options)
            .then(response => {
                if (response.data.totalResults > 0) {
                    const { articles } = response.data
                    dispatch(setBusinessArticles(articles))
                } else {
                    dispatch(setBusinessArticles([])) // empty array when no articles found
                }
            })
            .catch(error => {
                alert(error)
            });
    };
};