import { useState } from 'react';
import React from 'react'
import './comment.css';
import CommentUserService from '../../service/CommentUserService';

const Comment = () => {
    const [comment_user, setCommentUser] = useState({
        email: "",
        fullname: "",
        projectName: "",
        commentofuser: ""
    });
    const [errorMessageemail, setErrorMessageemail] = React.useState('');
    const [errorMessagecomment, setErrorMessagecomment] = React.useState('');
    const [textSuccessfull, settextSuccessfull] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        setCommentUser({ ...comment_user, [e.target.name]: value });
    }
    const saveComment = (e) => {
        e.preventDefault();

        if (!comment_user.email) {
            setErrorMessageemail('Email Address cannot be empty');
            settextSuccessfull("");

            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailPattern.test(comment_user.email)) {
            setErrorMessageemail('Email address is not valid');
            settextSuccessfull("");

            return;
        }
        setErrorMessageemail('');
        if (!comment_user.commentofuser) {
            setErrorMessagecomment('Comments cannot be empty');
            settextSuccessfull("");
            return;
        }
        setErrorMessagecomment('');

        CommentUserService.saveComment(comment_user)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        setCommentUser({
            email: "",
            fullname: "",
            projectName: "",
            commentofuser: ""
        });
        settextSuccessfull("Your comment has been sent successfully");
    };
    return (

        <div className='pflo__comment' id='comment'>
            <div className='pflo__comment-heading'>
                <h1 className='gradient__text'>Enter your comment right here !</h1>
            </div>
            <div className='pflo__comment-content'>
                <input type="email"
                    placeholder="Your email address"
                    name='email'
                    value={comment_user.email}
                    onChange={(e) => handleChange(e)}
                />
                {errorMessageemail && <p className="error-message">{errorMessageemail}</p>}
                <input type="text"
                    placeholder='Your name'
                    name='fullname'
                    value={comment_user.fullname}
                    onChange={(e) => handleChange(e)}
                />
                <input type="text"
                    placeholder='My project name'
                    name='projectName'
                    onChange={(e) => handleChange(e)}
                    value={comment_user.projectName}
                />
                {/* <input type="text" placeholder='Comment' id='comments' /> */}
                <textarea
                    cols="30"
                    rows="4"
                    placeholder='Comments'
                    name='commentofuser'
                    value={comment_user.commentofuser}
                    onChange={(e) => handleChange(e)}
                ></textarea>
                {errorMessagecomment && <p className="error-message">{errorMessagecomment}</p>}

            </div>
            {textSuccessfull && <p className="successfull-message">{textSuccessfull}</p>}
            <div className='pflo__comment-btn'>
                <button
                    type='button'
                    className='btn-transition'
                    onClick={saveComment}
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default Comment