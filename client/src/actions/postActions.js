import axios from 'axios';
import {
  ADD_POST,
  GET_ERRORS,
  POST_LOADING,
  GET_POSTS,
  DELETE_POST,
  GET_POST,
  EDIT_POST,
  GET_LIKES
} from './types';

//Get post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

//Get posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get('/api/posts')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

//Add post
export const addPost = postData => dispatch => {
  axios
    .post('/api/posts', postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//Edit post
export const editPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}/edit`)
    .then(res =>
      dispatch({
        type: EDIT_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//update post

export const updatePost = (id, postData) => async dispatch => {
  try {
    await axios.put(`/api/posts/${id}`, postData);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

//delete post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Get likes
export const getLikes = () => dispatch => {
  axios
    .get('/api/posts')
    .then(res =>
      dispatch({
        type: GET_LIKES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_LIKES,
        payload: null
      })
    );
};

//add like
export const addLike = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getLikes()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//remove like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getLikes()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set Loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
