import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./userReducer";

function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch()
    
    const existingUsers = users.filter(f=>f.id == id)
    const {name,email} = existingUsers[0];

    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);

    const navigate = useNavigate()

    function handleUpdate(event){
        event.preventDefault();
        dispatch(updateUser({id:id,name:uname,email:uemail}))
        navigate('/')
    }

    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <form onSubmit={handleUpdate}>
            <h3>Edit Users</h3>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={uname}
                onChange={(e)=>setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={uemail}
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-info">Update</button>
          </form>
        </div>
      </div>
    );
}

export default Update
