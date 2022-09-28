import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import userService from '../services/user.service';
import trialservice from '../services/trialservice';




class staffpage extends Component {

   constructor(props){
    super(props)
   }

   componentDidMount(){
    var urole = sessionStorage.getItem("user_role");
    if(urole === "STAFF"){
        console.log("hello staff");
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
                        <div className='row mt-2 p-2'>
                            <div className='col-md-3 offset-md-2'>
                                <a href='/auctiontab' className='text-muted'><img src='http://localhost:8080/api/upload/auctions.png' className='img-thumbnail w-50 p-3 rounded'/><h3>auction's</h3></a>
                            </div>
                            <div className='col-md-3 offset-md-2'>
                                <a href='/winnertab' className='text-muted'><img src='http://localhost:8080/api/upload/winning.png' className='img-thumbnail w-50 p-3 rounded'/><h3>winner's</h3></a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
            
        );
    }
}

export default staffpage;