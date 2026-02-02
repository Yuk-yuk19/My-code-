import { useState } from "react";
import { Link } from "react-router";
import "./EditProfile.css";

interface EditProfileData {
  pseudo: string;
  email: string;
  password: string;
  profilePicture: string;
}

export default function EditProfile() {
  const [formData, setFormData] = useState<EditProfileData>({
    pseudo: "Yukimisu",
    email: "Yukimisu@epitest.eu",
    password: "",
    profilePicture:
      "https://imgs.search.brave.com/HHCRW5KQJwq8Ap0ptFRrZzC_juLgBEcl2OKapr0gzD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLW5s/dDk5Nml5NnZqaHBm/dXEuanBn",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Your Profile is saved !");
  };

  return (
    <div className="edit-profile-container">
      <h1 className="edit-profile-title">Edit Profile</h1>

      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label className="edit-profile-label" htmlFor="pseudo">
          Pseudo
        </label>
        <input
          id="pseudo"
          name="pseudo"
          className="edit-profile-input"
          type="text"
          value={formData.pseudo}
          onChange={handleChange}
          placeholder="KillBuster"
          required
        />

        <label className="edit-profile-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          className="edit-profile-input"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email@yourlife.eu"
          required
        />

        <label className="edit-profile-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          className="edit-profile-input"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="********"
        />

        <label className="edit-profile-label" htmlFor="profilePicture">
          Picture for Profile (URL)
        </label>
        <input
          id="profilePicture"
          name="profilePicture"
          className="edit-profile-input"
          type="url"
          value={formData.profilePicture}
          onChange={handleChange}
          placeholder="https://..."
        />

        <div className="edit-profile-actions">
          <Link className="edit-profile-cancel" to="/user">
            Back
          </Link>
          <button className="edit-profile-save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
