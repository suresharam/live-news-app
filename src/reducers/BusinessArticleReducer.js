const businessArticleInitalValue = [];

const businessArticleReducer = (state = businessArticleInitalValue, action) => {
    switch(action.type) {
        case 'SET_BUSINESS_ARTICLES' : {
            return [
                ...action.payload
            ]
        }

        default: {
            return [
                ...state
            ]
        }
    }
}

export default businessArticleReducer;