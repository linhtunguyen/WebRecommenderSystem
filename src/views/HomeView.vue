<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <SideBar></SideBar>
        </div>
        <div class="col-lg-9">
          <div class="hero__search">
            <!-- <SearchForm v-model="searchQueryString"></SearchForm> -->
            <!-- :value="searchQueryString" -->
            <div class="hero__search__form">
              <form action="#">
                <div class="hero__search__categories">
                  Tất cả
                  <span class="arrow_carrot-down"></span>
                </div>
                <input
                  type="text"
                  v-model="searchQueryString"
                  placeholder="Bạn tìm gì..."
                />
                <!-- v-model="searchQueryString" -->
                <button
                  class="site-btn"
                  @click="onClickBtnSearch(searchQueryString)"
                >
                  TÌM KIẾM
                </button>
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
            data-setbg="//cdn.tgdd.vn/2022/04/banner/okk-1920x450-min-1920x450.jpg"
          >
            <!-- <div class="hero__text">
              <span>HÀNG CHÍNH HÃNG</span>
              <h2>Đồ điện tử<br />Siêu ưu đãi</h2>
              <p>Đặt và giao hàng miễn phí toàn quốc</p>
              <a href="#" class="primary-btn">MUA NGAY</a>
            </div> -->
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
            <h2>Sản phẩm nổi bật</h2>
          </div>
          <div class="featured__controls">
            <ul>
              <li class="active" data-filter="*">Tất cả</li>
              <li data-filter=".oranges">Điện thoại</li>
              <li data-filter=".fresh-meat">Laptop</li>
              <li data-filter=".vegetables">Tablet</li>
              <li data-filter=".fastfood">Phụ kiện</li>
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
  
  <section class="from-blog spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title from-blog__title">
            <h2>Khuyến Mãi Đặc Biệt</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="blog__item">
            <div class="blog__item__pic">
              <img
                src="//cdn.tgdd.vn/2022/02/banner/samsung-390-210-390x210.png"
                alt=""
              />
            </div>
            <!-- <div class="blog__item__text">
              <ul>
                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                <li><i class="fa fa-comment-o"></i> 5</li>
              </ul>
              <h5><a href="#">Cooking tips make cooking simple</a></h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </div> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="blog__item">
            <div class="blog__item__pic">
              <img
                src="//cdn.tgdd.vn/2021/10/banner/appleDT-390x210-1.png"
                alt=""
              />
            </div>
            <!-- <div class="blog__item__text">
              <ul>
                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                <li><i class="fa fa-comment-o"></i> 5</li>
              </ul>
              <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </div> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="blog__item">
            <div class="blog__item__pic">
              <img
                src="//cdn.tgdd.vn/2022/04/banner/chuyentranglenovo3-390x210.png"
                alt=""
              />
            </div>
            <!-- <div class="blog__item__text">
              <ul>
                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                <li><i class="fa fa-comment-o"></i> 5</li>
              </ul>
              <h5><a href="#">Visit the clean farm in the US</a></h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SideBar from "@/components/homeview/SideBar.vue";
import SearchForm from "@/components/search/SearchForm.vue";
import ProductItem from "@/components/productlist/ProductItem.vue";
import axios from "axios";
export default {
  components: {
    SideBar,
    ProductItem,
    SearchForm,
  },
  data() {
    return {
      hotProducts: [], //Danh sách sản phẩm đang hot
      searchQueryString: "",
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
  methods: {
    /**
     * XỬ lý sự kiện click vào nút tìm kiếm
     * Author: TQHUY (11/03/2022)
     */
    onClickBtnSearch(value) {
      // var self = this;
      this.$router.push({
        name: "search",
        params: {
          query: value,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  padding: 0;
  .hero__search {
    margin: 0;
  }
  .hero__item {
    background-image: url("https://cdn.tgdd.vn/2022/03/banner/XA-HANG-(-830-X-300)(1)(1)-830x300.jpg");
    // background-image: attr(data-setbg);
    background-size: contain;
    background-position: right;
    height: 310px;
    padding: 0;
    // background-color: red;
  }
  .hero__text {
    h2 {
      font-family: system-ui;
    }
  }
}

.featured {
  padding-top: 10px;

  // .section-title {

  // }
}
</style>