import React, { Component } from 'react';
import trialservice from '../services/trialservice';
import userService from '../services/user.service';
import '../App.css';

class mywinnings extends Component {

    constructor(props){
        super(props);
        this.state={
            winners :[],
            buyer_id: sessionStorage.getItem("user_id"),
            winner_id: '',
            win: '',
            product: '',
            category: '',
            seller: ''
        }
    }

    componentDidMount(){
        let id = sessionStorage.getItem("user_id");
        if(id >= 1){
            trialservice.getAllWinnerByBuyerId(this.state.buyer_id).then((res) => {
                this.setState({winners: res.data});
            });
        }else{
            this.props.history.push('/product');
        }
    }

    getImage(img){
        if(img == null){
            return "https://media.discordapp.net/attachments/997764811582619729/1021759954291535932/nodata.jpg?width=703&height=703";
        }
        const imagelink = "http://localhost:8080/api/upload/" + img;
        return imagelink; 
    }

    onChangeWinner = e =>{
        this.setState({[e.target.name] : e.target.value});
    }

    showProductPaymentCard(){

        if(this.state.winner_id <= 0){
            document.getElementById("catmsg").innerHTML = "please Select Category First To Filter Products";
            return
        }
        document.getElementById("catmsg").innerHTML = "";
        document.getElementById("otherfilter").style.display = "block";
        trialservice.getWinnerByWinnerId(this.state.winner_id).then((res) => {
            this.setState({win: res.data});
            trialservice.getProductById(res.data.product_id).then((res) => {
                this.setState({product: res.data});
                trialservice.getCategoryById(res.data.cat_id).then((res) => {
                    this.setState({category: res.data});
                    userService.getUserDetail(this.state.product.seller_id).then((res) => {
                        this.setState({seller: res.data});
                    });
                });
            });
        });
    }

    pay(){
        alert("directed to Payment Gateway ");
    }

    render() {

        return (
            <div className='text-center'>
                <h2 className='text-center alert alert-primary'>My Auction Winnings</h2>
                <div id='filter'className='col-md-10 offset-md-1 mt-2 p-2 rounded shadow' >
                    <select placeholder="Select Winner" name="winner_id" className="form-control col-md-8 offset-md-2" 
                        value={this.state.winner_id} onChange={this.onChangeWinner}>
                            <option value='' disabled="disabled">Choose Option</option>
                            {
                                this.state.winners.map(
                                    winner =>
                                    <option key={winner.winner_id} value={winner.winner_id} className='text-muted' style={{ fontSize: 18}}>winner id : {winner.winner_id} , product id : {winner.product_id} , winning bid : {winner.amount}</option>
                                )
                            }
                    </select>
                    <p id="catmsg" className='text-danger'></p>
                    <button type='button' className="btn btn-primary mb-2 d-inline" onClick={this.showProductPaymentCard.bind(this)} >SHOW</button>
                    <br/>
                </div>
                <br/>
                <br/>
                <div id='otherfilter'style={{ display: "none"}} >
                <div class="row justify-content-center mb-3">
                    <div class="col-md-12 col-xl-10">
                        <div class="card shadow-0 border rounded-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img src={this.getImage(this.state.product.img)}
                                                class="w-100 myimg" />
                                            <a href="#!">
                                            <div class="hover-overlay">
                                                <div class="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>
                                <div class="col-md-6 col-lg-6 col-xl-6">
                                    <h5>{this.state.product.name}</h5>
                                    <br/>
                                    <div class="mt-1 mb-0 text-muted small">
                                        <span>{this.state.category.cat_name}</span>
                                    </div>
                                    <p class="text-truncate mb-4 mb-md-0">{this.state.product.details}</p>
                                    <br/><br/>
                                    <div class="mb-2 text-muted small">
                                        <span>Seller Name : </span>
                                        <span class="text-primary">{this.state.seller.name}</span>
                                        <br/>
                                        <span>Seller Mail : </span>
                                        <span class="text-primary">{this.state.seller.mail}</span>
                                        <span>   <br /></span>
                                    </div>
                                    <br/><br/>
                                    <div class="d-flex flex-row">
                                        <div class="text-danger offset-md-4 " style={{ fontSize: 15 }}>
                                            <i>Auction Starting Date : </i>
                                            <i>{this.state.product.opening_date}</i>
                                            <br/>
                                            <br/>
                                            <i>Auction Starting Date : </i>
                                            <i>{this.state.product.closing_date}</i>
                                            <br/>
                                        </div>
                                        <span>  </span>
                                    </div>
                              </div>
                              <div class="col-md-6 col-lg-3 col-xl-3 border-mg-start-none border-start">
                                <div class="d-flex flex-row align-items-center mb-1">
                                  <h4 class="mb-1 me-1">{this.state.win.amount}</h4>
                                  <span class="text-danger" style={{ fontSize: 20 }} >&#8377;</span>
                                </div>
                                <h6 class="text-success">Congrats !, you Won <i className='fa fa-trophy'></i></h6>
                                <div class="d-flex flex-column mt-4">
                                  <button class="btn btn-outline-primary btn-lg mt-2" type="button" onClick={this.pay.bind(this)} >
                                    Pay
                               </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>           
            </div>
        );
    }
}

export default mywinnings;