import React, { Component } from 'react';
import trialservice from '../services/trialservice';



class addcategories extends Component {

    constructor(props){
        super(props)

        this.state = {
            category: [],
            cat_name: '',
            cat_id: '0'
        }
    }

    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        if(urole === "ADMIN"){
            trialservice.getCategory().then((res) => {
                this.setState({category: res.data});
            });
        }else{
            this.props.history.push('/login');
        }
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.value });
    }

    addCategory(){
        if(this.state.cat_name === ''){
            document.getElementById("message").innerHTML = "category can not be empty";
            return
        }
        document.getElementById("message").innerHTML = "";
        let category = {cat_id: this.state.cat_id,cat_name: this.state.cat_name};
        console.log(category);
        trialservice.createCategory(category).then((res) => {
            document.getElementById("message").innerHTML = res.data;
            });
    }

    render() {
        return (
            <div className='text-center'>
                <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>
                    <a href='/admin' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>
                    <label htmlFor='catinp'style={{ fontSize: 30 }}><b>Enter Category </b></label>
                    <input id='catinp' type="text" name="cat_name" value={this.state.cat_name} onChange={this.onChange} style={{ textTransform: "uppercase" }} className='form-control col-md-6 offset-md-3' minLength={20} />
                    <br/>
                    <button type='button' className='btn btn-primary' onClick={() => this.addCategory()} ><i className='far fa-plus-square'/>&nbsp;Add Category</button>
                    <br/>
                    <p id='message'></p>
                    <br/>
                </div>
                <br/>
            </div>
        );
    }
}

export default addcategories;