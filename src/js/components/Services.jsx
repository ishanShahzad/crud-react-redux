import React from 'react';

export default ({handleChange,name,fatherName,address,submitData})=>(
	<div className = "container">
	<h2>Create Student</h2>
		<form>
		  <div className="row">
		    <div className="col-md-4">
		      <input type="text" className="form-control" placeholder="First name" name="name" onChange={handleChange} value={name} />
		    </div>
		    <div className="col-md-4">
		      <input type="text" className="form-control" placeholder="Father name" name="fatherName" onChange={handleChange} value={fatherName} />
		    </div>
		  </div>
		  <div className="row">
		  	<div className = "col-md-4">
		  		<input type="text" className="form-control" placeholder="Address" name="address" onChange={handleChange} value={address} />
		  	</div>
		  	<div className="col-md-4" style={{marginTop:10}}>
		  		<button type="submit" onClick={e=>{
		  			e.preventDefault()
		  			submitData({name,fatherName,address})
		  		}}>Submit</button>
		  	</div>
		  </div>
		</form>
	</div>
)