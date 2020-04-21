import React from 'react'
import Link from 'next/link'
import { CurrentPostType } from '../redux/reducerPost'


const PostToHomePage: React.FC<CurrentPostType> = (props) => {
    const { title, body, id } = { ...props } 
    return (
        <div className='mainPost_post'>
            <h2 className='header'>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a>{title}</a>
                </Link>   
            </h2>
            <div className='mainPost_post__text'>
                {body}
            </div>

            <style jsx>{`
                .mainPost_post {
                    width: 300px;
                    height: 200px;
                    border: 1px solid black;
                    margin-top: 16%;
                }
                .mainPost_post > h2 {
                    text-align: center; 
                    
                }
                .mainPost_post > div {
                    width: 40%;
                    margin-left: 10%;
                }
                a {
                    color:black;
                    text-alight;
                    text-decoration: none;
                }
                .mainPost_post__text {
                    width: 80%;
                    margin-left: 10%;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 4;
                    height: 129px;
                    overflow: hidden;
                }
            `}
            </style>
        </div>
        
    )
}

export default PostToHomePage