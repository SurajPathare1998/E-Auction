import React, { Component } from 'react';
import trialservice from '../services/trialservice';

function deleteCategory(cat_id){
    fetch(`http://localhost:8080/api/category/${cat_id}`,{
        method:'DELETE'
    }).then((res) => 
        res.text()).then((text) => {
            document.getElementById("message").innerHTML = text;
            refreshPage();
    })
}

function refreshPage() {
    window.location.reload(false);
}

class category extends Component {

    constructor(props){
        super(props)

        this.state = {
            categories: [],
            cat_name: '',
            cat_id: '0'
        }
    }


    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        if(urole === "ADMIN" || urole === "STAFF"){
            trialservice.getCategory().then((res) => {
                this.setState({categories: res.data});
            });
        }else{
            this.props.history.push('/login');
        }
    }

    adminControll(cat_id){
        var role = sessionStorage.getItem("user_role");
        if(role === "ADMIN"){
            return <button type='button' className="btn btn-danger mb-2" onClick={()=>deleteCategory(cat_id)} ><i className='fas fa-trash-alt' /></button>;
        }
        else{
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
                    {
                        this.backControll()
                    }
                    <table className='table table-hover table-striped table-bordered col-md-8 offset-md-2'>
                        <thead className='table-primary'>
                            <td><b>Category ID</b></td>
                            <td><b>Category NAME</b></td>
                            <td className='text-danger'>Delete Category</td>
                        </thead>
                        <tbody>
                            {
                                this.state.categories.map(
                                    category =>
                                    <tr key={category.cat_id}>
                                        <td>{category.cat_id}</td>
                                        <td>{category.cat_name}</td>
                                        <td className='text-danger'>
                                            {
                                                this.adminControll(category.cat_id)
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default category;