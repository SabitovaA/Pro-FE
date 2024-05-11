function PostItem(props){
    const { item } = props; 
    const { User, Email, Tel } = item;
    return(
        <div>
            <div className="box">
                <h4>User: {User}</h4>
                <p>Email: {Email}</p>
                <p>Tel:{Tel}</p>
            </div>
        </div>
    )
}
export default PostItem;