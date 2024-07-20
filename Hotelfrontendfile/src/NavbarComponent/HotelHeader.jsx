import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './HotelHeader.css'
const HotelHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-hotel"));
  console.log(user);

  const hotelLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-hotel");
    window.location.reload(true);
    navigate("home");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="user/hotel/bookings/all"
          className="nav-link active"
          aria-current="page"
        >
          <button className="btn btn-primary fw-bold rounded-1 shadow-sm" role="button" style={{background:"#06D001", padding:"12px", width:"160px", fontSize:"14px"}}>All Booked Hotel</button>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={hotelLogout}
        >
          <button className="btn btn-primary fw-bold  rounded-1 shadow-sm" role="button" style={{background:"#06D001", padding:"12px", width:"80px", fontSize:"14px"}}>Logout</button>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default HotelHeader;
