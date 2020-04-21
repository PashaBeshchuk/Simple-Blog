import { AppStateType } from './store';
import { postApi } from "../api/postApi"
import { ThunkAction } from 'redux-thunk';

const UPDATE_POSTS = 'UPDATE_POSTS'
const UPDATE_CURRENT_POST = 'UPDATE_CURRENT_POSTS'
const UPDATE_SUCCESSFULL_COMPLETED = 'UPDATE_SUCCESSFULL_COMPLETED'

export type CurrentPostType = { 
    id: number, 
    title: string, 
    body: string 
}

type InitialStateType = {
    posts:null | Array<CurrentPostType>
    currentPost:null | CurrentPostType
    successfullyCompleted: Boolean
}
type ListActionTypes = UpdatePostsACType | UpdateCurrentPostACType | UpdateSuccessfullyCompletedACType

type UpdatePostsACType = {
    type: typeof UPDATE_POSTS,
    posts: Array<CurrentPostType>
}
type UpdateCurrentPostACType = {
    type: typeof UPDATE_CURRENT_POST,
    currentPost: CurrentPostType
}
type UpdateSuccessfullyCompletedACType = {
    type: typeof UPDATE_SUCCESSFULL_COMPLETED,
    successfullyCompleted:Boolean
}

export const initialState:InitialStateType = {
    posts:null,
    currentPost:null,
    successfullyCompleted: false
}
export const reducerPost = (state = initialState, action:ListActionTypes):InitialStateType => {
    switch (action.type) {
        case UPDATE_POSTS:
            return {
                ...state,
                posts: action.posts,
            }   
        case UPDATE_CURRENT_POST: {
            return {
                ...state,
                currentPost: action.currentPost,
            }
        }
        case UPDATE_SUCCESSFULL_COMPLETED: {
            return {
                ...state,
                successfullyCompleted: action.successfullyCompleted,
            }
        }
        default:
            return state
    }
}

export const actions = {
     updatePostsAC: (posts: Array<CurrentPostType>):UpdatePostsACType => ({ type: UPDATE_POSTS, posts}),
     updateCurrentPostAC: (currentPost: CurrentPostType):UpdateCurrentPostACType => ({ type: UPDATE_CURRENT_POST, currentPost}),
     updateSuccessfullyCompletedAC: (successfullyCompleted: boolean):UpdateSuccessfullyCompletedACType => ({ type: UPDATE_SUCCESSFULL_COMPLETED, successfullyCompleted})
}

export const updatePostsAC = (posts: Array<CurrentPostType>) => ({ type: UPDATE_POSTS, posts})
export const updateCurrentPostAC = (currentPost: CurrentPostType) => ({ type: UPDATE_CURRENT_POST, currentPost})
export const updateSuccessfullyCompletedAC = (successfullyCompleted: boolean) => ({ type: UPDATE_SUCCESSFULL_COMPLETED, successfullyCompleted})

export const getAllPostsThunk = ():ThunkAction<Promise<void>, AppStateType, unknown, ListActionTypes> => {
    return async (dispatch) => {
        const response = await postApi.getAllPosts()
        if(response.status){
            dispatch(actions.updatePostsAC(response.data))
        }
    }
}
export const getCurrentPost = (id:number, posts:Array<CurrentPostType>):ThunkAction<Promise<void>, AppStateType, unknown, ListActionTypes> => {
    return async (dispatch) => {
        let currentPost:CurrentPostType
        for(let i = 0; i < posts.length; i++){
            if(posts[i].id == id) {
                dispatch(actions.updateCurrentPostAC(posts[i]))
            }
        }
    }
}
export const currentPostThunk = (title:string, body:string):ThunkAction<Promise<void>, AppStateType, unknown, ListActionTypes> => {
    return async (dispatch) => {
        const response = await postApi.postNewPost(title, body)
        if(response.status === 201) {
            dispatch(actions.updateSuccessfullyCompletedAC(true))
        }
    }
} 
export const deletePostThunk = (id: number):ThunkAction<Promise<void>, AppStateType, unknown, ListActionTypes> => {
    return async (dispatch) => {
        const response = await postApi.deletePost(id)
    }
}