import React,{Fragment} from "react";
import {connect} from 'react-redux';
import Modal from './Modal'

 const Contact =  ({students,deleteData,setEditIndex,editIndex,closeModal,handleChange,show,name,fahterName,address,updateData}) => {
 	const data = students.data.length ? students.data.map((item,i)=>(
 		<tr key={item._id}>
			<td>{item.name}</td>
			<td>{item.fatherName}</td>
			<td>{item.address}</td>
			<td><i onClick={()=>deleteData(item._id)} className="fa fa-trash" /></td>
			<td><i className="fa fa-pencil" onClick={()=>setEditIndex(i)} /></td>
			<Fragment>
			{
				editIndex == i && 
				<Modal
					closeModal={closeModal}
					name={item.name}
					fatherName={item.fatherName}
					address={item.address}
					id={item.id}
					show={editIndex==i}
					handleChange={handleChange}
					updateData={updateData}
				 />
			}
			</Fragment>
		</tr>
 	)):null
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
