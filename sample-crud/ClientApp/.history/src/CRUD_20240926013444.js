import React,{useState,useEffect,Fragment} from "react";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal,Container,Row,Col} from 'react-bootstrap';
import axios from "axios";
// import { getData } from "ajv/dist/compile/validate";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const CRUD = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [isActive, setIsActive] = useState(0);

	const [editID, setEditID] = useState(0);
	const [editName, setEditName] = useState('');
	const [editAge, setEditAge] = useState('');
	const [isEditActive, setIsEditActive] = useState(0);

	const empdata = [
		{
			id:1,
			name:'Manoj',
			age:29,
			isActive:1
		},
		{
			id:2,
			name:'Virat',
			age:30,
			isActive:1
		},
		{
			id:3,
			name:'Rohit',
			age:34,
			isActive:1
		}
	]

	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, [])

	const getData = () => {
		axios.get('https://localhost:7212/api/Employee').then(res => {
			setData(res.data);
        })
		.catch(err => {console.log(err)})
		
    }

	const handleEdit = (id) => {
		handleShow();
		axios.get(`https://localhost:7212/api/Employee/${id}`).then((res)=>{
            setEditID(id);
            setEditName(res.data.name);
            setEditAge(res.data.age);
            setIsEditActive(res.data.isActive);
		})
		.catch((err)=>{
			console.log(err);
		})
    }

	const handleDelete = (id) => {
		if(window.confirm('Are you sure you want to delete this record?')) {
			const url = `https://localhost:7212/api/Employee/${id}`; 
	
			axios.delete(url)
				.then((result) => {
					toast.success('Employee deleted successfully');
					getData();  // Refresh the data after successful deletion
				})
				.catch((err) => {
					if (err.response) {
						if (err.response.status === 404) {
							toast.error('Employee not found');
						} else if (err.response.status === 500) {
							toast.error('Server error, please try again later.');
						}
					} else if (err.request) {
						toast.error('Network error, please check your connection.');
					} else {
						toast.error('Failed to delete employee. Please try again.');
					}
					console.log(err.response ? err.response.data : err.message); // Log error details
				});
		}
	};
	

	const handleUpdate = () => {
		const url = `https://localhost:7212/api/Employee/}`; 
		const updatedData = {
			name: editName, 
			age: editAge, 
			isActive: isEditActive ? 1 : 0 
		};
		console.log("EditID",editID);
		axios.put(url, updatedData)  
			.then((result) => {
				toast.success('Employee updated successfully');
				getData();  // Refresh the data to reflect changes
				handleClose();  
			})
			.catch((err) => {
				if (err.response) {
					toast.error('Failed to update employee');
					console.log(err.response.data); // log error details for debugging
				} else {
					toast.error('Network error, please try again.');
				}
			});
	};
	

	const handleSave = () => {
		const url = 'https://localhost:7212/api/Employee';
		const data = {
			"name": name,
			"age": age, 
			"isActive": isActive ? 1 : 0  
		};
		
		axios.post(url, data)
			.then((result) => {
				getData();  // Refresh the data after successful post
				clear();    // Clear form fields
				toast.success('Employee added successfully');
			})
			.catch((err) => {
				// Check if the error response exists and extract relevant error message
				if (err.response) {
					// Handle 400 (Bad Request) errors or server validation issues
					if (err.response.status === 400) {
						toast.error('Validation error: ' + JSON.stringify(err.response.data));
					} 
					// Handle other error codes like 500 (Internal Server Error)
					else if (err.response.status === 500) {
						toast.error('Server error, please try again later.');
					}
				} else if (err.request) {
					// Handle network-related errors (like no response from server)
					toast.error('Network error, please check your connection.');
				} else {
					// Handle any other unexpected errors
					toast.error('Failed to add employee. Please try again.');
				}
	
				console.log(err.response ? err.response.data : err.message); // Log the actual error details
			});
	};
	

	const clear = () =>{
		setName('');
		setAge('');
		setIsActive(0);
		setEditName('');
		setEditAge('');
		setIsEditActive(0);
		setEditID(''); 
	}


	return(
		<Fragment>
			<ToastContainer />
			<Container>
				<Row>
					<Col>
						<input type="text" placeholder="Enter Name" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
					</Col>
					<Col>
						<input type="text" placeholder="Enter Age" className="form-control" value={age} onChange={(e)=> setAge(e.target.value)}/>
					</Col>
					<Col>
						<input type="checkbox" 
						checked={isActive}
						onChange={(e)=> setIsActive(e.target.checked)} value={isActive}/>
						<label>IsActive</label>
					</Col>
					<Col>
						<button className="btn btn-primary" onClick={handleSave}>Submit</button>
					</Col>
				</Row>
			</Container>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Age</th>
						<th>IsActive</th>
					</tr>
				</thead>
				<tbody>
					{
						data && data.length > 0 ? 
							data.map((item,index) => {
								return(
                                    <tr key={index}>
										<td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.isActive}</td>
										<td colSpan={2}>
											<Button variant="primary" onClick={() => handleEdit(item.id)}>Edit</Button>
                                            &nbsp;
                                            <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
										</td>

                                    </tr>
                                )
							})
							:'Loading..'
					}
				</tbody>
			</Table>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modify/ Update Employee</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col>
							<input type="text" placeholder="Enter Name" className="form-control" value={editName} onChange={(e)=> setEditName(e.target.value)}/>
						</Col>
						<Col>
							<input type="text" placeholder="Enter Age" className="form-control" value={editAge} onChange={(e)=> setEditAge(e.target.value)}/>
						</Col>
						<Col>
							<input type="checkbox" 
							checked={isEditActive}
							onChange={(e)=> setIsEditActive(e.target.checked)} value={isEditActive}/>
							<label>IsActive</label>						
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleUpdate}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	)
}

export default CRUD;