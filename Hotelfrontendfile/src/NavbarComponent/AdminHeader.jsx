import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    window.location.reload(true);
    navigate("/home");
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
      <li className="nav-item">
        <Link
          to="/admin/add-location"
          className="nav-link active"
          aria-current="page"
        >
          <button className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #050C9C, #3572EF )',
        borderRadius: '2px',
        fontSize:"10px",
        color: "white",
        padding:"8px"
      }}>Add Location</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/add-facility"
          className="nav-link active"
          aria-current="page"
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        background: 'linear-gradient(to right, #050C9C, #3572EF )',
        borderRadius: '2px',
        fontSize:"10px",
        color:"white",
        padding:"8px"
      }} >Add Facility</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/hotel/register"
          className="nav-link active"
          aria-current="page"
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #050C9C, #3572EF )',
        borderRadius: '2px',
        fontSize:"10px",
        color:'white',
        padding:"8px"
      }}>Register Hotel User</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/admin/hotel/register"
          className="nav-link active"
          aria-current="page"
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #050C9C, #3572EF )',
        borderRadius: '2px',
        fontSize:"10px",
        color:"white",
        padding:"8px"
      }}>Add Hotel</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="user/admin/booking/all"
          className="nav-link active"
          aria-current="page"
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #050C9C, #3572EF )',
        borderRadius: '2px',
        fontSize:"10px",
        color:"white",
        padding:"8px"
      }}>View All Bookings</button>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <button  className="btn btn-sm btn-prime"
      style={{
        backgroundImage: 'linear-gradient(to right, #050C9C, #3572EF )',
        borderRadius: '2px',
        fontSize:"10px",
        color:"white",
        padding:"8px"
      }}>Logout</button>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
