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
			id:3,
			name:'Rohit',
			age:34,
			isActive:1
		}
	]
	useEffect(() => {
	  setData(empdata)
	
	  return () => {
		second
	  }
	}, [third])
	

	const [data, setData] = useState([]);
	return(
			<div>
				CRUD
			</div>
		)
}