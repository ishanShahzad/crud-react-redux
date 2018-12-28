const express = require('express');
const app = express();
const path =require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Student = require('./models/Student')

require('./middleware')(app,express,path,bodyParser)

// app.use(bodyParser.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
// 	res.sendFile(path.resolve(__dirname,'../dist/index.html'))
// })
// app.get('/*.js',(req,res)=>{
// 	res.sendFile(path.resolve(__dirname,'../dist/js/bundle.js'))
// })
// app.get('/*.css',(req,res)=>{
// 	res.sendFile(path.resolve(__dirname,'../dist/css/styles.css'))
// })


mongoose.connect('mongodb://shezad:s123456@ds115214.mlab.com:15214/shezad')
.then(()=>console.log('db server connected'))
.catch(e=>console.log('this is the errorr from db connection',e))


app.get('/students',(req,res)=>{
	Student.find({is_active:true})
	.then(students=>{
		res.json(students)
	}).catch(e=>res.json(e))
})

app.get('/student/:id',(req,res)=>{
	Student.findOne({_id:req.params.id,is_active:true})
	.then(student=>res.json(student))
	.catch(e=>res.json(e))
})

app.post('/students',(req,res)=>{
	let student = {
		name:req.body.name,
		fatherName:req.body.fatherName,
		address:req.body.address,
		is_active:true
	}

	const newStudent = new Student(student);

	newStudent.save()
	.then(student=>{
		res.status(200).json(student)
	}).catch(e=>res.status(400).json(e))
})

app.post('/student/:id',(req,res)=>{
	Student.findOne({_id:req.params.id,is_active:true})
	.then(student=>{
		student.name = req.body.name;
		student.fatherName = req.body.fatherName;
		student.address= req.body.address
		return student.save()
		.then(data=>{
			res.json(data)
		}).catch(e=>res.json(e))
	})
})

app.post('/student/delete/:id',(req,res)=>{
	Student.findOne({_id:req.params.id})
	.then(student=>{
		student.is_active = false;
		return student.save()
		.then(student=>{
			res.json(student)
		}).catch(e=>res.json(e))
	})
})

app.get('*',(req,res)=>{
	res.sendFile(path.resolve(__dirname,'../dist/index.html'))
})




// app.get('/:id',(req,res)=>{
// 	videFile = path.resolve('sdd')
// 	res.sendFile(videoFile)
// })

app.listen(3000,()=>console.log('node server is running on port 3000'))

src="blob:https://www.youtube.com/f26bbe6c-5717-4cbf-88b5-2eb09678e216"