import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


  


const UserApi = () => {

    const[users, setUsers] = useState([]);
    const getUsers = async()=>{
        const response =await fetch('https://api.github.com/users');

       setUsers(await response.json());
        
    }
  
      useEffect(()=>{
          getUsers();
      },[]);

      const [show, setShow] = useState(false);
      const[show1, setShow1] = useState(false);
      const handleClose = () => setShow(false);
  const handleUpdate = () => setShow(true);
  const handleDelete = () => setShow1(true);

  


  return (
    <>
        <h2 className='text-center'>list of users</h2>
        <div className="container-fluid mt-5">
            <div className="row text-center">
    {
        users.map((curElem)=>{
            return(
                <div className="col-10 col-md-4 mt-5">
            <div className="card">
            <img src={curElem.avatar_url} class="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{curElem.login}</h5>
  <p> {curElem.url} </p>
  <p> {curElem.html_url} </p>
  <a href="#" className="btn btn-primary" >Like</a>
  <a href="#" className="btn btn-secondary" onClick={handleUpdate}>Update</a>
  <a href="#" className="btn btn-danger" onClick={handleDelete}>Delete</a>

  <Modal show={show} onHide={handleUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            

        <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>          
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Website</label>
    <input type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  
  
</Modal.Body>
        <Modal.Footer>


          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  </div>
</div>
 </div>
            )
        })
    }

           
            </div>
        </div>
    </>
  )
}

export default UserApi