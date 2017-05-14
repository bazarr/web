const postForm = (state = { showModal: false }, action) => {
    switch (action.type) {
        case 'OPEN_POST_MODAL':
            return {
                showModal: true
            }
        case 'CREATE_POST':
            return {
                showModal: false
            }
        case 'CLOSE_POST_MODAL':
            return {
                showModal: false
            }
        default:
            return state
    }
};

export default postForm;