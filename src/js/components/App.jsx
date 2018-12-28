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
		address:''
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
	render(){
		return(
			<div className='new'>
				<Menu />
				<div style={{height:'80vh'}}>
					<Switch>
						<Route exact path= '/' component={Home} />
						<Route exact path= '/contact' render = {routeProps=><Contact deleteData={this.deleteData} />} />
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

export default withRouter(connect(null,{getData:actions.getData,submitData:actions.submitData,deleteData:actions.deleteData})(App));




