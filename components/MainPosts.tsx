import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllPostsThunk, CurrentPostType } from '../redux/reducerPost'
import PostToHomePage from './PostToHomePage'
import Preloader from './Preloader'
import { AppStateType } from '../redux/store'


type PropsType = {
    posts: Array<CurrentPostType>
    getAllPostsThunk: ()=> void
} 


const MainPosts: React.FC<PropsType> = (props) => {
    const { posts, getAllPostsThunk } = { ...props }
    useEffect(()=>{
        getAllPostsThunk()
    },[])
    if(!posts) {
        return <div className='preloader'>
            <Preloader/>
            <style jsx>{`
                .preloader {
                    margin-left: 48%;
                }
            `}</style>
        </div>
    }
    const allPosts = posts.map((posts, id) => {
        return <div key={id}><PostToHomePage {...posts} /></div>
    })

    return <div className='main-post'>
        {allPosts}
        <style jsx>{`
            .main-post {
                margin-left: 20%;
                display: flex;
                flex-wrap: wrap;
                height: 400px;
                align-content: space-between;
                justify-content: space-between;
                width: 70%;
            }
        `}
        </style>
    </div>
}
const mapStateToProps = (state:AppStateType) => {
    return {
        posts:state.reducerPost.posts
    }
}


export default connect(mapStateToProps, {getAllPostsThunk})(MainPosts)