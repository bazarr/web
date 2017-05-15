const content = (state = { isLoading: true }, action) => {
    switch (action.type) {
        case 'LOADING_POSTS_SUCCESS':
            return {
                isLoading: false
            }
        default:
            return state
    }
};

export default content;