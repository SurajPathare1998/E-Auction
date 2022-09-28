import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import userService from '../services/user.service';
import trialservice from '../services/trialservice';



class adminpage extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        if(urole === "ADMIN"){
            console.log("hello admin");
        }else{
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            
            <div className='text-center'>
                <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>
                    <h5 className='text-success'>Welcome {sessionStorage.getItem("user_name")}</h5>
                </div>
                <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 '>
                                <a href='/usertab' className='text-muted'><img src='http://localhost:8080/api/upload/man.png' className='img-thumbnail w-50 p-3 rounded'/><h3>USERS</h3></a>
                            </div>
                            <div className='col-md-4'>
                                <a href='/category' className='text-muted'><img src='http://localhost:8080/api/upload/categories.png' className='img-thumbnail w-50 p-3 rounded'/><h3>CATEGORIES</h3></a>
                            </div>
                            <div className='col-md-4'>
                                <a href='/prodtab' className='text-muted'><img src='http://localhost:8080/api/upload/box.png' className='img-thumbnail w-50 p-3 rounded'/><h3>PRODUCTS</h3></a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <a href='/auctiontab' className='text-muted'><img src='http://localhost:8080/api/upload/auctions.png' className='img-thumbnail w-50 p-3 rounded'/><h3>Auctions</h3></a>
                            </div>
                            <div className='col-md-3'>
                                <a href='/productadd' className='text-muted'><img src='http://localhost:8080/api/upload/addpackage.png' className='img-thumbnail w-50 p-3 rounded'/><h3>ADD PRODUCT</h3></a>
                            </div>
                            <div className='col-md-3'>
                                <a href='/categoryadd' className='text-muted'><img src='http://localhost:8080/api/upload/addcategories.png' className='img-thumbnail w-50 p-3 rounded'/><h3>ADD CATEGORIES</h3></a>
                            </div>
                            <div className='col-md-3'>
                                <a href='/winnertab' className='text-muted'><img src='http://localhost:8080/api/upload/Winning.png' className='img-thumbnail w-50 p-3 rounded'/><h3>Winners</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default adminpage;