import React,{useState,useEffect,Fragment} from "react";
import { Table } from "react-bootstrap/Table";

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
		setData(empdata)
	}, [])

	return(
			<Fragment>
				<Table striped bordered hover>
		<thead>
			<tr>
			<th>#</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Username</th>
			</tr>
		</thead>
		<tbody>
			<tr>
			<td>1</td>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
			</tr>
			<tr>
			<td>2</td>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
			</tr>
			<tr>
			<td>3</td>
			<td colSpan={2}>Larry the Bird</td>
			<td>@twitter</td>
			</tr>
		</tbody>
		</Table>
			</Fragment>
		)
}