import React, { Component } from 'react';
import trialservice from '../services/trialservice';
import axios from 'axios';
import '../App.css';

class productlist extends Component {
    constructor(props){
        super(props);
        this.state={
            products :[],
            categories: [],
            cat_id:''

        }
    }

    componentDidMount(){
        trialservice.getProducts().then((res)=>
        {
            this.setState({products: res.data});
        }
        );
        trialservice.getCategory().then( (res) =>{
            this.setState({categories: res.data});
        });
    }

    categorysort(){
        if(this.state.cat_id <= 0){
            document.getElementById("catmsg").innerHTML = "please Select Category First To Filter Products";
            return
        }
        document.getElementById("catmsg").innerHTML = "";
        trialservice.getProductByCategory(this.state.cat_id).then((res)=>{
            this.setState({products: res.data});
        });
    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    getImage(img){
        if(img == null){
            return "https://media.discordapp.net/attachments/997764811582619729/1021759954291535932/nodata.jpg?width=703&height=703";
        }
        const imagelink = "http://localhost:8080/api/upload/" + img;
        return imagelink; 
    }

    view(product_id){
        this.props.history.push(`/view/${product_id}`);
    }

    soldOrNot(status){
        if(status === "SOLD"){
            return <img src='https://cdn-icons-png.flaticon.com/512/6188/6188726.png' className='img-fluid img-thumbnail rounded-circle w-25'/>;
        }else{
            return <img />;
        }
    }

    render() {
        return (
            <div className='text-center'>
                <h2 className='alert alert-primary'>Product List</h2>
                <div className='col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    <div className='col-md-8 offset-md-2'>
                        <label> show product by category: </label>
                        <select placeholder="product category" name="cat_id" className="form-control" 
                            value={this.state.cat_id} onChange={this.onChange}>
                                <option value='' disabled="disabled" >Choose Option</option>
                                {
                                    this.state.categories.map(
                                        categories =>
                                        <option key={categories.cat_id} value={categories.cat_id} >{categories.cat_name}</option>
                                    )
                                }
                        </select>
                    </div>
                    <p id="catmsg" className='text-danger'></p>
                    <div>
                        <button type='button' className="btn btn-primary mb-2" onClick={this.categorysort.bind(this)} >search by category</button>
                    </div>
                </div>
                <br/>
                <div className='row col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    
                    {
                        this.state.products.map(
                            products =>
                            <div className='w-25 p-3' >
                                <div className='card mycard shadow' key={products.product_id} >
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
                                    <br/>
                                    <i>Auction End Date : {products.closing_date}</i></p>
                                    <p><strong>Biding Start Amount : {products.min_bid}</strong></p>
                                    
                                    <a className='link-info' onClick={()=>this.view(products.product_id)}><i class="far fa-eye fa-3x"/></a>
                                </div>                                
                                </div> 
                            </div>       
                        )
                    }
                </div>
            </div>
        );
    }
}

export default productlist;