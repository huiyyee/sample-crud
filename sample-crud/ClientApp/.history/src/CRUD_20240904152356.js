import React,{useState,useEffect,Fragment} from "react";
import { Table } from "react-bootstrap";

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
				CRUD
			</Fragment>
		)
}