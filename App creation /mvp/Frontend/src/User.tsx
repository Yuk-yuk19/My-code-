import { useState } from 'react';
import React from "react";
import { Link } from "react-router";
import "./User.css"

interface UserData {
  pseudo: string;
  username: string;
  profilePicture: string;
}

export default function User() {
  const [user, setUser] = useState<UserData>({
    pseudo: "Yukimisu",
    username: "yuks_yuks",
    profilePicture: "https://imgs.search.brave.com/HHCRW5KQJwq8Ap0ptFRrZzC_juLgBEcl2OKapr0gzD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLW5s/dDk5Nml5NnZqaHBm/dXEuanBn"
  });

  return (
    <div className="user-container">
      <img src={user.profilePicture} alt="Profile" className="profile-picture" />
      <h1>{user.pseudo}</h1>
      <p>@{user.username}</p>
      <div className='EditProfileContainer'>
        <Link className='edit-profile-btn' to="/user/edit">Edit Profile</Link>
      </div>
    </div>

  );
}