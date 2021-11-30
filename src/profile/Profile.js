import React from 'react'
import propTypes from 'prop-types'

const Profile = (props) => {
    const handlename = () => alert ('this is $ {props.fullname}')
    console.log(props)
    return (
        <div>
            {props.children}
         <h1>{props.fullname}</h1>  
         <h1>{props.Bio}</h1>  
         <h1>{props.profission}</h1>  
         <button onClick={handlename}>click me</button>
        </div>
    )
}

Profile.defaultProps ={
    fullname :"fullname"
  }
Profile.propTypes ={
    fullname:propTypes.string
}

export default Profile;