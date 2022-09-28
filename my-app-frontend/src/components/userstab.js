import React, { Component } from 'react';
import userService from '../services/user.service';

function deleteUser(id){
    fetch(`http://localhost:8080/api/user/${id}`,{
        method:'DELETE'
    }).then((res) => 
        res.text()).then((text) => {
            document.getElementById("usermessage").innerHTML = text;
            refreshPage();
    });
}

function refreshPage() {
    window.location.reload(false);
}

class userstab extends Component {

    constructor(props){
        super(props)

        this.state = {
            users :[]
        }

    }

    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        if(urole === "ADMIN" || urole === "STAFF"){
        userService.getAllUsers().then((res) => {
            this.setState({users: res.data});
        });
        }else{
            this.props.history.push('/login');
        }
    }

    deleteControll(id){
        var role = sessionStorage.getItem("user_role");
        if(role === "ADMIN"){
           return <button type='button' className="btn btn-danger mb-2" onClick={()=>deleteUser(id)} ><i className='fas fa-trash-alt' /></button>;
        }else{
            return <button type='button' className="btn btn-danger mb-2" disabled><i className='fas fa-trash-alt' /></button>;
        }
    }

    backControll(){
        var role = sessionStorage.getItem("user_role");
        if(role === "ADMIN"){
           return <a href='/admin' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>;
        }else{
            return <a href='/staff' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>;
        }
    }

    render() {
        return (
            <div className='text-center'>
                <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>
                    <div className='container'>
                        {
                            this.backControll()
                        }
                            <table id='usertable' className='table table-hover table-bordered'>
                                <thead><td colSpan="12"style={{ fontSize: 30 }} ><b>User's</b></td></thead>
                                <thead className='table-dark'>
                                    <tr>
                                        <td><b>ID No.</b></td>
                                        <td><b>Name</b></td>
                                        <td><b>Address</b></td>
                                        <td><b>Mail</b></td>
                                        <td><b>Contact</b></td>
                                        <td className='text-danger'><small><b>Remove User</b></small></td>
                                    </tr>
                                </thead>
                                <p id='usermessage'></p>
                                <tbody>
                                    {
                                        this.state.users.map(
                                            user => 
                                            <tr key={user.id}>
                                                <td>{user.id}-<small className='' style={{ fontSize: 10 }}>{user.role}</small></td>
                                                <td>{user.name}</td>
                                                <td>{user.address}</td>
                                                <td>{user.mail}</td>
                                                <td>{user.mobile}</td>
                                                <td className='text-danger'>
                                                    {
                                                        this.deleteControll(user.id)
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        );
    }
}

export default userstab;