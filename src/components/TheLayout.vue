<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="header__top__left">
              <ul>
                <li><i class="fa fa-envelope"></i> therichposts@gmail.com</li>
                <li>Mua hàng thông minh</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="header__top__right">
              <div class="header__top__right__social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-pinterest-p"></i></a>
              </div>
              <!-- <div class="header__top__right__language">
                <img src="assets/img/language.png" alt="" />
                <div>English</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                  <li><a href="#">Spanis</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </div> -->
              <div class="header__top__right__auth">
                <a href="#"><i class="fa fa-user"></i> Tiện ích</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="header__logo">
            <a href="#" class="logo">V-Shop</a>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="header__menu">
            <ul>
              <li class="active"><a href="#">Trang chủ</a></li>
              <!-- <li><a href="#">Cửa hàng</a></li> -->
              <li>
                <a href="#">Mua thông minh</a>
                <ul class="header__menu__dropdown">
                  <!-- <li><a href="#">Blog</a></li> -->
                  <!-- <li><a href="#">Shoping Cart</a></li>
                  <li><a href="#">Check Out</a></li>
                  <li><a href="#">Blog Details</a></li> -->
                </ul>
              </li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="header__cart">
            <ul>
              <li>
                <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-shopping-bag"></i> <span>3</span></a
                >
              </li>
            </ul>
            <div class="header__cart__price">Khuyến mãi: <span>150.00 đ</span></div>
          </div>
        </div>
      </div>
      <div class="humberger__open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
  <slot></slot>
  <footer class="footer spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer__about">
            <div class="footer__about__logo">
              <a href="#" class="logo">V-Shop</a>
            </div>
            <ul>
              <li>Địa chỉ : Hà Nội</li>
              <li>Điện thoại: 1234567890</li>
              <li>Email: therichposts@gmail.com</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
          <div class="footer__widget">
            <h6>Useful Links</h6>
            <ul>
              <li><a href="#">Về chúng tôi</a></li>
              <li><a href="#">Về mua sắm</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Dịch vụ gợi ý</a></li>
              <li><a href="#">Chính sách mua sắm</a></li>
              <li><a href="#">Địa chỉ chi tiết</a></li>
            </ul>
            <ul>
              <li><a href="#">Thông tin chi tiết</a></li>
              <li><a href="#">Dịch vụ</a></li>
              <li><a href="#">Dự án</a></li>
              <li><a href="#">Liên hệ</a></li>
              <li><a href="#">Sự đổi mới</a></li>
              <li><a href="#">Chứng nhận</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="footer__widget">
            <h6>Gửi thư về địa chỉ</h6>
            <p>abc@gmail.com</p>
            <form action="#">
              <input type="text" placeholder="Nhập email" />
              <button type="submit" class="site-btn">Subscribe</button>
            </form>
            <div class="footer__widget__social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="footer__copyright">
            <div class="footer__copyright__text">
              <p>
                Copyright &copy;2021 All rights reserved | This template is made
                with <i class="fa fa-heart" aria-hidden="true"></i> by
                <a href="#" target="_blank">abc</a>
              </p>
            </div>
            <div class="footer__copyright__payment">
              <img src="assets/img/payment-item.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>