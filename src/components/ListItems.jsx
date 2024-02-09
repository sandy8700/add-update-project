import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          console.log(res.data.id);
          location.reload();
        })
        .catch((er) => console.log(er));
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="mb-4">
          <Link to="/create" className="btn btn-success">
            Add User
          </Link>
        </div>
        <h2>List of Users</h2>
        <table className="table table-dark table-hover mt-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <Link to={`/view/${user.id}`} className="btn btn-info me-3">
                    View
                  </Link>
                  <Link
                    to={`/users/${user.id}`}
                    className="btn btn-primary me-3">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListItems;
