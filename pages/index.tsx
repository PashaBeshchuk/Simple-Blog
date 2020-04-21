import Navbar from '../components/Navbar'
import React from 'react'
import { withRedux } from '../redux/withRedux'
import MainPosts from '../components/MainPosts'

const Home: React.FC<any> = (props) => {
  return (
    <div>
      <div>
        <Navbar/>
        <div className='img'>
          <img src="/blog.jpg" alt="Blog Logo"/>
        </div>
      </div>
      <MainPosts/>
      <style jsx>{`
        img {
          width:700px;
          height:420px;
          margin-left: 28%;
          margin-top: 2%;
        }
      `}</style>
    </div>
  )
}
export default withRedux(Home)