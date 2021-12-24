import React from 'react'
import PropTypes from 'prop-types';


function Profile(props) {
    return (
        <div>
            <h1>{props.fullName} </h1>
            <h2>{props.profession} </h2>
            <div>{props.children} </div>
            <p> 
            <d>Bio </d> 
            <br /> 
            {props.bio}
            </p>
            <button onClick={()=> props.handleName('Profile User: ${props.fullName}')}> clickMe </button>
        </div>
    );
};
Profile.defaultProps = {
    fullName : "I am a first name and a last name",
    bio : "lorem ,nksjckjkljlklkls  kjsljdllklk kjkdjkjkljlsd kjkjljljsfhj jjljljdljjkljj kjkjkcjkjlk ",
    profession : "profession",
    children : "profile photo",
};
Profile.propsTypes={
    fullName : PropTypes.string,
    bio: PropTypes.string.isRequired,
    children : PropTypes.any,
};

export default Profile
