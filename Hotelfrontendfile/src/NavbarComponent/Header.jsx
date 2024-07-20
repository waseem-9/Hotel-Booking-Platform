import { Link } from "react-router-dom";
import logo from "../images/Hotel.png.png";
import RoleNav from "./RoleNav";
import "./Header.css";
import Aos from 'aos';
import logo1 from "../images/hbs.png";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch locations from the backend
    axios.get('http://localhost:8080/api/location/fetch')
      .then(response => {
        console.log('Fetched response:', response.data); // Debugging line
        // Ensure the response structure is as expected
        if (response.data && Array.isArray(response.data.locations)) {
          console.log('Fetched locations:', response.data.locations); // Debugging line
          setLocations(response.data.locations);
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter locations based on the search term
    const filteredSuggestions = locations.filter(location =>
      location.city && location.city.toLowerCase().includes(value.toLowerCase())
    );
    console.log('Filtered suggestions:', filteredSuggestions); // Debugging line
    setSuggestions(filteredSuggestions);
    setShowModal(true); // Show modal when user starts typing
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="sticky-top" data-aos='zoom-out'>
      <nav className="navbar  navbar-expand-lg " style={{ padding: "15px", background: "#DEF9C4" }}>
        <div className="container-fluid text-color">
          <Link to="/"> <img
            src={logo1}
            width="70"
            height="70"
            className="d-inline-block align-top rounded-circle"
            alt=""
          /></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-auto">
                <div className="search-container">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="search-input"
                  />
                </div>
              </li>
            </ul>
            <RoleNav />
          </div>
        </div>
      </nav>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Search Suggestions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {suggestions.length === 0 && searchTerm && (
            <div className="no-suggestions">No suggestions found</div>
          )}
          <ul className="list-unstyled">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={`/home/hotel/location/${suggestion.id}/${suggestion.city}`}
                  className="suggestion-item"
                  onClick={handleCloseModal}
                >
                  {suggestion.city}
                </Link>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
