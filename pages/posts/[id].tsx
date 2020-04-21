import  { useRouter } from 'next/router'
import { withRedux } from '../../redux/withRedux'
import PostByIdContainer from '../../components/PostByIdContainer'
import NewPost from '../create-post'
import Navbar from '../../components/Navbar'
const PostId: React.FC<any> = (props) => {
    const router = useRouter()
    const { id } = router.query
    if(id ==='new') {
        return <div>
            <NewPost {...props}/>
        </div>
    }
    return <div>
        <Navbar/> 
            <PostByIdContainer id={id}/>
    </div>
}

export default withRedux(PostId)