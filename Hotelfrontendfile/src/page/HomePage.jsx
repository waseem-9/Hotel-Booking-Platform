import Carousel from "./Carousel";
import GetAllLocations from "../LocationComponent/GetAllLocations";
import GetAllFacility from "../FacilityComponent/GetAllFacility";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HotelCard from "../HotelComponent/HotelCard";
import Footer from "./Footer";
import Aos from "aos"
import 'aos/dist/aos.css';
import Trending from "./Trending";
import Features from "./Features";

const HomePage = () => {
  const [hotels, setHotels] = useState([]);
  const { locationId } = useParams();

  useEffect(() => {
    const getAllHotels = async () => {
      const allHotels = await retrieveAllHotels();
      if (allHotels) {
        setHotels(allHotels.hotels);
      }
    };

    const getProductsByLocation = async () => {
      const allHotels = await retrieveProductsByLocation();
      if (allHotels) {
        setHotels(allHotels.hotels);
      }
    };

    if (locationId == null) {
      console.log("Location Id is null");
      getAllHotels();
    } else {
      console.log("Location Id is NOT null");
      getProductsByLocation();
    }
  }, [locationId]);

  const retrieveAllHotels = async () => {
    const response = await axios.get("http://localhost:8080/api/hotel/fetch");

    return response.data;
  };

  const retrieveProductsByLocation = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/hotel/location?locationId=" + locationId
    );

    return response.data;
  };

   
  useEffect(()=>{
      Aos.init({duration:2000})
  },[])

  return (
    <div className="container-fluid mb-2">
      <div className="p-3">
      <Carousel />
      </div>
      <div className="p-25">
        <Features/>
      </div>
      <div>
        <Trending/>
      </div>
      <hr />
      <div className="mt-2 mb-5">
        <div className="row">
          <div className="col-md-2" data-aos='fade-left'>
            <GetAllLocations />
          </div>
          <div className="col-md-8" data-aos="fade-up">
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {hotels.map((hotel) => {
                return <HotelCard item={hotel}/>;
              })}
            </div>
          </div>
          <div className="col-md-2" data-aos="fade-right">
            <GetAllFacility />
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
