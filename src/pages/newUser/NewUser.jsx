import React from 'react';
import './newUser.css';

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newY">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="vincy07" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Vikrant Shrestha" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="vincy07@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="password">Password</label>
                    <input type="pssword" placeholder="Password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" placeholder="9841999999" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Sankhu Kathmandu" />
                </div>

                <div className="newUserItem">
                    <label htmlFor="gender">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="gender">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="gender">Female</label>
                        <input type="radio" name="gender" id="others" value="others" />
                        <label htmlFor="gender">Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="status">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newUserButtonContainer">
                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    );
}
