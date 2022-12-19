import React from 'react'
import PropTypes from "prop-types";
function Profile(props) {

   
  return (
    <div>
      my name is {props.fullName} , my bio : {props.bio} my profession: {props.profession}
     <img src={props.children}></img>
     <button onClick={ ()=>{props.fct(props.fullName)}}>click</button>
      
      </div>
  )
}
Profile.defaultProps={
    fullName :" ramez"
}

Profile.propTypes={
    fullName :PropTypes.string,
}
export default Profile
