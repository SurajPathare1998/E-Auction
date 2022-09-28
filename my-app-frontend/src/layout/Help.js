import React, { useEffect } from 'react';
import rahulimg from './image/rahulimg.jpg';
import surajimg from './image/surajimg.jpeg';

function help() {

  return (
    <div>
      <div class="jumbotron">
        <div class="text-center">
          <div>
            <b class="alert alert-primary">HELP and CONTACT</b>
          </div>
        </div>   
      </div>
      <img class="background" src='https://img.freepik.com/free-vector/bid-design-background_52683-76080.jpg?w=1380&t=st=1664135243~exp=1664135843~hmac=7e760870f159f495ed1759acd896f20739afb700ecfeec76d8d31e7da93ba0dc'/>
      <img className='circle' src='https://media-exp1.licdn.com/dms/image/C4E0BAQH0pV14FxzqwQ/company-logo_200_200/0/1624685506949?e=2147483647&v=beta&t=L_r6P-Xusi1OYIbb2JSgE_HJozY5SWy8lQCfh-5tRsI'/>
      <br/>
      <div className='text-center'>
        <h2 className='text-light'>IACSD Student Project</h2>
        <span>Sector 29, Behind Akurdi Railway Station,<br/>Nigdi Padhikaran, Akurdi, Pune -44</span>
        <br/>
      </div>
      <div className='row'>
        <div className='col-md-3 offset-md-2 p-1 rounded shadow text-center text-light' style={{ fontSize: 20 }}>
          <img src={rahulimg} className='img-fluid img-thumbnail w-25'/>
          <br/>
          <span><strong>223138 : Rahul Murlidhar Patil</strong></span>
          <br/>
          <span><strong>Mail : </strong><i>patilrahl17899@gmail.com</i></span>
          <br/>
          <span><strong>Contact : </strong><i>7066664460</i></span>
        </div>
        <div className='col-md-3 offset-md-2 p-1 rounded shadow text-center text-light' style={{ fontSize: 20 }}>
          <img src={surajimg} className='img-fluid img-thumbnail w-25'/>
          <br/>
          <span><strong>223130 : Suraj Mahadu Pathare</strong></span>
          <br/>
          <span><strong>Mail : </strong><i>patharesuraj2222@gmail.com</i></span>
          <br/>
          <span><strong>Contact : </strong><i>9637951701</i></span>
        </div>
      </div>
    </div>
  );
}

export default help;