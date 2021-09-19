import React from 'react';

function Profile({props,func}) {
    return (
        <div style={{width:"300px",height:"200px",backgroundColor:"red",color:"white"}}>
            <h1 >{props.name}</h1>
            <h2>{props.age} </h2>
            <button onClick={()=>func(props.email)}>click</button>
          

        </div>
    );
}

export default Profile;
