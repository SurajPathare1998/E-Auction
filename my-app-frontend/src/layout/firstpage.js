import React from 'react';

function disablebtn(){
  const username = sessionStorage.getItem('user_name');
  if(username != undefined){
    return  <p className='lead' >
              <b className='text-success text-center'>Successfully Logged In , refresh Tab Please And EXPLORE</b>
              <img src='https://img.freepik.com/free-vector/online-auction-landing-page-design_52683-76081.jpg?w=1380&t=st=1663597257~exp=1663597857~hmac=a5c45d8b61fd53c87be0e98b8bab72b050b2dbd8840481a1315b802c772032d0' 
                className='rounded mx-auto d-block' />
            </p>;
  }
  else{
    return  <p className='lead' >
              <a id='loglink' className='btn btn-primary btn-lg' href='/login' role='button'><i className='fas fa-user-check'/> Login</a> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <a id='reglink' className='btn btn-primary btn-lg' href='/register' role='button'><i className='fas fa-user-plus'/> Register</a>
              <br/><br/>
              <img src='https://img.freepik.com/free-vector/online-auction-landing-page-design_52683-76081.jpg?w=1380&t=st=1663597257~exp=1663597857~hmac=a5c45d8b61fd53c87be0e98b8bab72b050b2dbd8840481a1315b802c772032d0' 
                className='rounded mx-auto d-block' />
            </p>;
  }
}

function welcome() {

  return (
    
    <div className='jumbotron text-center'>
        <div>
         
            <h1 className='display-4'>Welcome To Online Auction System</h1>
            <p className='lead'>we are here to provide service for buying / selling your valubales and collectibles. </p>
            <hr className='my-4'/>
            
              {
                disablebtn()
              }
            
        </div>
    </div>

  );
}

export default welcome;