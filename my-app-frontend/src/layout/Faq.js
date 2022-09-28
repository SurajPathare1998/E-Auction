import React from 'react';



function faq() {

  return (

          <div>
            <div class="jumbotron">
              <div class="text-center">
                <div>
                  <b class="alert alert-primary">Facts and Questions</b>
                </div>
              </div>   
            </div>
            <img class="background" src='https://img.freepik.com/free-vector/bid-design-background_52683-76080.jpg?w=1380&t=st=1664135243~exp=1664135843~hmac=7e760870f159f495ed1759acd896f20739afb700ecfeec76d8d31e7da93ba0dc'/>
            <div class="text-center mh-100">
              <div className='col-md-12'>
                <div className='col-md-8 offset-md-2 p-1 mt-1 bordered rounded shadow' style={{ backgroundColor: "#fff0f5" }}>
                  <a onClick={() => document.getElementById("done").style.display="none"} className='link-danger'><i className='fas fa-times offset-md-11'></i></a>
                  <h4>What is e-Auction ?</h4>
                  <a id="btnone" className='col-md-12'onClick={() => document.getElementById("done").style.display="Block"} ><i className='fa fa-caret-down'></i></a>
                  <p id="done" className='text-left' style={{ display: "none" }}><strong>Ans : </strong> e-Auctions are conducted over the internet, to enable quicker and more profitable sales which are not only advantageous but ease out on efforts and costs involved. Unlike the traditional buying and selling, where sellers decide the price and the buyers purchase something at that pre-decided price, online auctions help the buyer quote price for a property and it is at the option of the seller to sell or not to sell the property at that price or sell it to the highest bidder. 
                    Online auctions and bidding are expected to be a greater success as they take place in the virtual world and anyone can make their bid for their desired property, with a real hope of acquiring them at very favourable prices.</p>
                </div>
              </div>
              <br/>
              <div className='col-md-12'>
                <div className='col-md-8 offset-md-2 p-1 mt-1 bordered rounded shadow' style={{ backgroundColor: "#fff0f5" }}>
                  <a onClick={() => document.getElementById("dtwo").style.display="none"} className='link-danger'><i className='fas fa-times offset-md-11'></i></a>
                  <h4>Are Auction event private or public ?</h4>
                  <a id="btntwo" className='col-md-12'onClick={() => document.getElementById("dtwo").style.display="Block"} ><i className='fa fa-caret-down'></i></a>
                  <p id="dtwo" className='text-left' style={{ display: "none" }}><strong>Ans : </strong> Each Auction is a highly confidential event conducted between the Auctioneer and a set of qualified Bidders on Auction platform. No outsider can view any aspect of an Auction event without proper authentication by Auctioneer.Therefore all data like Items' specifications, pricing, Bidders' information and bid data are all confidential and available to respective Auctioneers only</p>
                </div>
              </div>
              <br/><div className='col-md-12'>
                <div className='col-md-8 offset-md-2 p-1 mt-1 bordered rounded shadow' style={{ backgroundColor: "#fff0f5" }}>
                  <a onClick={() => document.getElementById("dthree").style.display="none"} className='link-danger'><i className='fas fa-times offset-md-11'></i></a>
                  <h4>How can Bidder Register in Auction portal ?</h4>
                  <a id="btnthree" className='col-md-12'onClick={() => document.getElementById("dthree").style.display="Block"} ><i className='fa fa-caret-down'></i></a>
                  <p id="dthree" className='text-left' style={{ display: "none" }}><strong>Ans : </strong> To participate as a Bidder, Registration is a simple process.Go to registration form from Home page. Fill out all required details. Go through User Agreement & Privacy Policy and click on the 'Register' button. It is a simple registration form with minimum details for identification and security. Go ahead, take a look and register.</p>
                </div>
              </div>
              <br/><div className='col-md-12'>
                <div className='col-md-8 offset-md-2 p-1 mt-1 bordered rounded shadow' style={{ backgroundColor: "#fff0f5" }}>
                  <a onClick={() => document.getElementById("dfour").style.display="none"} className='link-danger'><i className='fas fa-times offset-md-11'></i></a>
                  <h4>Is Online Auction and Bidding Legal in India ?</h4>
                  <a id="btnfour" className='col-md-12'onClick={() => document.getElementById("dfour").style.display="Block"} ><i className='fa fa-caret-down'></i></a>
                  <p id="dfour" className='text-left' style={{ display: "none" }}><strong>Ans : </strong> Online auctions are in the form of e-contracts. E-contract is a contract constitutes, specified, executed and deployed by a software system. In an auction, call for bids act as an invitation to offer. The bids made by the persons at the auction act as offer and it is at the auctioneer’s discretion to accept or reject the offer. On acceptance, the offer turns into an agreement, where the buyer agrees to buy a certain property on payment of a certain consideration. Since all the elements of a valid contract are present, online auctions are legal contracts.</p>
                </div>
              </div>
              <br/>
            </div>
          </div>
  );
}

export default faq;