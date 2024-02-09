import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewData = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/" + id);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card" style={{ width: "25rem", marginBottom:25 }}>
          <div className="card-header">
            <strong>User Detail</strong>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Name: {data.name}</strong>
            </li>
            <li className="list-group-item">
              <strong>Email: {data.email}</strong>
            </li>
            <li className="list-group-item">
              <strong>Phone Number: {data.phone}</strong>
            </li>
            <li className="list-group-item">
              <strong>Website: {data.website}</strong>
            </li>
          </ul>
        </div>

        <Link to={`/users/${id}`} className="btn btn-primary me-3">
          Edit
        </Link>
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </div>
    </>
  );
};
export default ViewData;
