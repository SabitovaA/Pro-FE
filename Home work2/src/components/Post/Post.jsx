import React, { useState } from 'react';
import CustomButton from '../UI/CustomButton'
import Modal from '../Modal/Modal'

function Post(posts){
    const [isOpen,setIsOpen] = useState(false)
    return(
        <div className="main">
            <h3>Fetch posts</h3>
            <CustomButton text='Fetch' onHandleClick={() => setIsOpen(!isOpen)}/>
            {
                isOpen && <Modal onHandleClick={() => setIsOpen(!isOpen)}/>
            }

        </div>
    )
}
export default Post;