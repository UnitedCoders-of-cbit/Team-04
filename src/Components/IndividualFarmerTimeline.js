import React from 'react'

export default function IndividualFarmerTimeline() {
  return (
    <>
    <section>
  <div className="container">
    <h1 className="text-center">From Start to Finish with ACME Software</h1>
    <div className="timeline flex-container">

      <div className="timeline-item flex-items-default selected">
        <div className="timeline-content text-left animated bounceIn">
          <h2>Explore</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
          <i className="material-icons">explore</i>
        </div>
      </div>
      <div className="timeline-item flex-items-default">
        <div className="timeline-content text-left">
          <h2>Plan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
          <i className="material-icons">border_style</i>
        </div>
      </div>
      <div className="timeline-item flex-items-default">
        <div className="timeline-content text-left">
          <h2>Production</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
          <i className="material-icons">format_shapes</i>
        </div>
      </div>
      <div className="timeline-item flex-items-default">
        <div className="timeline-content text-left">
          <h2>Review</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
          <i className="material-icons">rate_review</i>
        </div>
      </div>
      <div className="timeline-item flex-items-default">
        <div className="timeline-content text-left">
          <h2>Ship</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eveniet nulla amet, sapiente voluptatum praesentium.</p>
          <div className="hexagon"></div>
          <i className="material-icons">important_devices</i>
        </div>
      </div>

      <div className="dropdown animated bounceIn" style="left: -88px;">
        <div className="inner">
          <div className="arrow-down"></div>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  )
}
