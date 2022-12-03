import React from 'react'
import fruits_and_vegetables from "./../assests/farmerhome/fruits_and_vegetables.png"
import agricultural_export_policy from "./../assests/farmerhome/agricultural_export_policy.jpg"
import cereals from "./../assests/farmerhome/cereals.jpg"
import floricultures from "./../assests/farmerhome/floricultures.jpg"
import processed_foods from "./../assests/farmerhome/processed_foods.jpg"
import scheme from "./../assests/farmerhome/scheme.jpg"
import virtual_trade_fair from "./../assests/farmerhome/virtual_trade_fair.jpg"
import harvestingimg from "./../assests/farmerhome/harvestingimg.jpg"
import irrigationimg from "./../assests/farmerhome/irrigationimg.jpg"
import seedselectionimg from "./../assests/farmerhome/seedselectionimg.jpg"
import { Link } from 'react-router-dom'



import sellingimage from "./../assests/farmerhome/sellingimage.png"
import './../App.scss'
import { useNavigate } from 'react-router-dom'
export default function IndividualFarmerCarousal() {
  let navigate =useNavigate();

  return (
    

   
    <>


<div id="carouselExampleDark" className="carousel carousel-dark slide my-3" data-bs-ride="carousel" style={{"height":"35vw"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div className="carousel-inner" >
          <div className="carousel-item active " data-bs-interval="1000">
              <div className="d-flex justify-content-center">
            <img src={fruits_and_vegetables} className="d-block w-10 " style={{"height":"100%"}}  alt="..."/>

            <div className="carousel-caption d-none d-md-block">
              {/* <h5></h5> */}
              {/* <p>Some representative placeholder content for the first slide.</p> */}
            </div>
        </div>
          </div>
          <div className="carousel-item  " data-bs-interval="2000">
            <div className="d-flex justify-content-center">
            <img src={floricultures} className="d-block w-50"  style={{"height":"100%"}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5> */}
              {/* <p>Some representative placeholder content for the second slide.</p> */}
            </div>
            </div>
          </div>
          <div className="carousel-item  ">
            <div className="d-flex justify-content-center">
            <img src={cereals} className="d-block w-10" style={{"height":"100%"}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              
            </div>
            </div>
          </div>
          <div className="carousel-item  " data-bs-interval="2000">
            <div className="d-flex justify-content-center">
            <img src={processed_foods} className="d-block w-50"  style={{"height":"100%"}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              
            </div>
            </div>
          </div>
          <div className="carousel-item  " data-bs-interval="2000">
            <div className="d-flex justify-content-center">
            <img src={agricultural_export_policy} className="d-block w-50"  style={{"height":"100%"}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
             
            </div>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="2000">
            <div className="d-flex justify-content-center">
            <img src={scheme} className="d-block w-50"  style={{"height":"100%"}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
             
            </div>
            </div>
          </div>
          <div className="carousel-item  " data-bs-interval="2000">
            <div className="d-flex justify-content-center">
            <img src={virtual_trade_fair} className="d-block w-50"  style={{"height":"100%"}} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
             
            </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

















      <section className="ps-timeline-sec">
        <div className="container">
            <ol className="ps-timeline">
                <li>
                    <div className="img-handler-top">
                        <Link to={'/individualfarmerhome/carousal/selection'}><img id="cropselectionimg" src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_03.png" alt=""/>
                        </Link>
                    </div>
                    <div className="ps-bot bhoomb">
                        <p>Crop Selection</p>
                    </div>
                    <span className="ps-sp-top">01</span>
                </li>
                <li>
                    <div className="img-handler-bot">
                    <Link className="nav-link active text-light" aria-current="page" to="/individualfarmerhome/carousal/seeds"><img id="seedselectiontimg"src={seedselectionimg} alt=""/></Link>
                        
                    </div>
                    <div className="ps-top bhoomb">
                        <p>Seed selection and sowing</p>
                    </div>
                    <span className="ps-sp-bot">02</span>
                </li>
                <li>
                    <div className="img-handler-top">
                    <Link className="nav-link active text-light" aria-current="page" to="/individualfarmerhome/carousal/irrigation"><img id="irrigationtimg" src={irrigationimg} alt=""/></Link>
                    </div>
                    <div className="ps-bot bhoomb">
                        <p>Fertilization and irrigation</p>
                    </div>
                    <span className="ps-sp-top">03</span>
                </li>
                <li>
                    <div className="img-handler-bot">
                        <a href='/harvesting'><img id="harvestingstoragetimg" src={harvestingimg} alt=""/></a>
                    </div>
                    <div className="ps-top bhoomb">
                        <p>Harvesting and storage</p>
                    </div>
                    <span className="ps-sp-bot">04</span>
                </li>
                <li>
                    <div className="img-handler-top">
                        <img src={sellingimage} id="timelinesellingimg" alt="" onClick={()=>{
                          navigate("/individualfarmerhome/individualfarmercropselling")
                        }}/>
                    </div>
                    <div className="ps-bot d-flex justify-content-center bhoomb">
                        <p>Crop Selling</p>
                    </div>
                    <span className="ps-sp-top">05</span>
                </li>
               
            </ol>
        </div>
    </section>

</>
  )
}
