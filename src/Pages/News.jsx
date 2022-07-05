import React from 'react'
import  blog from '../Assests/upload/blog_01.jpg';

const News = () => {
  return (
    <div>
        
        <section className="section banner" style={{ backgroundImage: "url upload/blog_bg.jpg)"}} data-img-width="1688" data-img-height="470" data-diff="100">

</section>
{/* <!-- end section --> */}

<div className="page-title grey">
    <div className="container">
        <div className="title-area pull-left">
            <h2>News Feeds <small>We shared best articles about vets and pets</small></h2>
            <div className="bread">
                <ol className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">News Feeds</li>
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
        <div className="row">
          <div id="content" className="col-md-8 col-sm-12 col-xs-12">
                <div className="blog-wrapper">
                    <div className="blog-image">
                        <a href="blog-single-1.html" title="">
                            <img src="upload/blog_01.jpg" alt="" className="img-responsive"/></a>
                    </div>
                    {/* <!-- end image --> */}
                    <div className="blog-title">
                        {/* <!-- <a className="category_title" href="#" title="">PET SUPPLIES</a> --> */}
                        <h2><a href="blog-single-1.html" title="">How to find best dog food?</a></h2>
                        <div className="post-meta">
                            {/* <span> */}
                            {/* <!-- <i className="fa fa-user"></i>
                            <a href="#">John</a>
                            </span>
                            <span>
                            <i className="fa fa-tag"></i>
                            <a href="#">Pet</a>
                            </span>
                            <span>
                            <i className="fa fa-comments"></i>
                            <a href="#">19 Comments</a>
                            </span> */}
                            <span> 
                            <i className="fa fa-clock-o"></i>
                            <a href="index.html">19 May 2015</a>
                            </span>
                            {/* <span> */}
                            {/* <!-- <i className="fa fa-eye"></i>
                            <a href="#">122 Views</a>
                            </span>
                            <span>
                            <i className="fa fa-share-alt"></i>
                            <a href="#">Share</a>
                            </span> --> */}
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theown printer took.</p>
                        <a href="blog-single-1.html" className="readmore">Read more</a>
                    </div>
                    {/* <!-- end desc --> */}
                </div>
                {/* <!-- end blog-wrapper --> */}

                <div className="blog-wrapper">
                    <div className="blog-image">
                        <a href="blog-single-1.html" title="">
                            <img src={blog} alt="" className="img-responsive"/>
                            </a>
                    </div>
                    {/* <!-- end image --> */}
                    <div className="blog-title">
                        {/* <!-- <a className="category_title" href="#" title="">PET HEALTH</a> --> */}
                        <h2><a href="blog-single-1.html" title="">What About Your Dog Toths?</a></h2>
                        <div className="post-meta">
                            {/* <!-- <span>
                            <i className="fa fa-user"></i>
                            <a href="#">John</a>
                            </span>
                            <span>
                            <i className="fa fa-tag"></i>
                            <a href="#">Pet</a>
                            </span>
                            <span>
                            <i className="fa fa-comments"></i>
                            <a href="#">19 Comments</a>
                            </span> --> */}
                            <span>
                            <i className="fa fa-clock-o"></i>
                            <a href="index.html">19 May 2015</a>
                            </span>
                            {/* <!-- <span>
                            <i className="fa fa-eye"></i>
                            <a href="#">122 Views</a>
                            </span>
                            <span>
                            <i className="fa fa-share-alt"></i>
                            <a href="#">Share</a>
                            </span> --> */}
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theown printer took.</p>
                        <a href="blog-single-1.html" className="readmore">Read more</a>
                    </div>
                    /</div>
                    {/* <!-- end desc --> */}
                </div>
                {/* <!-- end blog-wrapper --> */}

                <div className="blog-wrapper">
                    <div className="blog-image">
                        <a href="blog-single-1.html" title="">
                            <img src={blog} alt="" className="img-responsive"/>
                            </a>
                    </div>
                    {/* <!-- end image --> */}
                    <div className="blog-title">
                        {/* <!-- <a className="category_title" href="#" title="">PET HEALTH</a> --> */}
                        <h2><a href="blog-single-1.html" title="">We Will Help You About Your Pet Health</a></h2>
                        <div className="post-meta">
                            {/* <!-- <span>
                            <i className="fa fa-user"></i>
                            <a href="#">John</a>
                            </span>
                            <span>
                            <i className="fa fa-tag"></i>
                            <a href="#">Pet</a>
                            </span>
                            <span>
                            <i className="fa fa-comments"></i>
                            <a href="#">19 Comments</a>
                            </span> --> */}
                            <span>
                            <i className="fa fa-clock-o"></i>
                            <a href="index.html">19 May 2015</a>
                            </span>
                            {/* <span>
                            <i className="fa fa-eye"></i>
                            <a href="#">122 Views</a>
                            </span>
                            <span>
                            <i className="fa fa-share-alt"></i>
                            <a href="#">Share</a>
                            </span> --> */} 
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theown printer took.</p>
                        <a href="blog-single-1.html" className="readmore">Read more</a>
                    </div>
                    {/* <!-- end desc --> */}
                </div>
                {/* <!-- end blog-wrapper --> */}

                <div className="blog-wrapper">
                    <div className="blog-image">
                        <a href="blog-single-1.html" title="">
                            <img src="upload/blog_03.jpg" alt="" className="img-responsive"/>
                            </a>
                    </div>
                    {/* <!-- end image --> */}
                    <div className="blog-title">
                        {/* <!-- <a className="category_title" href="#" title="">VET NEWS</a> --> */}
                        <h2><a href="blog-single-1.html" title="">Media Pet Vizard Released for All Vets</a></h2>
                        <div className="post-meta">
                            {/* <!-- <span>
                            <i className="fa fa-user"></i>
                            <a href="#">John</a>
                            </span>
                            <span>
                            <i className="fa fa-tag"></i>
                            <a href="#">Pet</a>
                            </span>
                            <span>
                            <i className="fa fa-comments"></i>
                            <a href="#">19 Comments</a>
                            </span> --> */}
                            <span>
                            <i className="fa fa-clock-o"></i>
                            <a href="index.html">19 May 2015</a>
                            </span>
                            {/* <!-- <span> --> */}
                            {/* <!-- <i className="fa fa-eye"></i>
                            <a href="#">122 Views</a>
                            </span>
                            <span>
                            <i className="fa fa-share-alt"></i>
                            <a href="#">Share</a>
                            </span> --> */}
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theown printer took.</p>
                        <a href="blog-single-1.html" className="readmore">Read more</a>
                    </div>
                    {/* <!-- end desc --> */}
                </div>
                {/* <!-- end blog-wrapper --> */}

                <div className="blog-wrapper">
                    <div className="blog-image">
                        <a href="blog-single-1.html" title="">
                            <img src="upload/blog_05.jpg" alt="" className="img-responsive"/>
                            </a>
                    </div>
                    {/* <!-- end image --> */}
                    <div className="blog-title">
                        {/* <!-- <a className="category_title" href="#" title="">VET HEALTH</a> --> */}
                        <h2><a href="blog-single-1.html" title="">Pet Barber Services Released</a></h2>
                        <div className="post-meta">
                            {/* <!-- <span>
                            <i className="fa fa-user"></i>
                            <a href="#">John</a>
                            </span>
                            <span>
                            <i className="fa fa-tag"></i>
                            <a href="#">Pet</a>
                            </span>
                            <span>
                            <i className="fa fa-comments"></i>
                            <a href="#">19 Comments</a>
                            </span> --> */}
                            <span>
                            <i className="fa fa-clock-o"></i>
                            <a href="index.html">19 May 2015</a>
                            </span>
                            {/* <!-- <span>
                            <i className="fa fa-eye"></i>
                            <a href="#">122 Views</a>
                            </span>
                            <span>
                            <i className="fa fa-share-alt"></i>
                            <a href="#">Share</a>
                            </span> --> */}
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theown printer took.</p>
                        <a href="blog-single-1.html" className="readmore">Read more</a>
                    </div>
                    {/* <!-- end desc --> */}
                </div>
                {/* <!-- end blog-wrapper --> */}

                <div className="blog-wrapper">
                    <div className="blog-image">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <img src="upload/blog_01.jpg" alt="" className="img-responsive"/>
                                </div>
                                <div className="item">
                                    <img src="upload/blog_02.jpg" alt="" className="img-responsive"/>
                                </div>
                            </div>

                            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                <span className="fa fa-angle-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                <span className="fa fa-angle-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    {/* <!-- end blog-image -->  */}
                    <div className="blog-title">
                        {/* <!-- <a className="category_title" href="#" title="">VET GALLERY</a> --> */}
                        <h2><a href="blog-single-1.html" title="">Custom Pet Gallery Style with Carousel</a></h2>
                        <div className="post-meta">
                            {/* <!-- <span>
                            <i className="fa fa-user"></i>
                            <a href="#">John</a>
                            </span>
                            <span>
                            <i className="fa fa-tag"></i>
                            <a href="#">Pet</a>
                            </span>
                            <span>
                            <i className="fa fa-comments"></i>
                            <a href="#">19 Comments</a>
                            // </span> */}
                            <span> 
                            <i className="fa fa-clock-o"></i>
                            <a href="index.html">19 May 2015</a>
                            </span>
                            {/* <!-- <span>
                            <i className="fa fa-eye"></i>
                            <a href="#">122 Views</a>
                            </span>
                            <span>
                            <i className="fa fa-share-alt"></i>
                            <a href="#">Share</a>
                            </span> --> */}
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theown printer took.</p>
                        <a href="blog-single-1.html" className="readmore">Read more</a>
                    </div>
                    {/* <!-- end desc --> */}
                </div>
                {/* <!-- end blog-wrapper --> */}

                <div className="">
                    <div className="">
                        {/* <!-- <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/36679562&amp;color=f79800&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe> --> */}
                    {/* </div><!-- end image --> */}
                    <div className="">
                        {/* <!-- <a className="category_title" href="#" title="">VET AUDIO</a> --> */}
                        {/* <!-- <h2><a href="blog-single-1.html" title="">Let's Listen Out Latest Pet Tutorials</a></h2> --> */}
                        <div className="">
                            {/* <!-- <span>
                            <i className="fa fa-user"></i>
                            <a href="#">John</a>
                            </span>
                            <span>
                            <i className="fa fa-tag"></i>
                            <a href="#">Pet</a>
                            </span>
                            <span>
                            <i className="fa fa-comments"></i>
                            <a href="#">19 Comments</a>
                            </span>
                            <span> --> */}
                            {/* <!-- <i className="fa fa-clock-o"></i>
                            <a href="#">19 May 2015</a>
                            </span> --> */}
                            {/* <!-- <span>
                            <i className="fa fa-eye"></i>
                            <a href="#">122 Views</a>
                            </span>
                            <span>
                            <i className="fa fa-share-alt"></i>
                            <a href="#">Share</a>
                            </span> --> */}
                        </div>
                        {/* <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theown printer took.</p> -->
                        <!-- <a href="blog-single-1.html" className="readmore">Read more</a> --> */}
                    </div>
                    {/* <!-- end desc --> */}
                </div>
                {/* <!-- end blog-wrapper --> */}

                <hr className="invis"/>

                <nav className="pagi clearfix">
                    <ul className="pagination">
                        <li><a href="index.html">1</a></li>
                        <li><a href="index.html">2</a></li>
                        <li><a href="index.html">3</a></li>
                        <li><a href="index.html">4</a></li>
                        <li><a href="index.html">5</a></li>
                    </ul>
                </nav>
            </div>
            {/* <!-- end content --> */}

            <div id="sidebar" className="col-md-4 col-sm-12 col-xs-12">

                <div className="widget">
                    <div className="widget-title">
                        <h4>Recent posts</h4>
                        <hr/>
                    </div>
                    {/* <!-- end title --> */}

                    <div className="recent-post-widget">
                        <ul className="recent-posts">
                            <li>
                                <p><a href="blog-single-1.html" title="">
                                    <img src="upload/blog_05.jpg" alt="" className="alignleft"/>How to find best dog food?</a></p>
                                <span>12 May 2014</span>
                            </li>
                            <li>
                                <p><a href="blog-single-1.html" title=""><img src="upload/blog_04.jpg" alt="" className="alignleft"/>What About Your Dog Toths?</a></p>
                                <span>06 May 2014</span>
                            </li>
                            <li>
                                <p><a href="blog-single-1.html" title=""><img src="upload/blog_03.jpg" alt="" className="alignleft"/>We Will Help You About Your Pet Health</a></p>
                                <span>06 May 2014</span>
                            </li>
                        </ul>
                        {/* <!-- end latest-tweet --> */}
                    </div>
                    {/* <!-- end twitter-widget --> */}
                </div>
                {/* <!-- end widget --> */}
{/* 
                <!-- <div className="widget">
                    <div className="widget-title">
                        <h4>Blog Categories</h4>
                        <hr> -->
                    <!-- </div>end title --> */}

                    {/* <!-- <div className="cats-widget">
                        <ul>
                            <li><a href="blog.html" title="">Pet Vet Videos</a></li>
                            <li><a href="blog.html" title="">Pet Healt Care</a></li>
                            <li><a href="blog.html" title="">Vet Education</a></li>
                            <li><a href="blog.html" title="">Our News</a></li>
                            <li><a href="blog.html" title="">Released & Updates</a></li> -->
                        <!-- </ul>end latest-tweet -->
                    <!-- </div>end twitter-widget -->
                <!-- </div>end widget --> */}


                {/* <!-- <div className="widget">
                    <div className="widget-title">
                        <h4>Recent Tweets</h4>
                        <hr> -->
                    <!-- </div>end title --> */}

                    {/* <!-- <div className="twitter-widget">
                        <ul className="latest-tweets">
                            <li>
                                <p><a href="#" title="">@Mark</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam.</p>
                                <span>2 hours ago</span>
                            </li>
                            <li>
                                <p><a href="#" title="">@Envato</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam.</p>
                                <span>2 hours ago</span>
                            </li> --> */}
                        {/* <!-- </ul>end latest-tweet --> */}
                    {/* <!-- </div>end twitter-widget --> */}
                {/* <!-- </div>end widget --> */}

                {/* <!-- <div className="widget"> */}
                    {/* <div className="widget-title"> */}
                        {/* <h4>Popular Tags</h4> */}
                        {/* <hr> --> */}
                    {/* <!-- </div>end title --> */}

                    {/* <!-- <div className="tag-widget">
                        <a href="#">Responsive</a>
                        <a href="#">Modern</a>
                        <a href="#">Corporate</a>
                        <a href="#">Creative</a>
                        <a href="#">Business</a>
                        <a href="#">Fresh</a>
                        <a href="#">Awesome</a>
                        <a href="#">Logger Theme</a>
                        <a href="#">Responsive</a>
                        <a href="#">Modern</a> --> */}
                     </div>
                    {/* end text-widget --> */}
                </div>
                {/* end widge */}

            </div>
            {/* <!-- end content -->        */}
    
        {/* <!-- end row --> */}

  {/* <!-- end container --> */}

 </section>


 </div>
    

  )
}

export default News