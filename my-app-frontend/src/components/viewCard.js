import React, { Component } from 'react';
import trialservice from '../services/trialservice';
import '../App.css';

function refreshPage() {
    window.location.reload(false);
}

export default class viewCard extends Component {

    constructor(props){
        super(props)
        this.state ={
            product_id: this.props.match.params.id,
            bider_id: sessionStorage.getItem('user_id'),
            cat_id:'',
            seller_id:'',
            name: '',
            details: '',
            opening_date:'',
            closing_date:'',
            min_bid:'',
            status:'',
            img:'',
            message:'',
            bid_amount:'',
            high_bid:'0',
            auction_id:'0'
        }
    }

    componentDidMount(){
        trialservice.getProductById(this.props.match.params.id).then( (res) =>{
            let product = res.data;
            this.setState({name: product.name,
                product_id: product.product_id,
                cat_id: product.cat_id,
                seller_id: product.seller_id,
                details: product.details,
                opening_date: product.opening_date,
                closing_date: product.closing_date,
                min_bid: product.min_bid,
                status: product.status,
                img: product.img
            });
            trialservice.getBidbyProductId(this.state.product_id).then((res) => {
                if(res.data.bid_amount >= this.state.min_bid){
                    this.setState({high_bid: res.data.bid_amount});
                }
                else{
                    this.setState({high_bid: this.state.min_bid});
                }
            });
            trialservice.getAuctionByProductAndBider(this.state.product_id , this.state.bider_id).then((res) => {
                if(this.state.product_id == res.data.product_id){
                    this.setState({auction_id: res.data.auction_id});
                }
            });
        });
    }

    getImage(img){
        if(img == null){
            return "https://media.discordapp.net/attachments/997764811582619729/1021759954291535932/nodata.jpg?width=703&height=703";
        }
        const imagelink = "http://localhost:8080/api/upload/" + img;
        return imagelink; 
    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    selfProduct(){
        let userid = sessionStorage.getItem('user_id');
        if(userid == this.state.seller_id){
            return  <div>
                        <button className='btn btn-danger text-uppercase mr-2 px-4'disabled>Bid On Product</button>
                        <p className='text-danger'> Sorry You Can't Bid On Your Own Posted Product</p>
                    </div>;
        }
        else{
            return  <div id='self' className='cart mt-4 align-items-center'>
                        <button id='btnstat' type="button" className='btn btn-info text-uppercase mybtn mr-2 px-2' onClick={this.submitHandler}><i className='fas fa-gavel'/>&nbsp;Bid On Product</button>
                        &nbsp;&nbsp;&nbsp;
                        <a id='cancel' onClick={refreshPage}><i className='fas fa-recycle' style={{ fontSize: 24 }} /></a>
                    </div>;
        }
        
    }

    soldOrNot(){
        if(this.state.status === "SOLD"){
            return <img src='https://cdn-icons-png.flaticon.com/512/6188/6188726.png' className='img-fluid img-thumbnail rounded-circle w-25'/>;
        }else{
            return <img />;
        }
    }

    getlastdate(){
        var date = this.state.closing_date + " 00:00:00";
        return date;
    }

    submitHandler = (event) => {
        event.preventDefault();
        if(this.state.status === "SOLD"){
            document.getElementById('try').innerHTML = "Product is Already Sold";
            document.getElementById('bidmsg').innerHTML = "";
            return
        }
        const username = sessionStorage.getItem('user_name');
        if(username != null){
            let auction = {auction_id: this.state.auction_id,product_id: this.state.product_id,bider_id: this.state.bider_id,bid_amount: this.state.bid_amount,req_date: new Date() }
            if(auction.bid_amount <= this.state.high_bid){
                document.getElementById('try').innerHTML = "amount should be greater than last bid";
                document.getElementById('bidmsg').innerHTML = "";
                return
            }
            trialservice.createProductBid(auction).then((res) => {
                this.setState({message: res.data});
                document.getElementById('try').innerHTML = "";
                document.getElementById('bidmsg').innerHTML = "Your Bid Registered";
                
            });
            refreshPage();
        }
        else{
            document.getElementById('try').innerHTML = "Please login ";
        }
    }

    

    countdown = setInterval(function() {
        const deadline = new Date("2023-01-01 00:00:00").getTime();
	    var now = new Date().getTime();
	    var timeleft = deadline - now;

	    var days = Math.floor(timeleft / (1000*60*60*24));
	    var hours = Math.floor((timeleft % (1000*60*60*24)) / (1000*60*60));
	    var minute = Math.floor((timeleft %(1000*60*60)) / (1000*60));
	    var seconds = Math.floor((timeleft % (1000*60)) / 1000);

	    document.getElementById("day").innerHTML = days + "d "
	    document.getElementById("hour").innerHTML = hours + "h " 
	    document.getElementById("min").innerHTML = minute + "m " 
	    document.getElementById("sec").innerHTML = seconds + "s"
        if(timeleft <= 0){
            document.getElementById("clock").innerHTML = "EXPIRED"
            document.getElementById("day").innerHTML = "-"
	        document.getElementById("hour").innerHTML = "-"
	        document.getElementById("min").innerHTML =  "-"
	        document.getElementById("sec").innerHTML = "-"
        }
    },1000);

    render() {

        

        return (
            
            <>
                <div className='container brdered mt-5 mb-5'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-10'>
                            <div className='card'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='images p-3'>
                                            <div className='text-center p-4'> 
                                                <img id='main-image' className='myimage' src={this.getImage(this.state.img)} width='250' /> 
                                            </div>
                                            <div className='thumbnail text-center'> 
                                                <img src={this.getImage(this.state.img)} width='70'/>
                                            </div>
                                            <br/>
                                            <div className='text-center'>
                                                <p id='clock' className='text-danger'>Time Left : <i className='fas fa-stopwatch'></i></p>
                                                <div id="clockdiv">
                                                    <div>
                                                        <span className="days" id="day"></span>
                                                        <div className="smalltext">Day's</div>
                                                    </div>
                                                    <div>
                                                        <span className="hours" id="hour"></span>
                                                        <div className="smalltext">Hour's</div>
                                                    </div>
                                                    <div>
                                                        <span className="minutes" id="min"></span>
                                                        <div className="smalltext">Min's</div>
                                                    </div>
                                                    <div>
                                                        <span className="seconds" id="sec"></span>
                                                        <div className="smalltext">Sec's</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div className='product p-4'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='d-flex align-items-center'>  
                                                <span className='ml-1'/>
                                            </div>
                                            <a href='/product'><i id='cancel' className="fas fa-times-circle" style={{ fontSize: 24 }} >cancel</i></a>
                                        </div>
                                        <div className='mt-4 mb-3'> 
                                            <span className='text-uppercase text-muted brand'> </span>
                                            <h5 className='text-uppercase' style={{ fontSize: 30}}>{this.state.name}</h5>
                                            <div className='price d-flex flex-row align-items-center'> 
                                                <span className='act-price'><b className='h5'>&#8377;&nbsp;{this.state.min_bid}</b></span>
                                                <div className='ml-2'> 
                                                    <small className='dis-price'></small> 
                                                    <span className='text-dark'>Bid Starting Price</span> 
                                                </div>
                                            </div>
                                        </div>
                                        <b>{this.soldOrNot()}</b>
                                        <p className='about'>{this.state.details}</p>
                                        <div className='sizes mt-5'>
                                            <div>
                                                <p>
                                                    <b>last bid :</b>
                                                    &nbsp;
                                                    <b>&#8377;&nbsp;{this.state.high_bid}</b>
                                                </p>
                                                <input type="number" name='bid_amount' value={this.state.bid_amount} onChange={this.onChange} min={this.state.high_bid} required/>
                                            </div>
                                        </div>
                                        <div>
                                            <p id='try' className='text-danger' ></p>
                                            </div>
                                            <div>
                                                {
                                                    this.selfProduct()
                                                }
                                            </div>
                                            <div>
                                                <p id='bidmsg' className='text-success'></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
               
        );
    }
}

