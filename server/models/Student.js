const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	fatherName:{
		type:String
	},
	address:{
		type:String
	},
	is_active:{
		type:Boolean
	}
})

module.exports = mongoose.model('Student',StudentSchema)