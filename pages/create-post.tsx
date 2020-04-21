import React from 'react'
import { withRedux } from '../redux/withRedux'
import CreatePost from '../components/CreatePost'
import Navbar from '../components/Navbar'

const NewPost: React.FC<any> = (props) => {
    return <div>
        <Navbar/>
        <h1>Create new post</h1>
        <CreatePost/>
        <style jsx>{`
            h1 {
                margin-left: 45%;
            }
        `}</style>
    </div>
}


export default withRedux(NewPost)



