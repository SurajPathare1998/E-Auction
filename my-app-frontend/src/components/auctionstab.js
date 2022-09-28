import React, { Component } from 'react';
import trialservice from '../services/trialservice';
import '../App.css';

function refreshPage() {
    window.location.reload(false);
}

class auctionstab extends Component {

    constructor(props){
        super(props)

        this.state = {
            products: [],
            auction_id: '',
            bider_id: '',
            bid_amount: '',
            req_date: '',
            product_id: '',
            cat_id:'',
            seller_id:'',
            name:'',
            details:'',
            min_bid:'',
            opening_date:'',
            closing_date:'',
            status:'',
            img:''
        }
    }


    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        if(urole === "ADMIN" || urole === "STAFF"){
            trialservice.getProducts().then((res) => {
                this.setState({products: res.data});
            });
            trialservice.getBidbyProductId(this.state.product_id).then((res) => {
                this.setState({auction_id: res.data.auction_id});
                this.setState({bider_id : res.data.bider_id});
                this.setState({bid_amount: res.data.bid_amount});
                this.setState({req_date: res.data.req_date});
    
            });
            trialservice.getProductById(this.state.product_id).then((res) => {
                this.setState({product_id: res.data.product_id});
                this.setState({cat_id: res.data.cat_id});
                this.setState({seller_id: res.data.seller_id});
                this.setState({name: res.data.name});
                this.setState({details: res.data.details});
                this.setState({min_bid: res.data.min_bid});
                this.setState({opening_date: res.data.opening_date});
                this.setState({closing_date: res.data.closing_date});
                this.setState({status: res.data.status});
                this.setState({img: res.data.img});
            });
        }else{
            this.props.history.push('/login');
        }
    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
    }

    sortByProduct(){
        if(this.state.product_id == undefined){
            document.getElementById("catmsg").innerHTML = "please Select Product";
            return
        }
        document.getElementById("catmsg").innerHTML = "";
        trialservice.getBidbyProductId(this.state.product_id).then((res) => {
            this.setState({auction_id: res.data.auction_id});
            this.setState({bider_id : res.data.bider_id});
            this.setState({bid_amount: res.data.bid_amount});
            this.setState({req_date: res.data.req_date});
        });
        trialservice.getProductById(this.state.product_id).then((res) => {
            this.setState({product_id: res.data.product_id});
            this.setState({cat_id: res.data.cat_id});
            this.setState({seller_id: res.data.seller_id});
            this.setState({name: res.data.name});
            this.setState({details: res.data.details});
            this.setState({min_bid: res.data.min_bid});
            this.setState({opening_date: res.data.opening_date});
            this.setState({closing_date: res.data.closing_date});
            this.setState({status: res.data.status});
            this.setState({img: res.data.img});
        });
    }

    backControll(){
        var role = sessionStorage.getItem("user_role");
        if(role === "ADMIN"){
           return <a href='/admin' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>;
        }else{
            return <a href='/staff' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>;
        }
    }

    getImage(img){
        if(img == undefined){
            return "https://media.discordapp.net/attachments/997764811582619729/1021759954291535932/nodata.jpg?width=703&height=703";
        }
        const imagelink = "http://localhost:8080/api/upload/" + img;
        return imagelink; 
    }

    declareWinner(){
        if(this.state.bider_id == undefined){
            document.getElementById("two").innerHTML = "<b>Zero bid to End Auction & Find Winner</b>";
            
        }else{
            let winner = {product_id: this.state.product_id, seller_id: this.state.seller_id, buyer_id: this.state.bider_id, amount: this.state.bid_amount,win_date: new Date()};
            console.log(winner);
            trialservice.createWinner(winner).then((res) => {
                document.getElementById('message').innerHTML = res.data;
            });
            trialservice.soldProduct(this.state.product_id).then((res) => {
                console.log(res.data);
            });
            refreshPage();
        }
    }

    soldorUnsoldbtn(){
        if(this.state.status === "UNSOLD"){
            return <button className='btn btn-danger offset-md-10' onClick={this.declareWinner.bind(this)}>End Product Auction </button>;
        }else{
            return <button className='btn btn-danger offset-md-10' disabled>End Product Auction </button>;
        }
    }

    render() {
        return (
            <div className='text-center'>
                <div className='col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    {
                        this.backControll()
                    }
                    <div className='col-md-6 offset-md-3'>
                        <label> show Auction Bids By Product : </label>
                        <select placeholder="Select Product" name="product_id" className="form-control" 
                            value={this.state.product_id} onChange={this.onChange}>
                                <option value='' disabled="disabled" >Choose Option</option>
                                {
                                    this.state.products.map(
                                        product =>
                                        <option key={product.product_id} value={product.product_id} >{product.product_id} &nbsp; : &nbsp; {product.name}</option>
                                    )
                                }
                        </select>
                    </div>
                    <p id="catmsg" className='text-danger'></p>
                    <div>
                        <button type='button' className="btn btn-primary mb-2" onClick={this.sortByProduct.bind(this)} >search by product</button>
                    </div>
                </div>

                <div className='row col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    <div className='col-md-6 mt-2 p-2'>
                        <img src={this.getImage(this.state.img)} className='w-50'width='150' />
                    </div>
                    <div className='col-md-6 justify-content-between align-items-center'>
                        <br/>
                        <div className='row'>
                            <h3>Product : {this.state.name}</h3>
                        </div>
                        <br/>
                        <div className='row'>
                            <p style={{ fontSize: 20}} className='text-muted'><b>Description :</b> {this.state.details}</p>
                        </div>
                        <br/>
                        <div className='row'>
                            <h4>Auction Starting Price : &#8377; <i className='text-muted'>{this.state.min_bid}</i></h4>
                        </div>
                        <br/>
                        <div className='row'>
                            <h4>Auction Starting Date : <i className='text-muted'>{this.state.opening_date}</i></h4>
                        </div>
                        <br/>
                        <div className='row'>
                            <h4>Auction Ending Date : <i className='text-muted'>{this.state.closing_date}</i></h4>
                        </div>
                        <br/>
                        <div className='row'>
                            <h3><small>Product Status : </small><b className='text-danger'>{this.state.status}</b></h3>
                        </div>
                    </div>
                </div>
                <br/>

                <div className='col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    <label htmlFor='bidtable' style={{ fontSize: 25}}><b>Highest Bided BID</b></label>
                    <p id='message'></p><p id='two' className='text-danger'></p>
                    <table id='bidtable' className='table table-hover table-striped table-bordered col-md-8 offset-md-2'>
                        <thead className='table-primary'>
                            <td><b>Bid ID</b></td>
                            <td><b>Bid Amount</b></td>
                            <td><b>Bid Date</b></td>
                        </thead>
                        <tbody>
                            <td>{this.state.auction_id}</td>
                            <td>{this.state.bid_amount}</td>
                            <td>{this.state.req_date}</td>
                        </tbody>
                    </table>
                    {
                        this.soldorUnsoldbtn()
                    }
                </div>
                <br/>

            </div>
        );
    }
}

export default auctionstab;