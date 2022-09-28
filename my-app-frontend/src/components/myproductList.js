import React, { Component } from 'react';
import trialservice from '../services/trialservice';
import axios from 'axios';
import '../App.css';


function deleteProduct(id){
    fetch(`http://localhost:8080/api/product/${id}`,{
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

class myproductList extends Component {
    constructor(props){
        super(props);
        this.state={
            products :[],
            id:''
        }
    }

    componentDidMount(){
        let id = sessionStorage.getItem("user_id");
        if(id >= 1){

            trialservice.getProductBySeller(id).then((res)=>
            {
                this.setState({products: res.data});
            });
        }
    }

    updateproductreq(product_id){
        this.props.history.push(`/productupdate/${product_id}`);
    }

    addproductreq(){
        this.props.history.push('/productadd');
    }

    loginreq(){
        this.props.history.push('/login');
    }

    getImage(img){
        if(img == null){
            return "https://media.discordapp.net/attachments/997764811582619729/1021759954291535932/nodata.jpg?width=703&height=703";
        }
        const imagelink = "http://localhost:8080/api/upload/" + img;
        return imagelink; 
    }

    soldOrNot(status){
        if(status === "SOLD"){
            return <img src='https://cdn-icons-png.flaticon.com/512/6188/6188726.png' className='img-fluid img-thumbnail rounded-circle w-25'/>;
        }else{
            return <img />;
        }
    }

    render() { 

    const renderAuthButton = () => {
        const username = sessionStorage.getItem('user_name');
      if (username != null) {
        return <h2><button type='button' className="btn btn-primary mb-2 offset-md-9" onClick={()=>this.addproductreq()} ><i className='far fa-plus-square'/> add product</button></h2>;
      } else {
        return <p><i className='text text-danger'>Please login</i><br/><br/><button type='button' className="btn btn-primary mb-2" onClick={()=>this.loginreq()} >login</button></p>;
      }
    }

        return (
            <><div className='text-center'>
                
                <h2 className='text-center alert alert-primary'>My Product List</h2>
                <div>
                    {renderAuthButton()}
                </div>
                <div className='row col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>
                <div className='text text-danger'><b id='message'></b></div>
                    {
                        this.state.products.map(
                            products =>
                            <div className='w-25 p-3' >
                                <div className='card mycard' key={products.product_id} >
                                <img src={this.getImage(products.img)} className='img-fluid img-mythumbnail card-img-top'/>
                                <div>
                                    {
                                        this.soldOrNot(products.status)
                                    }
                                </div>
                                <br/>
                                <h5 className='card-title'>{products.name}</h5>
                                <br/>
                                <div>
                                    <p className='blockquote-footer'>{products.details}</p>
                                    <p className='card-text'><i>Auction Start Date : {products.opening_date}</i>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <i>Auction End Date : {products.closing_date}</i></p>
                                    <h4></h4>
                                    <p><strong>Biding Start Amount : {products.min_bid}</strong></p>
                                    <div className='text-center' >
                                        <button type='button' className="btn btn-primary mb-2" onClick={()=>this.updateproductreq(products.product_id)}><i className='fas fa-edit'/>Update</button>
                                        &nbsp;&nbsp;
                                        <button type='button' className="btn btn-danger mb-2" onClick={()=>deleteProduct(products.product_id)} ><i className='fas fa-trash-alt' />Delete</button>
                                    </div>
                                </div>                                
                                </div> 
                            </div>      
                        )
                    }
                </div>

            </div></>
        );
    }
}

export default myproductList;