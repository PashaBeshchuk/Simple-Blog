import React from 'react'
import Link from 'next/link'
const Navbar: React.FC<any> = () => {
    return (
        <div className='box-link'>
            <div>
                <Link href="/index" as='/'>
                    <a>Home</a>
                </Link>
            </div>
            <div>
                <Link href="/NewPost" as='/posts/new'>
                    <a>Create New Post</a>
                </Link>
            </div>
            <style jsx>{`
                .box-link {
                    display:flex;
                    justify-content: center;
                    align-content: space-between;
                    margin:0;
                    padding:0;
                }
                .box-link > div {
                    margin-left: 20px;
                }
                a {
                    color:black;
                }
            `}
            </style>
        </div>
    )
}

export default Navbar