import React from "react";
import {connect} from 'react-redux';

 const Contact =  ({students,deleteData}) => {
 	console.log('these are the student',students)
 	const data = students.data.length ? students.data.map((item)=>(
 		<tr key={item._id}>
			<td>{item.name}</td>
			<td>{item.fatherName}</td>
			<td>{item.address}</td>
			<td><i onClick={()=>deleteData(item._id)} className="fa fa-trash" /></td>
		</tr>
 	)):''
	 return (
		<div className="hero">
			<div className="container">
				<h2>Striped Rows</h2>
				<p>The .table-striped class adds zebra-stripes to a table:</p>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Father Name</th>
							<th>Address</th>
							<th>.......</th>
						</tr>
					</thead>
					<tbody>
						{data}
					</tbody>
				</table>
			</div>
		</div>
	);
}

 function mapStateToProps({students}) {
 	return {
 		students
 	}
 }

 export default connect(mapStateToProps,{})(Contact)
