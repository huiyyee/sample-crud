import React,{useState,useEffect} from "react";

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
			id:1,
			name:'Manoj',
			age:29,
			isActive:1
		}
	]

	const [data, setData] = useState([]);
	return(
			<div>
				CRUD
			</div>
		)
}