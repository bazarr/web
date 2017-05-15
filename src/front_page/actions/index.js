export const submitNewPost = () => {
    return {
        type: 'CREATE_POST'
    }
}

export const openCreatePostModal = () => {
    return {
        type: 'OPEN_POST_MODAL'
    }
};

export const closeCreatePostModal = () => {
    return {
        type: 'CLOSE_POST_MODAL'
    }
};

export const doneLoadingPosts = () => {
    return {
        type: 'LOADING_POSTS_SUCCESS'
    }
};