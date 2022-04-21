<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <SideBar></SideBar>
        </div>
        <div class="col-lg-9">
          <div class="hero__search">
            <div class="hero__search__form">
              <form action="#">
                <div class="hero__search__categories">
                  Danh mục
                  <span class="arrow_carrot-down"></span>
                </div>
                <input type="text" placeholder="Bạn tìm gì?" />
                <button type="submit" class="site-btn">TÌM</button>
              </form>
            </div>
            <div class="hero__search__phone">
              <div class="hero__search__phone__icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="hero__search__phone__text">
                <h5>1234567890</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
          <div
            class="hero__item set-bg"
            data-setbg="https://cdn.tgdd.vn/2022/03/campaign/Group46821-464x517.png"
          >
            <div class="hero__text">
              <span>THIẾT BỊ ĐIỆN TỬ</span>
              <h2>Hàng chính hãng <br />100%</h2>
              <p>Miễn phí vận chuyển toàn quốc</p>
              <a href="#" class="primary-btn">MUA NGAY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="categories">
    <div class="container">
      <div class="row">
        <div class="categories__slider owl-carousel">
          <div class="col-lg-3">
            <div
              class="categories__item set-bg"
              data-setbg="assets/img/categories/cat-1.jpg"
            >
              <h5><a href="#">Fresh Fruit</a></h5>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              class="categories__item set-bg"
              data-setbg="assets/img/categories/cat-2.jpg"
            >
              <h5><a href="#">Dried Fruit</a></h5>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              class="categories__item set-bg"
              data-setbg="assets/img/categories/cat-3.jpg"
            >
              <h5><a href="#">Vegetables</a></h5>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              class="categories__item set-bg"
              data-setbg="assets/img/categories/cat-4.jpg"
            >
              <h5><a href="#">drink fruits</a></h5>
            </div>
          </div>
          <div class="col-lg-3">
            <div
              class="categories__item set-bg"
              data-setbg="assets/img/categories/cat-5.jpg"
            >
              <h5><a href="#">drink fruits</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>SẢN PHẨM ĐẶC BIỆT</h2>
          </div>
          <div class="featured__controls">
            <ul>
              <li class="active" data-filter="*">TẤT CẢ</li>
              <li data-filter=".oranges">Máy tính</li>
              <li data-filter=".fresh-meat">Điện thoại</li>
              <li data-filter=".vegetables">Máy in</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row featured__filter">
        <div
          v-for="item in hotProducts"
          :key="item.code"
          class="col-lg-3 col-md-4 col-sm-6 mix oranges"
        >
          <ProductItem :product="item"></ProductItem>
        </div>
      </div>
    </div>
  </section>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="banner__pic">
            <img src="assets/img/banner/banner-1.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="banner__pic">
            <img src="assets/img/banner/banner-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="latest-product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="latest-product__text">
            <h4>Latest Products</h4>
            <div class="latest-product__slider owl-carousel">
              <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="latest-product__text">
            <h4>Top Rated Products</h4>
            <div class="latest-product__slider owl-carousel">
              <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="latest-product__text">
            <h4>Review Products</h4>
            <div class="latest-product__slider owl-carousel">
              <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div class="latest-prdouct__slider__item">
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" class="latest-product__item">
                  <div class="latest-product__item__pic">
                    <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                  </div>
                  <div class="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="from-blog spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title from-blog__title">
            <h2>From The Blog</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="blog__item">
            <div class="blog__item__pic">
              <img src="assets/img/blog/blog-1.jpg" alt="" />
            </div>
            <div class="blog__item__text">
              <ul>
                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                <li><i class="fa fa-comment-o"></i> 5</li>
              </ul>
              <h5><a href="#">Cooking tips make cooking simple</a></h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="blog__item">
            <div class="blog__item__pic">
              <img src="assets/img/blog/blog-2.jpg" alt="" />
            </div>
            <div class="blog__item__text">
              <ul>
                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                <li><i class="fa fa-comment-o"></i> 5</li>
              </ul>
              <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="blog__item">
            <div class="blog__item__pic">
              <img src="assets/img/blog/blog-3.jpg" alt="" />
            </div>
            <div class="blog__item__text">
              <ul>
                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                <li><i class="fa fa-comment-o"></i> 5</li>
              </ul>
              <h5><a href="#">Visit the clean farm in the US</a></h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SideBar from "@/components/homeview/SideBar.vue";
import ProductItem from "@/components/productlist/ProductItem.vue";
import axios from "axios";
export default {
  components: {
    SideBar,
    ProductItem,
  },
  data() {
    return {
      hotProducts: [], //Danh sách sản phẩm đang hot
    };
  },
  async created() {
    var self = this;

    // var proId = 220042001279;
    try {
      var rs = await axios.get("http://localhost:8000/items/hotproduct");
      self.hotProducts = rs.data.list_item_infor;
      // var rs = await axios.get("http://127.0.0.1:8000/items/" + proId);
      console.log(rs);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.hero__item {
  background-image: url("https://cdn.tgdd.vn/2022/03/campaign/Group46821-464x517.png");
  // background-image: attr(data-setbg);
  background-size: contain;
  background-position: right;

  // background-color: red;
}
</style>