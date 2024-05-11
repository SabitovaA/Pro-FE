import React from 'react';
import { users } from "../config/List"; 
import PostItem from "../PostItem/PostItem";
import CustomButton from "../UI/CustomButton";


function Modal(props) {
    return (
       <div className='modal'>
         <div className="modal__box">
            <h2>Fetch posts</h2>
            <div>
                {users.map((item, index) => (
                    <PostItem key={item.id} item={item}/>
                ))}
            </div>
            <CustomButton text='close' onHandleClick={props.onHandleClick}/>
        </div>
       </div>
    )
}

export default Modal;