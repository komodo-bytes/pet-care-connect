// src/components/Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    petName: '',
    petType: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send profile data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      <input
        type="text"
        name="petName"
        value={profile.petName}
        onChange={handleChange}
        placeholder="Pet's Name"
      />
      <input
        type="text"
        name="petType"
        value={profile.petType}
        onChange={handleChange}
        placeholder="Pet Type"
      />
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default Profile;