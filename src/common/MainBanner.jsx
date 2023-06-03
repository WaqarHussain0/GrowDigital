import React from 'react';

function MainBanner({name, btnname, imgsrc, link}) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row my-5 ">
            
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {name}
                  <strong className="brand-name"> Grow Digital</strong>
                </h1>
                <h2 className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>

                <div className="mt-3">
                  <a href={link} className="btn-get-started">
                    {btnname}
                  </a>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={imgsrc} className="img-fluid animated" alt={imgsrc}/>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainBanner;