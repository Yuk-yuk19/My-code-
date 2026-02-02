import { useEffect, useState } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router";
import Register from "./Register";
import Login from "./login";
import './App.css'
import { Video } from "./Video.tsx"
import Forum from "./Forum.tsx";
import DashboardV2 from "./dashboardV2.tsx"
import Discussion from "./Discussion.tsx";
import User from "./User.tsx";
import EditProfile from "./EditProfile.tsx";

function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/video" element={<Video />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<Discussion />} />
        <Route path="/dashboard" element={<DashboardV2/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/user/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
