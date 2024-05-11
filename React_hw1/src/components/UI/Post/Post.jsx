import {posts} from '../config/post' 
import PostItem from '../PostItem/PostItem'


function Post(){
    return(
       <>
        <section>
        <div>
          <h1>Posts</h1>
           <div className="container__two">
              {posts.map((item, index) => (
              <PostItem key={index }/>
               ))}
           </div>
          </div>
        </section>
       </>
    );
}
export default Post