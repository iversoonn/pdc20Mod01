import React from "react";

function AdminPanel({user}){
    return(
        <div>
            {user.isAdmin?(
                <div>
                    <h1>Admin Panel</h1>
                    <p>Welcome, {user.name} ! You have admin privileges</p>
                    <button>Add new users</button>
                    <button>Manage Settings</button>
                    <button>Manage Users</button>
                    <button>View Reports</button>
                </div>) : (
                    <div>
                        <h1>Guest Dashboard</h1>
                        <p>Welcome, {user.name} ! You are a guest </p>
                        <button>Update Profile Information</button>
                        <button>Settings</button>
                    </div>)}

        </div>
    )
}

export default AdminPanel;