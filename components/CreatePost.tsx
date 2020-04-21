import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {currentPostThunk, updateSuccessfullyCompletedAC} from '../redux/reducerPost'
import { AppStateType } from '../redux/store'

type PropsType = {
    currentPostThunk: (title:String, text:String)=> void 
    successfullyCompleted: Boolean 
    updateSuccessfullyCompletedAC: (Boolean)=> void
}

const CreatePost: React.FC<PropsType> = (props) => {
    const { currentPostThunk, successfullyCompleted, updateSuccessfullyCompletedAC } = { ...props }
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
    useEffect(()=>{
        if(successfullyCompleted){
            setTitle('')
            setText('')
        }
    },[successfullyCompleted])
    const sendCreatedPost = () => {
        updateSuccessfullyCompletedAC(false)
        currentPostThunk(title,text) 
    }
    return(
        <div className='body_create-post'>
            <span>{successfullyCompleted && 'The action was successful!'}</span>
            <h3>Create title</h3>     
            <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <h3>Create post</h3>
            <textarea value={text} onChange={(e)=> setText(e.target.value)}/>
            <div><button onClick={sendCreatedPost}>Create</button></div>
            <style jsx>{`
                .body_create-post {
                    margin-left: 20%;
                    margin-top: 5%;
                }
                input {
                    width: 500px;
                    height: 30px;
                    font-size: 20px;
                    padding: 1px 0px;
                    border-width: 2px;
                    border-style: inset;
                    border-color: initial;
                    border-image: initial;
                }
                textarea { 
                    width: 500px;
                    resize: none;
                    height: 200px;
                    font-size: 16px;
                }
                button {
                    width: 507px;
                     
                }
                span {
                    color:green;
                }
            `}</style>
        </div>
    )
}

const mapStateToProps = (state:AppStateType) => {
    return {
        successfullyCompleted: state.reducerPost.successfullyCompleted
    }
} 


export default connect(mapStateToProps, {currentPostThunk, updateSuccessfullyCompletedAC})(CreatePost)