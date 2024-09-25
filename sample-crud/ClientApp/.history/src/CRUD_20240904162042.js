import React,{useState,useEffect,Fragment} from "react";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CRUD = () => {
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

	return(
		<Fragment>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>id</th>
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
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
										<td>{item.id}</td>
                                        <td>{item.isActive}</td>
                                    </tr>
                                )
							})
							:'Loading..'
					}
				</tbody>
			</Table>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	)
}

export default CRUD;