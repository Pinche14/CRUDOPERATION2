import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Update = () => {
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() =>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])

    const handleUpdate = (e) =>{
        e.preventDefault();
        console.log("ID...",id)
        axios.put(
            `https://636568df046eddf1baed68c4.mockapi.io/crudapp/crud2${id}`,
            {
                name:name,
                email:email,
            }
        ).then(() =>{
            navigate("/read")
        })
    }
    return (
        <>
            <h2>Update</h2>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input type="name" className="form-control" aria-describedby='emailHelp'value={name} onChange={(e) => setName(e.target.name)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control"  aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
                    <Link to="/read">
                        <button className="btn btn-secondary mx-2">Back</button>
                    </Link>
                </form>
            </>
    )
}
export default Update
