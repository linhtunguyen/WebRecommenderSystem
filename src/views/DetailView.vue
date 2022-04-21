<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <!--category-productsr-->
          <div class="left-sidebar">
            <!-- <h1>{{ $route.params.id }}</h1> -->
            <h2>Danh mục</h2>
            <div class="panel-group category-products" id="accordian">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#sportswear"
                    >
                      <span class="badge pull-right"
                        ><i class="fa fa-plus"></i
                      ></span>
                      Laptop
                    </a>
                  </h4>
                </div>
                <div id="sportswear" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li><a href="">Nike </a></li>
                      <li><a href="">Under Armour </a></li>
                      <li><a href="">Adidas </a></li>
                      <li><a href="">Puma</a></li>
                      <li><a href="">ASICS </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#mens"
                    >
                      <span class="badge pull-right"
                        ><i class="fa fa-plus"></i
                      ></span>
                      Máy in
                    </a>
                  </h4>
                </div>
                <div id="mens" class="panel-collapse collapse">
                  <!-- <div class="panel-body">
                    <ul>
                      <li><a href="">Fendi</a></li>
                      <li><a href="">Guess</a></li>
                      <li><a href="">Valentino</a></li>
                    </ul>
                  </div> -->
                </div>
              </div>

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordian"
                      href="#womens"
                    >
                      <span class="badge pull-right"
                        ><i class="fa fa-plus"></i
                      ></span>
                      Điện thoại
                    </a>
                  </h4>
                </div>
                <div id="womens" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li><a href="">Fendi</a></li>
                      <li><a href="">Guess</a></li>
                      <li><a href="">Valentino</a></li>
                      <li><a href="">Dior</a></li>
                      <li><a href="">Versace</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="#">Tai nghe</a></h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="#">Sạc</a></h4>
                </div>
              </div>
            </div>
            <div class="brands_products">
              <h2>Loại sản phẩm</h2>
              <div class="brands-name">
                <ul class="nav nav-pills nav-stacked">
                  <li>
                    <a href=""> <span class="pull-right"></span>Laptop HP</a>
                  </li>
                  <li>
                    <a href="">
                      <span class="pull-right"></span>Tai nghe Iphone</a
                    >
                  </li>
                  <li>
                    <a href=""> <span class="pull-right"></span>Sạc Iphone</a>
                  </li>
                  <li>
                    <a href=""> <span class="pull-right"></span>Sạc samsung</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="brands_products">
              <h2>Link mua</h2>
              <div class="brands-name">
                <ul class="nav nav-pills nav-stacked">
                  <li>
                    <a href="">
                      <span class="pull-right"></span>Đi đến link Shoppe</a
                    >
                  </li>
                  <li>
                    <a href="">
                      <span class="pull-right"></span>Đi đến link lazada</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="product-details">
            <!--product-details-->
            <div class="row">
              <div class="col-sm-5">
                <div class="view-product">
                  <img :src="item.img" alt="" style="object-fit: contain" />
                  <h3>ZOOM</h3>
                </div>
              </div>
              <div class="col-sm-7">
                <div class="product-information">
                  <!--/product-information-->
                  <!-- <img :src="item.img" class="newarrival" alt="" /> -->
                  <h2>
                    {{
                      item.name +
                      (item.brand ?? "") +
                      (item.cpu1 ?? "") +
                      (item["Phan Giai"] ?? "")
                    }}
                  </h2>
                  <p>Web ID: {{ item.code }}</p>
                  <img src="images/product-details/rating.png" alt="" />
                  <span>
                    <span>Giá :{{ formatCurrency(item.price) }} đ</span>
                  </span>
                  <p v-show="item.cpu1"><b>CPU:</b> {{ item.cpu1 }}</p>
                  <p v-show="item.ram"><b>Ram:</b> {{ item.ram }}</p>
                  <p v-show="item.brand"><b>Brand:</b> {{ item.brand }}</p>
                  <p v-show="item.vga1">
                    <b>Card màn hình :</b> {{ item.vga1 }}
                  </p>
                  <p v-show="item['Phan Giai']">
                    <b>Phân Giải:</b> {{ item["Phan Giai"] }}
                  </p>
                  <p v-show="item.LED"><b>LED:</b> {{ item.LED }}</p>
                  <!-- <a href=""
                    ><img :src="item.img" class="share img-responsive" alt=""
                  /></a> -->
                </div>
                <!--/product-information-->
              </div>
            </div>
          </div>
          <!--/product-details-->

          <div class="category-tab shop-details-tab">
            <!--category-tab-->
            <div class="col-sm-12">
              <ul class="nav nav-tabs">
                <li><a href="#details" data-toggle="tab">Mô tả sản phẩm</a></li>
              </ul>
            </div>
            <div class="tab-content">
              {{ item.full_name }}
            </div>
          </div>
          <!--/category-tab-->

          <div class="recommended_items">
            <!--recommended_items-->
            <h2 class="title text-center">Sản phẩm gợi ý</h2>
            <div
              id="recommended-item-carousel"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="row">
                <div
                  v-for="item in recommendedItems"
                  :key="item.code"
                  class="col-sm-4"
                >
                  <ProductItem :product="item"></ProductItem>
                </div>
              </div>
            </div>

            <!-- <section class="categories">
              <div class="container">
                <div class="row">
                  <div class="categories__slider owl-carousel">
                    <div
                      class="col-lg-3"
                      v-for="item in recommendedItems"
                      :key="item.code"
                    >
                      <div
                        class="categories__item set-bg"
                        data-setbg="assets/img/categories/cat-1.jpg"
                      >
                        <ProductItem :product="item"></ProductItem>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> -->
          </div>
          <!--/recommended_items-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "@/components/productlist/ProductItem.vue";
import axios from "axios";

export default {
  components: {
    ProductItem,
  },
  async mounted() {
    var detailItemRes = (
      await axios.get("http://127.0.0.1:8000/detail/" + this.$route.params.id)
    ).data;

    console.log(detailItemRes);
    this.item = detailItemRes.detail_product;

    try {
      var apiRes = await axios.get(
        "http://127.0.0.1:8000/items/testmongo/" + this.item.code
      );
      console.log(apiRes);
      this.recommendedItems = apiRes.data.list_item_infor;
    } catch (error) {
      console.error(error);
    }
  },
  data() {
    return {
      item: {},
      recommendedItems: [],
    };
  },
  methods: {
    formatCurrency(money) {
      return parseFloat(money)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
};
</script>

<style lang="scss" scoped>
.container .row {
  border-bottom: 1px solid #f5f5f5;
  margin-left: 0;
  margin-right: 0;
  padding-bottom: 20px;
  padding-top: 20px;
}
.left-sidebar h2,
.brands_products h2 {
  color: #fe980f;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 30px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  z-index: 3;
}
.left-sidebar h2:after,
h2.title:after {
  content: " ";
  position: absolute;
  border: 1px solid #f5f5f5;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 0;
  z-index: -2;
}
.left-sidebar h2:before {
  content: " ";
  position: absolute;
  background: #fff;
  bottom: -6px;
  width: 130px;
  height: 30px;
  z-index: -1;
  left: 50%;
  margin-left: -65px;
}
.category-products {
  border: 1px solid #f7f7f0;
  margin-bottom: 35px;
  padding-bottom: 20px;
  padding-top: 15px;
}
.category-products .panel {
  background-color: #ffffff;
  border: 0px;
  border-radius: 0px;
  box-shadow: none;
  margin-bottom: 0px;
}
.category-products .panel-default .panel-heading {
  background-color: #ffffff;
  border: 0 none;
  color: #ffffff;
  padding: 5px 20px;
}
.category-products .panel-default .panel-heading .panel-title a {
  color: #696763;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
}
.category-products .badge {
  background: none;
  border-radius: 10px;
  color: #696763;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  min-width: 10px;
  padding: 3px 7px;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
}
.panel-group .panel-heading + .panel-collapse .panel-body {
  border-top: 0 none;
}
.panel-body ul {
  padding-left: 20px;
}
.panel-body ul li a {
  color: #696763;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
}
.left-sidebar h2,
.brands_products h2 {
  color: #fe980f;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 30px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  z-index: 3;
}
.brands-name {
  border: 1px solid #f7f7f0;
  padding-bottom: 20px;
  padding-top: 15px;
}
.brands-name .nav-stacked li a {
  background-color: #ffffff;
  color: #696763;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding: 5px 25px;
  text-decoration: none;
  text-transform: uppercase;
}
.brands-name .nav-stacked li a:hover {
  background-color: #fff;
  color: #696763;
}
.padding-right {
  padding-right: 0;
}
.product-details {
  overflow: hidden;
}
.product-details {
  margin-bottom: 40px;
  overflow: hidden;
  margin-top: 10px;
}
.view-product {
  position: relative;
}
.view-product img {
  border: 1px solid #f7f7f0;
  height: 380px;
  width: 100%;
}
.view-product h3 {
  background: #fe980f;
  bottom: 0;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0;
  padding: 8px 20px;
  position: absolute;
  right: 0;
}
#similar-product {
  margin-top: 40px;
}
#similar-product .carousel-inner .item {
  padding-left: 0px;
}
#similar-product .carousel-inner .item img {
  display: inline-block;
  margin-left: 15px;
}
#recommended-item-carousel .carousel-inner .item {
  padding-left: 0;
}
.recommended-item-control {
  position: absolute;
  top: 41%;
}
.recommended-item-control i {
  background: none repeat scroll 0 0 #fe980f;
  color: #ffffff;
  font-size: 20px;
  padding: 4px 10px;
}
.recommended-item-control i:hover {
  background: #ccccc6;
}
.item-control {
  position: absolute;
  top: 35%;
}
.item-control i {
  background: #fe980f;
  color: #ffffff;
  font-size: 20px;
  padding: 5px 10px;
}
.item-control i:hover {
  background: #ccccc6;
}
.product-information {
  border: 1px solid #f7f7f0;
  overflow: hidden;
  padding-bottom: 60px;
  padding-left: 60px;
  padding-top: 60px;
  position: relative;
}
.product-information h2 {
  color: #363432;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  margin-top: 0;
}

.product-information p {
  color: #696763;
  font-family: "Roboto", sans-serif;
  margin-bottom: 5px;
}

.product-information span {
  display: inline-block;
  margin-bottom: 8px;
  margin-top: 18px;
}
.product-information span span {
  color: #fe980f;
  float: left;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-right: 20px;
  margin-top: 0px;
}
.product-information span input {
  border: 1px solid #dededc;
  color: #696763;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  height: 33px;
  outline: medium none;
  text-align: center;
  width: 50px;
}
.product-information span label {
  color: #696763;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-right: 5px;
}
.category-tab {
  overflow: hidden;
}
.category-tab ul {
  background: #40403e;
  border-bottom: 1px solid #fe980f;
  list-style: none outside none;
  padding: 0;
  width: 100%;
}
.category-tab ul li a {
  border: 0 none;
  border-radius: 0;
  color: #b3afa8;
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
}
.category-tab ul li a:hover {
  background: #fe980f;
  color: #fff;
}
.shop-details-tab {
  border: 1px solid #f7f7f0;
  margin-bottom: 75px;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 10px;
  .col-sm-12 {
    padding: 12px;
  }
}
.shop-details-tab .col-sm-12 {
  padding-left: 0;
  padding-right: 0;
}
.single-products {
  position: relative;
}
.single-products:hover .product-overlay {
  display: block;
  height: 100%;
}
.productinfo h2 {
  color: #fe980f;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
}
.productinfo p {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #696763;
}
.productinfo img {
  width: 100%;
}
.productinfo {
  position: relative;
}
</style>
