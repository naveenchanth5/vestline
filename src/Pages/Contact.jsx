import React from 'react'

const Contact = () => {
  return (
    <div>

<section className="section banner" style={{backgroundImage:"url('./Assests/upload/blog_bg.jpg')"}} data-img-width="1688" data-img-height="470" data-diff="100">

</section>
{/* <!-- end section --> */}

<div className="page-title grey">
    <div className="container">
        <div className="title-area pull-left">
            <h2>Contact Us <small>Get a premium support now!</small></h2>
            <div className="bread">
                <ol className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">Contact</li>
                </ol>
            </div>
            {/* <!-- end bread --> */}
        </div>
        {/* <!-- /.pull-right --> */}
        <div className="search pull-right">
            <form>
                <div className="input-group">
                    <input className="form-control" name="s" type="search" placeholder=" Search... "/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </span>
                </div>
                {/* <!-- /input-group --> */}
            </form>
        </div>
        {/* <!-- /.pull-right --> */}
    </div>
</div>
{/* <!-- end page-title --> */}

<section className="section white ">
  <div className="container" >
<div className="row" style={{display:"flex", justifyContent: "center"}}>
  <div className="col-md-6 col-xs-12">
    <div className="appoform-wrapper">
      <div id="message"></div>
      <form id="contactform" action="http://templatevisual.com/demo/petvet/contact.php" name="contactform" method="post">
        <header className="form-header">
          <h3>Contact Form</h3>
        </header>
        <div className="post-body-form text-center">
          <p>In order to provide better service to you, PetVet Veterinary<br/> Clinic
          It is working with the appointment system. Please fill in the<br/> following form completely.</p>
        </div>
        <fieldset className="row-fluid appoform">
          <div className="col-md-12">
            <label className="sr-only">Your name</label>
            <input type="text" name="name" id="name" className="form-control" placeholder="Name *"/>
          </div>
          <div className="col-md-12">
            <label className="sr-only">Email address</label>
            <input type="email" name="email" id="email" className="form-control" placeholder="Email *"/>
          </div>
          
          <div className="col-md-12">
            <textarea className="form-control" name="comments" id="comments" rows="6" placeholder="Extra notes.."> </textarea>
          </div>
          <div className="col-md-12">
            <button type="submit" value="SEND" id="submit" className="btn btn-primary btn-block">Send Message</button>
          </div>
        </fieldset>
        </form>
      </div>
      {/* <!-- end form-container --> */}
  </div>
  {/* <!-- end col --> */}
</div>
{/* <!-- end row --> */}
  </div>
  
</section>


    </div>
  )
}

export default Contact