import React from "react";
import UserGreetings from "./UserGreetings";

function Homepage(){
    return (
        <div>
            <UserGreetings isLoggedIn={false}/>
        </div>
    );

}

export default Homepage;