import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Assuming user ID is stored in local storage
        const response = await axios.get(`http://localhost:8080/api/user/id?userId=14`);
        setUser(response.data.user);
        setUpdatedUser(response.data.user); // Initialize updatedUser with fetched data
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userId = localStorage.getItem('userId');
        await axios.put(`http://localhost:8080/api/user/id?userId=${userId}`, updatedUser);
        setUser(updatedUser); // Update the displayed user data
        setIsEditing(false); // Exit editing mode
    } catch (error) {
        console.error('Error updating user:', error);
    }
};


  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {user ? (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
          <h2>User Profile Details</h2>
          {!isEditing ? (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td><strong>FirstName:</strong></td>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <td><strong>LastName:</strong></td>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{user.emailId}</td>
                </tr>
                <tr>
                  <td><strong>Contact:</strong></td>
                  <td>{user.contact}</td>
                </tr>
                <tr>
                  <td><strong>Address:</strong></td>
                  <td>{user.street}, {user.city}, {user.pincode}</td>
                </tr>
                <tr>
                  <td><strong>Age:</strong></td>
                  <td>{user.age}</td>
                </tr>
                <tr>
                  <td><strong>Sex:</strong></td>
                  <td>{user.sex}</td>
                </tr>
                <tr>
                  <td><strong>Role:</strong></td>
                  <td>{user.role}</td>
                </tr>
                {/* Add more fields as needed */}
              </tbody>
            </table>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  First Name:
                  <input type="text" name="firstName" value={updatedUser.firstName} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Last Name:
                  <input type="text" name="lastName" value={updatedUser.lastName} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input type="email" name="emailId" value={updatedUser.emailId} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Contact:
                  <input type="text" name="contact" value={updatedUser.contact} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Address:
                  <input type="text" name="street" value={updatedUser.street} onChange={handleChange} />
                  <input type="text" name="city" value={updatedUser.city} onChange={handleChange} />
                  <input type="text" name="pincode" value={updatedUser.pincode} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Age:
                  <input type="number" name="age" value={updatedUser.age} onChange={handleChange} />
                </label>
              </div>
              <div>
                <label>
                  Sex:
                  <input type="text" name="sex" value={updatedUser.sex} onChange={handleChange} />
                </label>
              </div>
              {/* Add more fields as needed */}
              <button type="submit">Save</button>
            </form>
          )}
          <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Cancel' : 'Edit'}</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
