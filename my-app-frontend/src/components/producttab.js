import React, { Component } from 'react';
import trialservice from '../services/trialservice';


function deleteProduct(id){
    fetch(`http://localhost:8080/api/product/${id}`,{
        method:'DELETE'
    }).then((res) => 
        res.text()).then((text) => {
            document.getElementById("productmessage").innerHTML = text;
            refreshPage();
    })
}

function refreshPage() {
    window.location.reload(false);
}

class producttab extends Component {

    constructor(props){
        super(props)

        this.state = {
            products :[]
        }

    }

    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        if(urole === "ADMIN" || urole === "STAFF"){
        trialservice.getProducts().then((res) => {
            this.setState({products: res.data});
        });
        }else{
            this.props.history.push('/login');
        }
    }

    deleteControll(product_id){
        var role = sessionStorage.getItem("user_role");
        if(role === "ADMIN"){
           return <button type='button' className="btn btn-danger mb-2" onClick={()=>deleteProduct(product_id)} ><i className='fas fa-trash-alt' /></button>;
        }else{
            return <button type='button' className="btn btn-danger mb-2" disabled><i className='fas fa-trash-alt' /></button>;
        }
    }

    backControll(){
        var role = sessionStorage.getItem("user_role");
        if(role === "ADMIN"){
           return <a href='/admin' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>;
        }else{
            return <a href='/staff' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>;
        }
    }

    render() {
        return (
            <div className='text-center'>
                    <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>                        
                        <div className='container'>
                            {
                                this.backControll()
                            }
                            <table id='producttable' className='table table-hover table-bordered'>
                                <thead><td colSpan="12" style={{ fontSize: 30 }} ><b>Product's</b></td></thead>
                                <thead className='table-primary'>
                                    <td><b>ID No.</b></td>
                                    <td><b>Name</b></td>
                                    <td><b>Details</b></td>
                                    <td><b>End Date</b></td>
                                    <td><b>Status</b></td>
                                    <td className='text-danger'><small>Remove Product</small></td>
                                </thead>
                                <p id='productmessage'></p>
                                <tbody>
                                    {
                                        this.state.products.map(
                                            product => 
                                            <tr key={product.product_id}>
                                                <td>{product.product_id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.details}</td>
                                                <td>{product.closing_date}</td>
                                                <td>{product.status}</td>
                                                <td className='text-danger'>
                                                    {
                                                        this.deleteControll(product.product_id)
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        );
    }
}

export default producttab;