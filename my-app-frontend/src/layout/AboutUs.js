import React, { useEffect } from 'react';



function aboutus() {

  

  return (
        <div className='text-center'>
          <div class="jumbotron">
            <div class="text-center">
              <div>
                <b class="alert alert-primary">About us</b>
              </div>
            </div>   
          </div>
          <img class="background" src='https://img.freepik.com/free-vector/bid-design-background_52683-76080.jpg?w=1380&t=st=1664135243~exp=1664135843~hmac=7e760870f159f495ed1759acd896f20739afb700ecfeec76d8d31e7da93ba0dc'/>
          <img class="circle" src='https://img.freepik.com/free-vector/traditional-auction_1284-9264.jpg?w=1380&t=st=1664135968~exp=1664136568~hmac=0dfbe5cff132498c1cb7f611c1c26336bc9586e1396d536a6cbd314a04b737c6'/>
          <br/>
          <br/>
          <p className='text-light rounded col-md-10 offset-md-1' style={{ fontSize: 18 }}><strong>Hello , An online auction (also electronic auction, e-auction, virtual auction, or eAuction) is an auction held over the internet and accessed by internet connected devices. Similar to in-person auctions, online auctions come in a variety of types, with different bidding and selling rules.
            Online auctions break down and remove the physical limitations of traditional auctions such as geography, presence, time, space, and a small target audience, allowing online auctions greater scope and reach than traditional auctions.
            In 2002, online auctions were projected to account for 30% of all online e-commerce due to the rapid expansion of the popularity of the form of electronic commerce. Online auctions include business to business (B2B), business to consumer (B2C), and consumer to consumer (C2C) auctions.</strong></p>
        </div>
  );
}

export default aboutus;