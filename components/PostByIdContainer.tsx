import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getCurrentPost, deletePostThunk, CurrentPostType } from '../redux/reducerPost'
import Preloader from './Preloader'
import { AppStateType } from '../redux/store'

type PropsType = {
    id: number
    posts: Array<CurrentPostType>
    getCurrentPost: (id: Number, posts: Array<CurrentPostType>) => void
    currentPost: null | CurrentPostType
    deletePostThunk: (id: String) => void
}

const PostByIdContainer: React.FC<PropsType> = (props) => {
    const { id , posts, getCurrentPost, currentPost, deletePostThunk } = { ...props }
    useEffect(() => {
        debugger
        getCurrentPost(id, posts)
    },[])
    if(!currentPost) {
        return <div><Preloader/></div>
    } else {
        return <div>
            <Post currentPost={currentPost} deletePostThunk={deletePostThunk} id={id}/>
        </div>
     }
    
}

type PropsPostType = {
    currentPost: CurrentPostType
    id: number
    deletePostThunk: Function
}

const Post: React.FC<PropsPostType> = (props) => {
    const { title, body } = { ...props.currentPost }
    return <div className='body_post'>
        <h1>{title}</h1>
        <div>{body}</div>
        <div>
        <button onClick={()=>props.deletePostThunk(props.id)}>deletePost</button>
        </div>
        <style jsx>{`
            h1 {
                margin-left: 45%;
            }
            .body_post > div {
                width: 80%;
                margin-left: 10%;
            }
        `}</style>
    </div>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts:state.reducerPost.posts,
        currentPost: state.reducerPost.currentPost,
    }
}

export default connect(mapStateToProps,{ getCurrentPost, deletePostThunk })(PostByIdContainer)