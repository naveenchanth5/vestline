import React from 'react'
import  dog from '../Assests/upload/Pet animals/Dog-01.svg';

const BuySale = () => {
  return (
	<div>

<div>

<div className="page-title grey">
            <div className="container">
                <div className="title-area pull-left">
                    <h2>Shop <small>Best pet supplies, materials and eats</small></h2>
                    <div className="bread">
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li className="active">Shop</li>
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

         <section className="section white">
        	<div className="container">

        		<div className="shop-top clearfix">
	                <div className="title-area pull-left">
	                    <p>Showing 1–9 of 23 results</p>
	                </div>
                  {/* <!-- /.pull-right --> */}
				  <div class="pull-right">
						<select class="selectpicker" className="btn-primary btn-lg PX-2">
							<option value="menu_order" >Default sorting</option>
							<option value="popularity" >Sort by popularity</option>
							<option value="rating" >Sort by average rating</option>
							<option value="date" >Sort by newness</option>
							<option value="price" >Sort by price: low to high</option>
							<option value="price-desc" >Sort by price: high to low</option>	
						</select>           
	                </div>
                  {/* <!-- /.pull-right --> */}
        		</div>
            {/* <!-- end shop top --> */}

                <div className="row module-wrapper shop-layout text-center">
					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>


					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>


					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>


					<div className="col-md-3 col-sm-6 wdtShop grid cs-style-3">	
						<div className="img-wrap">
							{/* <!-- <figure> --> */}
								<a href="detail.html"/>
								<img alt="" src={dog} className="img-responsive" />
								{/* <!-- <figcaption>
									<p><strong>$43.00</strong></p>
									<a className="blogging" title="Add to Cart" href="shop-single.html"><i className="fa fa-shopping-cart"></i></a>
								</figcaption> -->
							<!-- </figure> --> */}
						</div>
						<h4 style={{padding: "10px  0 0px"}}><a href="shop-single.html" title="">Beautiful Cat Bed</a></h4>
						{/* <!-- <div className="rating">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</div> --> */}
						<p className="text-center" style={{fontWeight: "bold" ,  color: "#f79700"}} > ₹ 109999</p>
					
					</div>

					
	

          


				
				
				
					
                </div>
              

				<hr className="invis"/>

				
        	</div>
        
        </section>




    </div>


	</div>
  )
}

export default BuySale