import React from "react";

function logout(){
  sessionStorage.clear();
  window.location.reload(false);
}

function loginbtn(){
  var username = sessionStorage.getItem('user_name');
  if(username != undefined){
    return  <div className='offset-md-5'>
              <i className='fas fa-id-card-alt text-light p-2'/>
              <a href='/mymessage'><b className='text-success '>{username}</b> 
              &nbsp;<i className='fas fa-comment-dots text-light' style={{ fontSize: 18 }} ></i></a> &nbsp;&nbsp;
              <button className='btn btn-danger' onClick={()=>logout()} >Logout <i className='fas fa-power-off'></i></button>
            </div>;
  }
  else{
    return  <a href='/login' className='btn btn-primary offset-md-7' role="button"><i className='fas fa-user-check'/> Login</a>;
  }
}

function rolebase(){
  var role = sessionStorage.getItem("user_role");
  if(role === "ADMIN"){
    return <a className='nav-item nav-link' href='/admin'><i className='fas fa-user-secret'/> ADMIN</a>;
  }
  if(role === "STAFF"){
    return <a className='nav-item nav-link' href='/staff'><i className='fas fa-user-tie'/> STAFF</a>;
  }
}

export default function Navbar() {

    return (<>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark' >
              <a className='navbar-brand' href='/'>E-Auction</a>
              <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
              <a className='nav-item nav-link' href='/product'>Home</a>
              <a className='nav-item nav-link' href='/myproduct'>MY Products</a>
              <a className='nav-item nav-link' href='/mywinnings'>My Winnings</a>
              {
                rolebase()
              }
              <a className='nav-item nav-link' href='/aboutus'>About Us</a>
              <a className='nav-item nav-link' href='/help'>Help</a>
              <a className='nav-item nav-link' href='/faq'>FAQ</a>
            </div>
            {
              loginbtn()
            }
          </div>
        </nav></>
    )
}