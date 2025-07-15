// import React, { useState, useEffect, Fragment } from 'react';
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css'

// const CRUD = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//       const [isActive, setIsActive] = useState(0);
        
//         const [editID, setEditId] = useState('');
//           const [editName, setEditName] = useState('');
//             const [editAge, setEditAge] = useState('');
//                 const [editIsActive, setEditIsActive] = useState(0);

//   const empdata = [
//     { id: 1, name: 'Mohsin', age: 22, isActive: 1 },
//     { id: 2, name: 'Ali', age: 25, isActive: 0 },
//   ];

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () =>{
//     axios.get('https://localhost:7062/api/Employee')
//     .then((result)=>{
//       setData(result.data)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   }

//   const handleEdit = (id) =>{
//     //alert (id);
//     handleShow();
//     axios.get(`https://localhost:7062/api/Employee/${id}`)
//     .then((result)=>{
//       setEditName(result.data.name);
//             setEditAge(result.data.age);
//                   setEditIsActive(result.data.isActive);
//                         setEditId(id);
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   }

//     const handleDelete = (id) =>{
//       if(window.confirm("Are you sure to delete this employee") == true){
//         axios.delete(`https://localhost:7062/api/Employee/${id}`)
//           .then((result)=>{
//             if(result.status === 200){
//               toast.success('Employee has been deleted');
//               getData();
//             }
//           })
//           .catch((error)=>{
//       toast.error(error);
//         })
//       }
//   }

//   const handleUpdate = () => {
//     const url = `https://localhost:7062/api/Employee/${editID}`;
//     const data = {
//       "id": editID,
//       "name": editName,
//   "age": editAge,
//   "isActive": editIsActive
//     }

//   axios.put(url, data)
//     .then((result) =>{
//       handleClose();
//       getData();
//       clear();
//       toast.success('Employee has been updated');
//     })
//     .catch((error)=>{
//       toast.success(error);
//     })
//   }

//   const handleSave =() =>{
//     const url = 'https://localhost:7062/api/Employee';
//     const data = {
//       "name": name,
//   "age": age,
//   "isActive": isActive
//     }

//     axios.post(url, data)
//     .then((result) =>{
//       getData();
//       clear();
//       toast.success('Employee has been added');
//     })
//     .catch((error)=>{
//       toast.success(error);
//     })
//   }

//   const clear = () =>{
//     setName('');
//     setAge('');
//     setIsActive(0);
//     setEditName('');
//     setEditAge('');
//     setEditIsActive(0);
//     setEditId('');
//   }

//   const handleActiveChange =(e) =>{
//     if(e.target.checked){
//       setIsActive(1);
//     }
//     else{
//       setIsActive(0);
//     }
//   }

//    const handleEditActiveChange =(e) =>{
//     if(e.target.checked){
//       setEditIsActive(1);
//     }
//     else{
//       setEditIsActive(0);
//     }
//   }
//   return (
//     <Fragment>
//       <ToastContainer />
//       <Container>
//       <Row>
//         <Col>
//         <input type="text" className='form-control' placeholder='Enter Name'
//         value={name} onChange={(e)=> setName(e.target.value)}/>
//         </Col>
//         <Col>
//         <input type="text" className='form-control' placeholder='Enter Age'
//         value={age} onChange={(e)=> setAge(e.target.value)}/>
//         </Col>
//         <Col>
//         <input type="checkbox" 
//         checked={isActive === 1 ? true : false}
//         onChange={(e) => handleActiveChange(e)}value={isActive}/>
//         <label >IsActive</label>
//         </Col>
//         <Col>
//         <button className="btn btn-primary" onClick={()=> handleSave()}>Submit</button>
//         </Col>
//       </Row>
//     </Container>
//     <br></br>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>IsActive</th>
//               <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data && data.length > 0 ? (
//             data.map((item, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{item.name}</td>
//                 <td>{item.age}</td>
//                 <td>{item.isActive ? 'Yes' : 'No'}</td>
//                 <td colSpan={2}>
//                   <button className="btn btn-primary" onClick={()=> handleEdit(item.id)}>Edit</button> &nbsp;
//                   <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>                  
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">Loading...</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modify / Update Employee</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Row>
//         <Col>
//         <input type="text" className='form-control' placeholder='Enter Name'
//         value={editName} onChange={(e)=> setEditName(e.target.value)}/>
//         </Col>
//         <Col>
//         <input type="text" className='form-control' placeholder='Enter Age'
//         value={editAge} onChange={(e)=> setEditAge(e.target.value)}/>
//         </Col>
//         <Col>
//         <input type="checkbox" 
//         checked={editIsActive === 1 ? true : false}
//         onChange={(e) => handleEditActiveChange(e)}value={editIsActive}/>
//         <label >IsActive</label>
//         </Col>
//       </Row>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleUpdate}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Fragment>
//   );
// };
// export default CRUD;

import React, { useState, useEffect, Fragment } from 'react';
import { Table, Button, Modal, Row, Col, Container, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const CRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isActive, setIsActive] = useState(0);

  const [editID, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');
  const [editIsActive, setEditIsActive] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://infoapplication-afewfch2hye4htew.canadacentral-01.azurewebsites.net/api/Employee')
      .then(result => setData(result.data))
      .catch(error => console.log(error));
  };

  const handleEdit = (id) => {
    handleShow();
    axios.get(`https://infoapplication-afewfch2hye4htew.canadacentral-01.azurewebsites.net/api/Employee/${id}`)

      .then((result) => {
        setEditName(result.data.name);
        setEditAge(result.data.age);
        setEditIsActive(result.data.isActive);
        setEditId(id);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this employee?")) {
      axios.delete(`https://infoapplication-afewfch2hye4htew.canadacentral-01.azurewebsites.net/api/Employee/${id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success('Employee has been deleted');
            getData();
          }
        })
        .catch((error) => toast.error(error));
    }
  };

  const handleUpdate = () => {
    const url = `https://infoapplication-afewfch2hye4htew.canadacentral-01.azurewebsites.net/api/Employee/${editID}`;
    const data = {
      id: editID,
      name: editName,
      age: editAge,
      isActive: editIsActive,
    };

    axios.put(url, data)
      .then(() => {
        handleClose();
        getData();
        clear();
        toast.success('Employee has been updated');
      })
      .catch((error) => toast.error(error));
  };

  const handleSave = () => {
    const url = 'https://infoapplication-afewfch2hye4htew.canadacentral-01.azurewebsites.net/api/Employee';
    const data = { name, age, isActive };

    axios.post(url, data)
      .then(() => {
        getData();
        clear();
        toast.success('Employee has been added');
      })
      .catch((error) => toast.error(error));
  };

  const clear = () => {
    setName('');
    setAge('');
    setIsActive(0);
    setEditName('');
    setEditAge('');
    setEditIsActive(0);
    setEditId('');
  };

  const handleActiveChange = (e) => setIsActive(e.target.checked ? 1 : 0);
  const handleEditActiveChange = (e) => setEditIsActive(e.target.checked ? 1 : 0);

  return (
    <Fragment>
      <ToastContainer />
      <Container className="mt-5">
        <Card className="p-4 shadow-sm border-0 rounded-4">
          <h4 className="mb-4 text-primary">Add New Employee</h4>
          <Row className="g-3">
            <Col md={4}>
              <Form.Control placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Col>
            <Col md={3}>
              <Form.Control placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
            </Col>
            <Col md={2} className="d-flex align-items-center">
              <Form.Check
                type="checkbox"
                label="Is Active"
                checked={isActive === 1}
                onChange={handleActiveChange}
              />
            </Col>
            <Col md={3}>
              <Button variant="success" className="w-100" onClick={handleSave}>
                <i className="bi bi-plus-circle"></i> Submit
              </Button>
            </Col>
          </Row>
        </Card>

        <div className="mt-4">
          <Table striped bordered hover className="shadow-sm rounded-3 text-center">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>IsActive</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.isActive ? 'Yes' : 'No'}</td>
                    <td>
                      <Button variant="primary" size="sm" onClick={() => handleEdit(item.id)}>
                        <i className="bi bi-pencil-square"></i>
                      </Button>{' '}
                      <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="g-3">
            <Col md={6}>
              <Form.Control placeholder="Enter Name" value={editName} onChange={(e) => setEditName(e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Control placeholder="Enter Age" value={editAge} onChange={(e) => setEditAge(e.target.value)} />
            </Col>
            <Col md={12}>
              <Form.Check
                type="checkbox"
                label="Is Active"
                checked={editIsActive === 1}
                onChange={handleEditActiveChange}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CRUD;
