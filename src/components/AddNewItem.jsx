import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddNewItems = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/", values);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-lg-6">
            <div className="form-section">
              <h2 className="mb-3">Add User</h2>
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
                <input
                  className="form-control mb-3"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  name="phone"
                  placeholder="Enter phone"
                  onChange={(e) =>
                    setValues({ ...values, phone: e.target.value })
                  }
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  name="website"
                  placeholder="Enter website name"
                  onChange={(e) =>
                    setValues({ ...values, website: e.target.value })
                  }
                />
                <button type="submit" className="btn btn-primary me-3">
                  Submit
                </button>
                <Link to="/" className="btn btn-secondary">
                  Back
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNewItems;
