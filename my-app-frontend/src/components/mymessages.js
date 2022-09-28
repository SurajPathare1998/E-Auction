import React, { Component } from 'react';
import userService from '../services/user.service';

class mymessages extends Component {

    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount(){
        let userid = sessionStorage.getItem("user_id");
        if(userid >= 1){
            userService.getUsersAllMessages(userid).then((res) => {
                this.setState({messages: res.data});
            });
        }
    }
    
    cancel(){
        this.props.history.push('/myproduct');
    }

    render() {
        return (
            <>
            <div>
                <div className='text-center'>
                    <div className='row col-md-10 offset-md-1 bordered rounded mt-2 p-2 shadow'>
                        <a href='/product'className='offset-md-11'><i id='cancel' className="fas fa-times-circle" style={{ fontSize: 24 }} >Back</i></a>
                        <br/>
                        <div className='col-md-10 offset-md-1 bordered rounded mt-2 p-2 shadow'>
                            <p style={{fontSize:25}}><b className='text-success'>Notifications</b></p>
                        </div>
                        <div className='col-md-10 offset-md-1 bordered rounded mt-2 p-2 shadow'>
                            <hr/>
                            {
                                this.state.messages.map(
                                    mes=>
                                    <span key={mes.messageid}>
                                        <p style={{ fontSize: 20}}>{mes.message}</p>
                                        <i className='text-muted offset-md-10' style={{fontSize:15}}>- {mes.sender}</i>
                                        <hr/>
                                    </span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default mymessages;