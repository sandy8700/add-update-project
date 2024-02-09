import { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [emailUpdate, setEmailUpdate] = useState("");
  const [editId, setEditID] = useState(-1);

//  const { id } = useParams()
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);

  // add table function
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = data.length + 1;
    axios
      .post('http://localhost:3000/users/', { id: id, name: name, email: email })
      .then((res) => {
        console.log(res);
        location.reload();
      })
      .catch((er) => console.log(er));
  };

  // Edit  function
  const handleEdit = (id) => {
    axios
      .get('http://localhost:3000/users/'+id)
      .then((res) => {
        setNameUpdate(res.data.name);
        setEmailUpdate(res.data.email);
      })
      .catch((er) => console.log(er));
    setEditID(id);
  };

  // Update function

  const handleUpdate = () => {
    axios
      .put('http://localhost:3000/users/'+editId, {
        id: editId,
        name: nameUpdate,
        email: emailUpdate,
      })
      .then((res) => {
        console.log(res);
        location.reload();
        setEditID(-1);
      })
      .catch((er) => console.log(er));
  };

  // delete function
  const handleDelete = (id) => {
    axios
      .delete('http://localhost:3000/users/'+ id).then((res) => {
        console.log(res.data.id);
        location.reload();
      }).catch((er) => console.log(er));
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-3"
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
      <table className="table table-dark table-hover mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) =>
            user.id === editId ? (
              <>
                <tr>
                  <td>{user.id}</td>
                  <td>
                    <input 
                      type="text"
                      className="form-control"
                      value={nameUpdate}
                      onChange={(e) => setNameUpdate(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={emailUpdate}
                      onChange={(e) => setEmailUpdate(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate} className="btn btn-success">
                      Update
                    </button>
                  </td>
                </tr>
              </>
            ) : (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)} className="btn btn-primary me-3">Edit</button>

                  <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
export default Table;
