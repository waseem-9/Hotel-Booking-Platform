import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CustomerHeader.css"

const CustomerHeader = () => {
  let navigate = useNavigate();

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-customer");

    navigate("/home");
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="user/hotel/bookings"
          className="nav-link active"
          aria-current="page"
        >
          <button className="btn btn-danger fw-bold py-3 px-4 rounded-1 shadow-sm" role="button">Booked Hotel</button>
        </Link>
      </li>
         
      <li className="nav-item">
        <Link
          to="/userprofile"
          className="nav-link active"
          aria-current="page"
        >
          <button className="btn btn-danger fw-bold py-3 px-4 rounded-1 shadow-sm" role="button">profile</button>
        </Link>
      </li>
         
      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >
          <button className="btn btn-danger fw-bold py-3 px-4 rounded-1 shadow-sm" role="button">Logout</button>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default CustomerHeader;
