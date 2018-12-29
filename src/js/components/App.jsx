import React from 'react';
import {withRouter,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import Menu from './Menu'
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer'
import * as actions from '../actions';


class App extends React.Component{

	state = {
		name:'',
		fatherName:'',
		address:'',
		editIndex:null,
		show:false
	}

	handleChange = e=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	componentDidMount(){
		this.props.getData()
	}
	submitData = data=>{
		this.props.submitData(data)
		setTimeout(()=>{
			this.setState({
				name:'',
				fatherName:'',
				address:'',
			},()=>{
				this.props.history.push('/contact')
			})
		},2000)
	}

	deleteData = id=>{
		this.props.deleteData(id)
	}
	showModal= ()=>{
		this.setState({
			show:true
		})
	}
	closeModal=()=>{
		this.setState({
			editIndex:null
		})
	}
	setEditIndex = i=>{
		this.setState({
			editIndex:i
		})
	}

	updateData = (id,data)=>{
		this.props.updateData(id,data)
	}

	render(){
		console.log('this is the state in app',this.state)
		return(
			<div className='new'>
				<Menu />
				<div style={{height:'80vh'}}>
					<Switch>
						<Route exact path= '/' component={Home} />
						<Route exact path= '/contact' render = {routeProps=>
							<Contact
							 deleteData={this.deleteData}
							 show={this.state.show}
							 showModal={this.state.showModal}
							 closeModal={this.closeModal}
							 handleChange={this.handleChange}
							 editIndex={this.state.editIndex}
							 setEditIndex={this.setEditIndex}
							 updateData={this.updateData}
							 name={this.state.name}
							 fatherName={this.state.fatherName}
							 address={this.state.address}	
							  />
							} />
						<Route exact path= '/services' 
							render = {routeProps=> <Services 
								submitData={this.submitData}
								handleChange={this.handleChange} 
								{...this.state} />
							} 
						/>
						<Route exact path= '/about' component={About} />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(null,{getData:actions.getData,submitData:actions.submitData,deleteData:actions.deleteData,updateData:actions.updateData})(App));




