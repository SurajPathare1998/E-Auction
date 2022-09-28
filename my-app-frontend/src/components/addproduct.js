import axios from 'axios';
import React, { Component } from 'react';
import trialservice from '../services/trialservice';



export default class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            product_id:'0',
            categories: [],
            cat_id:'',
            seller_id:sessionStorage.getItem('user_id'),
            name: '',
            details: '',
            opening_date:'',
            closing_date:'',
            min_bid:'',
            status:'UNSOLD',
            img:'',
            image: '',
            message:'',
            flag:false
        }
    }

    componentDidMount(){
        trialservice.getCategory().then( (res) =>{
            this.setState({categories: res.data});
        });
}
    // step 3
    
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
            let product = {cat_id: this.state.cat_id,seller_id: this.state.seller_id, name: this.state.name, details: this.state.details, opening_date: this.state.opening_date, closing_date: this.state.closing_date,min_bid: this.state.min_bid,status: this.state.status,img: this.state.img };
            console.log('product => ' + JSON.stringify(product));
            // step 5
            trialservice.createProduct(product).then(res =>{
            this.props.history.push('/myproduct');
        });
    }

    cancel(){
        this.props.history.push('/myproduct');
    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }
    onFileChange = e =>{
        this.setState({image: e.target.files[0]})
    }

    dontloginifimage(){
        if(this.state.flag){
            return <div><button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button></div>;
        }
        else{
            return <div><button className="btn btn-success" disabled>Save</button>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button></div>;
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        var url = "http://localhost:8080/api/upload";

        console.log(this.state.image);
        const formdata = new FormData();
        formdata.append("image",this.state.image);
        axios.post(url,formdata).then((res) =>{
            this.setState({img: res.data.img});
            this.setState({message: res.data.message});
            this.setState({flag: true});
        });
    }

    getImage(img){
        if(img == null){
            return "https://media.discordapp.net/attachments/997764811582619729/1021759954291535932/nodata.jpg?width=703&height=703";
        }
        const imagelink = "http://localhost:8080/api/upload/" + img;
        return imagelink; 
    }

    render() {


        return (
            <div>
                <br/>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center text-success">Add Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <input type="hidden" name="product_id" value={this.state.product_id}/>
                                        <input type="hidden" name="status" value={this.state.status}/>
                                        <input type="hidden" name="seller_id" value={this.state.seller_id}/>
                                        <div className = "form-group">
                                            <label> product Name: </label>
                                            <input type="text" placeholder="product Name" name="name" className="form-control" maxLength="30" pattern='[a-z][A-Z]*'
                                                value={this.state.name} onChange={this.onChange} style={{ textTransform: "uppercase" }} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> product details: </label>
                                            <textarea placeholder="product details" name="details" className="form-control" maxLength="50"
                                                value={this.state.details} onChange={this.onChange}></textarea>
                                        </div>
                                        <div className='form-group'>
                                            <div>
                                                <img src={this.getImage(this.state.img)} className='img-fluid img-thumbnail rounded w-25 p-2' />
                                            </div>
                                            <label>Upload Product Picture :<i className='far fa-file-image p-2'></i></label>
                                            <input type="file" name="image" accept='image/*' className='form-control' onChange={this.onFileChange} />
                                            <br/>
                                            <button type="button" className='btn btn-success d-inline' onClick={this.submitHandler}><i className='fas fa-cloud-upload-alt'/>&nbsp;Upload</button>
                                            <p className='text-info'>{this.state.message}</p>
                                        </div>
                                        <div className = "form-group">
                                            <label> product Opening date: </label>
                                            <input type="date"  name="opening_date" className="form-control" min="2022-10-23"
                                                value={this.state.opening_date} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> product closing date: </label>
                                            <input type="date" name="closing_date" className="form-control" min={this.state.opening_date}
                                                value={this.state.closing_date} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> product Minimum bid: </label>
                                            <input type="number" placeholder="minimum bid" name="min_bid" className="form-control" min="100"
                                                value={this.state.min_bid} onChange={this.onChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> product Category: </label>
                                            <select placeholder="product category" name="cat_id" className="form-control" 
                                                value={this.state.cat_id} onChange={this.onChange} required>
                                                    <option value='' disabled="disabled" >Choose Option</option>
                                                    {
                                                        this.state.categories.map(
                                                            categories =>
                                                            <option key={categories.cat_id} value={categories.cat_id} >{categories.cat_name}</option>
                                                        )
                                                    }
                                            </select>
                                        </div>
                                        {
                                            this.dontloginifimage()
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
