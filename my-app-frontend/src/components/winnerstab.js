import React, { Component } from 'react';
import trialservice from '../services/trialservice';
import userService from '../services/user.service';



class winnerstab extends Component {

    constructor(props){
        super(props)

        this.state = {
            winners: [],
            winner_id: '',
            winner: '',
            seller: '',
            buyer: '',
            product: '',
            messageid: '0',
            message: '',
            resp: '',
            sender: sessionStorage.getItem("user_role")
        }
    }

    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        if(urole === "ADMIN" || urole === "STAFF"){
            trialservice.getAllWinners().then((res) => {
                this.setState({winners: res.data});
            });
        }else{
            this.props.history.push('/login');
        }
    }

    onChange = e =>{
        this.setState({[e.target.name] : e.target.value});
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

    getWinnerWithProduct() {
        if(this.state.winner_id <= 0){
            document.getElementById("catmsg").innerHTML = "please Select Category First To Filter Products";
            return
        }
        document.getElementById("catmsg").innerHTML = "";
        trialservice.getWinnerByWinnerId(this.state.winner_id).then((res) => {
            this.setState({winner: res.data});
            trialservice.getProductById(res.data.product_id).then((res) => {
                this.setState({product: res.data});
            });
            userService.getUserDetail(res.data.buyer_id).then((res) => {
                this.setState({buyer: res.data});
            });
            userService.getUserDetail(res.data.seller_id).then((res) => {
                this.setState({seller: res.data});
            });
        });
    }

    myBuyFunction() {
        var x = document.getElementById("buy");
        var y = document.getElementById("sell");
        if(x.style.display === "none"){
            x.style.display = "block";
            y.style.display = "none";
        }else{
            x.style.display = "none";
            y.style.display = "none";
        }
    }

    mySellFunction() {
        var x = document.getElementById("buy");
        var y = document.getElementById("sell");
        if(y.style.display === "block"){       
            x.style.display = "none";
            y.style.display = "none";
        }else{
            x.style.display = "none";
            y.style.display = "block";
        }
    }

    notifySeller(){
        if(this.state.seller.id == undefined){
            document.getElementById("msg").style.display = "block";
            return
        }
        let message = {messageid: this.state.messageid, userid: this.state.seller.id, message: this.state.message, sender: this.state.sender};
        userService.sendMessage(message).then((res) => {
            this.setState({resp: res.data});
        });
    }

    notifybuyer(){
        if(this.state.buyer.id == undefined){
            document.getElementById("msgo").style.display = "block";
            return
        }
        let message = {messageid: this.state.messageid, userid: this.state.buyer.id, message: this.state.message, sender: this.state.sender};
        userService.sendMessage(message).then((res) => {
            this.setState({resp: res.data});
        });
        console.log(this.state.resp);
    }


    render() {
        return (
            <div className='text-center'>
                <div className='col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    {
                        this.backControll()
                    }
                    <div className='col-md-6 offset-md-3'>
                        <h4> show Winners with product : </h4>
                        <br/>
                        <select placeholder="Select Winner" name="winner_id" className="form-control" 
                            value={this.state.winner_id} onChange={this.onChange}>
                                <option value='' disabled="disabled">Choose Option</option>
                                {
                                    this.state.winners.map(
                                        winner =>
                                        <option key={winner.winner_id} value={winner.winner_id} className='text-muted' style={{ fontSize: 18}}>winner id : {winner.winner_id} , product id : {winner.product_id} , winning bid : {winner.amount}</option>
                                    )
                                }
                        </select>
                        <p id="catmsg" className='text-danger'></p>
                        <button type='button' className="btn btn-primary mb-2 d-inline" onClick={this.getWinnerWithProduct.bind(this)} >search by winner</button>
                        <br/>
                    </div>
                </div>

                <div className='col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    <table className='table table-hover table-bordered'>
                        <thead className='table-primary'>
                            <td><b>Winner Id</b></td>
                            <td><b>Winner Name</b></td>
                            <td><b>Winner Mail</b></td>
                            <td><b>Product Name</b></td>
                            <td><b>Payment Amount</b></td>
                            <td><b>Winning Date</b></td>
                            <td><b>Seller Name</b></td>
                            <td><b>Seller Mail</b></td>
                            <td className='text-success'><b>notify Seller</b></td>
                            <td className='text-success'><b>notify Winner</b></td>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>{this.state.winner_id}</b></td>
                                <td><b>{this.state.buyer.name}</b></td>
                                <td><b>{this.state.buyer.mail}</b></td>
                                <td><b>{this.state.product.name}</b></td>
                                <td><b>{this.state.winner.amount}</b></td>
                                <td><b>{this.state.winner.win_date}</b></td>
                                <td><b>{this.state.seller.name}</b></td>
                                <td><b>{this.state.seller.mail}</b></td>
                                <td>
                                    <button className='btn btn-info' onClick={this.myBuyFunction.bind(this)}><small>Notify</small></button>
                                </td>
                                <td>
                                    <button className='btn btn-info' onClick={this.mySellFunction.bind(this)}><small>Notify</small></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h5>{this.state.resp}</h5>
                </div>

                <div id='msgsender' className='col-md-10 offset-md-1 border rounded p-2 mt-2 shadow'>
                    <div id="buy" style={{ display: "none" }}>
                        <div>
                            <h4>Message For seller</h4>
                            <b id='msg' className='text-danger' style={{ display: "none" }}>Winner not Decided</b>
                        </div>
                        <br/>
                        <input type="text" className='form-control col-md-8 offset-md-2' name='message' value={this.state.message} onChange={this.onChange} maxLength={50}/>
                        <br/>
                        <button type='button' className='btn btn-primary' onClick={this.notifySeller.bind(this)} >send Message</button>
                    </div>
                    <div id="sell" style={{ display: "none"}}>
                        <div>
                            <h4>Message for winner</h4>
                            <b id='msgo' className='text-danger' style={{ display: "none" }}>Winner not Decided</b>
                        </div>
                        <br/>
                        <input type="text" className='form-control col-md-8 offset-md-2' name='message' value={this.state.message} onChange={this.onChange} maxLength={50} />
                        <br/>
                        <button type='button' className='btn btn-primary' onClick={this.notifybuyer.bind(this)}>send Message</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default winnerstab;