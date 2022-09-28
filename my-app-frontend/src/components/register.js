import React, { Component } from 'react';
import userService from '../services/user.service';

class register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'',
            address:'',
            mail:'',
            dob:'',
            mobile:'',
            password:'',
            repassword:'',
            errormsg:'',
            successmsg:'',
            role:'USER'
        }
    }

    componentDidMount(){

    }

    saveUser = (e) => {
        e.preventDefault();
        if(this.state.name){
            
            if(this.state.address){
                if(this.state.mail){
                    if(this.state.dob){
                        if(this.state.mobile){
                            if (this.state.password === this.state.repassword) {
                                let user = {name: this.state.name, address: this.state.address, mail: this.state.mail, dob: this.state.dob,
                                            mobile: this.state.mobile, password: this.state.password, role: this.state.role};
                                userService.getUserRegistered(user).then( res=>{
                                    this.state.successmsg = res.data;
                                    console.log(res.data);
                                    this.props.history.push('/');                            
                                });
                            }
                            else{this.setState({errormsg: "Both password doesn't match"});}
                        }
                        else{this.setState({errormsg: "please fill contact detail : mobile number"});}
                    }
                    else{this.setState({errormsg: "please provide birtdate"});}
                }
                else{this.setState({errormsg: "please provide email"});}
            }
            else{this.setState({errormsg: "please provide address"});}
        }
        else{this.setState({errormsg: "please provide name"});}
    }

    cancel(){
        this.props.history.push('/');
    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }


    render() {
        return (
            <><div className='text-center'>
              <form>
                <div>
                    <p className='text-danger'>{this.state.errormsg}</p>
                </div>
                <div className='col-md-4 offset-md-4 border rounded p-2 mt-2 shadow' >
                    <h5 className='alert alert-primary' > User Registration</h5>
                  <table class="table table-striped">
                      <tr>
                          <td>Name</td>
                          <td><input type="text" name="name" maxLength="30" 
                          value={this.state.name} onChange={this.onChange} required /></td>
                      </tr>
                      <tr>
                          <td>Address</td>
                          <td><textarea rows="2" cols="25" name="address" maxLength={50} 
                          value={this.state.address} onChange={this.onChange} required></textarea></td>
                      </tr>
                      <tr>
                          <td>Mail</td>
                          <td><input type="text" name="mail" minLength="7" maxLength="30" 
                          value={this.state.mail} onChange={this.onChange} required /></td>
                      </tr>
                      <tr>
                          <td>Date of Birth</td>
                          <td><input type="Date" name="dob" min="1900-12-31" max="2004-01-01" 
                          value={this.state.dob} onChange={this.onChange} required /></td>
                      </tr>
                      <tr>
                          <td>Mobile</td>
                          <td><input type="text" name="mobile" placeholder="10 digit number" pattern="[0-9]{10}" 
                          value={this.state.mobile} onChange={this.onChange} required /></td>
                      </tr>
                      <tr>
                          <td>password</td>
                          <td><input type="password" name="password" minLength="8" maxLength="20"
                          value={this.state.password} onChange={this.onChange} required/></td>
                      </tr>
                      <tr>
                          <td>Re-Enter password</td>
                          <td><input type="password" name="repassword" minLength="8" maxLength="20" 
                          value={this.state.repassword} onChange={this.onChange} required/></td>
                      </tr>
                      <tr>
                          <td><button className="btn btn-success" onClick={this.saveUser}>Register</button></td>
                          <td><button type="reset">Clear</button></td>
                      </tr>
                  </table>
                  </div>
              </form>
              <a href="/">Back main page</a>
          </div></>
        );
    }
}

export default register;