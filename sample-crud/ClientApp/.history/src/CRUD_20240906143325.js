import React,{useState,useEffect,Fragment} from "react";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal,Container,Row,Col} from 'react-bootstrap';
import axios from "axios";

const CRUD = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [isActive, setIsActive] = useState(0);

	const [id, setId] = useState(0);
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
		setData(empdata);
	}, [])

	const getData = () => {
		axios
		setData(empdata);
    }

	const handleEdit = (id) => {
		handleShow();
    }

	const handleDelete = (id) => {
		if(window.confirm('Are you sure want to delete this record?')){
			alert(id);
        }
	}

	const handleUpdate = (id) => {
	}


	return(
		<Fragment>
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
						checked={isActive=1? true:false}
						onChange={(e)=> setIsActive(e)} value={isActive}/>

					</Col>
					<Col>
						<button className="btn btn-primary">Submit</button>
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
							checked={isEditActive=1? true:false}
							onChange={(e)=> setIsEditActive(e)} value={isEditActive}/>
						</Col>
						<Col>
							<button className="btn btn-primary">Submit</button>
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