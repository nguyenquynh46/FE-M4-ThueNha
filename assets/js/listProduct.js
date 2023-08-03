function listProduct(){
    let str=`
}
    <div class="hero_area">
        <!-- header section strats -->
        <header class="header_section">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="index.html">
          <span>
            Dịch vụ thuê nhà
          </span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=""></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                        <li class="nav-item active"  id="home">
                            <button class="nav-link" onclick="loadHomeUser()">Trang chủ <span class="sr-only">(current)</span></button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" onclick="listProductUser()" ">
                Sản phẩm
              </button>
            <li class="nav-item">
            
              <button class="nav-link" id="user" >Tài khoản</button>
             
            </li>
            
            <li class="nav-item">
            
            
            
           <div class="dropdown" >
  <button class="btn  btn-light dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Sắp xếp
                        </button>

                        <div class="dropdown-menu">
                            <button class="dropdown-item" onclick="">Tăng dần</button>
                            <button class="dropdown-item" onclick="">Giảm dần</button>
                        </div>
                </div>

            </li>
            <div class="dropdown" >
                <button class="btn  btn-light dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Tìm kiếm
                </button>

                <div class="dropdown-menu">
                    <button class="dropdown-item" onclick="">Diện tích</button>
                    <button class="dropdown-item" onclick="">Giá nhà</button>
                </div>
            </div>


            <input type="text">

                <button class="btn nav_search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
                <div class="user_option" >
                    <div id ='login'>
                        <i   class="fa fa-user" aria-hidden="true" onclick="loadLogin()">
               <span>
                Đăng Nhập
              </span>
                        </i>
                    </div>

                    <!--            <li class="nav-item">-->

                    <button class="nav-link" onclick="loadHome()" >Đăng xuất</a>

                    <!--            </li>   
                            -->

                </ul>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
    </div>
</div>
</div>
</nav>
</header>
    <!-- end header section -->

</div>
    <!-- end hero area -->

    <!-- shop section -->

    <section class="shop_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Latest Products
                </h2>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box">
                        <a href="">
                            <div class="img-box">
                                <img src="images/p1.png" alt="">
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Ring
                                </h6>
                                <h6>
                                    Price
                                    <span>
                    $200
                  </span>
                                </h6>
                            </div>
                            <div class="new">
                <span>
                  New
                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box">
                        <a href="">
                            <div class="img-box">
                                <img src="images/p2.png" alt="">
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Watch
                                </h6>
                                <h6>
                                    Price
                                    <span>
                    $300
                  </span>
                                </h6>
                            </div>
                            <div class="new">
                <span>
                  New
                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box">
                        <a href="">
                            <div class="img-box">
                                <img src="images/p3.png" alt="">
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Teddy Bear
                                </h6>
                                <h6>
                                    Price
                                    <span>
                    $110
                  </span>
                                </h6>
                            </div>
                            <div class="new">
                <span>
                  New
                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box">
                        <a href="">
                            <div class="img-box">
                                <img src="images/p4.png" alt="">
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Flower Bouquet
                                </h6>
                                <h6>
                                    Price
                                    <span>
                    $45
                  </span>
                                </h6>
                            </div>
                            <div class="new">
                <span>
                  New
                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box">
                        <a href="">
                            <div class="img-box">
                                <img src="images/p5.png" alt="">
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Teddy Bear
                                </h6>
                                <h6>
                                    Price
                                    <span>
                    $95
                  </span>
                                </h6>
                            </div>
                            <div class="new">
                <span>
                  New
                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box">
                        <a href="">
                            <div class="img-box">
                                <img src="images/p6.png" alt="">
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Flower Bouquet
                                </h6>
                                <h6>
                                    Price
                                    <span>
                    $70
                  </span>
                                </h6>
                            </div>
                            <div class="new">
                <span>
                  New
                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box">
                        <a href="">
                            <div class="img-box">
                                <img src="images/p7.png" alt="">
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Watch
                                </h6>
                                <h6>
                                    Price
                                    <span>
                    $400
                  </span>
                                </h6>
                            </div>
                            <div class="new">
                <span>
                  New
                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="box">
                        <a href="">
                            <div class="img-box">
                                <img src="images/p8.png" alt="">
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Ring
                                </h6>
                                <h6>
                                    Price
                                    <span>
                    $450
                  </span>
                                </h6>
                            </div>
                            <div class="new">
                <span>
                  New
                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <a href="">
                    View All Products
                </a>
            </div>
        </div>
    </section>

    <!-- end shop section -->

    <!-- info section -->

    <section class="info_section  layout_padding2-top">
        <div class="social_container">
            <div class="social_box">
                <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="">
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <div class="info_container ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <h6>
                            ABOUT US
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                        </p>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="info_form ">
                            <h5>
                                Newsletter
                            </h5>
                            <form action="#">
                                <input type="email" placeholder="Enter your email">
                                    <button>
                                        Subscribe
                                    </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h6>
                            NEED HELP
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                        </p>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h6>
                            CONTACT US
                        </h6>
                        <div class="info_link-box">
                            <a href="">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <span> Gb road 123 london Uk </span>
                            </a>
                            <a href="">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <span>+01 12345678901</span>
                            </a>
                            <a href="">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <span> demo@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer section -->
        <footer class=" footer_section">
            <div class="container">
                <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </div>
        </footer>
        <!-- footer section -->

    </section>
`

document.getElementById('display').innerHTML=str
}