import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateItems = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    updateFetchData();
  }, []);

  const updateFetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/");
      setValues(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/users/" + id,
        values
      );
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
              <h2 className="mb-3">Update Users</h2>
              <form onSubmit={handleUpdate}>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Enter Name"
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
                <input
                  className="form-control mb-3"
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Enter Email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  name="phone"
                  value={values.phone}
                  placeholder="Enter phone"
                  onChange={(e) =>
                    setValues({ ...values, phone: e.target.value })
                  }
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  name="website"
                  value={values.website}
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
export default UpdateItems;
