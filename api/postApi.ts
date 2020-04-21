import { CurrentPostType } from './../redux/reducerPost';
import instance from "./instence"
type PostNewPostType = {
    data: CurrentPostType | Object
    status:Number
    statusText: String
    headers: Object
    config:Object
    request:Object
}

export const postApi = {
    getAllPosts() {
        return instance.get<Array<CurrentPostType>>('/posts')
    },
    postNewPost<PostNewPostType>(title:String, body:String) {
        return instance.post('/posts', {
            title,
            body
        })
    },
    deletePost(id:Number) {
        return instance.delete<PostNewPostType>(`/posts/${id}`)
    } 
}