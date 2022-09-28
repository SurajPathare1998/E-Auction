import React, { Component } from 'react';
import userService from '../services/user.service';

class loginform extends Component {

  constructor(props){
    super(props);

    this.state = {
      id:'',
      name:'',
      address:'',
      mail:'',
      dob:'',
      mobile:'',
      password:'',
      errormsg:'',
      successmsg:''
    }
  }

  componentDidMount(){


  }

  authenticateLogin = (e) => {
    e.preventDefault();
    if(this.state.mail !== ''){
      if(this.state.password !== ''){
        let user = {mail: this.state.mail, password: this.state.password}
        userService.getUserAuthenticated(user).then(res =>{
          if(res.data.mail === user.mail && res.data.password === user.password){
            sessionStorage.setItem("user_id",res.data.id);
            sessionStorage.setItem("user_name",res.data.name);
            sessionStorage.setItem("user_mail",res.data.mail);
            sessionStorage.setItem("user_mobile",res.data.mobile);
            sessionStorage.setItem("user_role",res.data.role);

            if(res.data.role === "ADMIN"){
              this.props.history.push('/');
            }
            if(res.data.role === "STAFF"){
              this.props.history.push('/');
            }
            if(res.data.role === "USER"){
              this.props.history.push('/');
            }
        }
        });
      }
      else{this.setState({errormsg: "please insert password"});}
    }
    else{this.setState({errormsg: "please insert email"});}
  }

  cancel(){
    this.props.history.push('/');
  }

  onChange = e =>{
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <div className='text-center' >
      <form >
        <div>
          <p className='text-danger'>{this.state.errormsg}</p>
        </div>
        <div className='col-md-4 offset-md-4 border rounded p-2 mt-2 shadow' >
          <h5 className='alert alert-primary' > User Login</h5>
          <table className='table table-borderless'>
            <tr>
            <td>Enter User Email</td>
              <td><input type='email' name='mail' minLength='7' maxLength='30' value={this.state.mail} onChange={this.onChange} required /></td>
            </tr>
            <tr>
              <td>Enter Password</td>
              <td><input type='password' name='password' minLength="8" maxLength="20" value={this.state.password} onChange={this.onChange} required/></td>
            </tr>
            <tr>
              <td colSpan={12} ><button type='button' className='btn btn-primary' onClick={this.authenticateLogin} >Login</button></td>
            </tr>
          </table>
        </div>
      </form>
      <br/>
      <button className="btn btn-secondary" onClick={this.cancel.bind(this)}> back </button>
    </div>
    );
  }
}

export default loginform;