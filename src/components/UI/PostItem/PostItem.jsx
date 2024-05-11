import catImage from "../images/cat.png"

function PostItem(props){
    const {title,discription} = props
    console.log(props)
    return (
       <div className="box">
           <div className="left">
               <h3> title: {title}</h3>
               <p> discription; {discription}</p>
           </div>
           <div className="right">
               <img className='catImage' src={catImage} alt="" />
           </div>
       </div>
    );
}
export default PostItem;