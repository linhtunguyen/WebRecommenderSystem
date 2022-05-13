<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="hero__categories">
            <div class="hero__categories__all">
              <i class="fa fa-bars"></i>
              <span>Danh mục</span>
            </div>
            <ul>
              <li
                v-for="item in categories"
                class="item-li"
                :key="item.id"
                @click="changeCategory(item.code)"
                :class="{ active: item.code == activeCategory }"
              >
                <a href="#">{{ item.name }}</a>
              </li>
            </ul>
          </div>

          <!-- <SideBar></SideBar> -->
        </div>
        <div class="col-lg-9">
          <div class="hero__search">
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
          ></div>
        </div>
      </div>
    </div>
  </section>
  <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Sản phẩm nổi bật scss {{ this.count }}</h2>
          </div>
          <div class="featured__controls">
            <ul>
              <li
                v-for="item in categories"
                :key="item.id"
                @click="changeCategory(item.code)"
                :class="{ active: item.code == activeCategory }"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row featured__filter">
        <div
          v-for="item in displayedProducts"
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
import { mapState } from "vuex";
export default {
  components: {
    SideBar,
    ProductItem,
    SearchForm,
  },
  data() {
    return {
      categories: [
        { name: "Tất cả", id: "1", code: "all" },
        { name: "Chuột", id: "2", code: "Chuột" },
        { name: "Laptop", id: "3", code: "Laptop" },
        { name: "Điện thoại", id: "4", code: "Điện thoại" },
      ],
      searchQueryString: "",
      displayedProducts: [],
      fetchedProducts: [],
      itemsPerPage: 20,
    };
  },
  computed: {
    // filteredProductByList(page = 0) {

    //   return this.getListInRange(this.fetchedProducts, 0, this.itemsPerPage);
    // },

    activeCategory() {
      this.updateDisplayedProducts(this.chosenCategory);

      return this.chosenCategory;
    },

    ...mapState({
      count: (state) => state.count,
      chosenCategory: (state) => state.chosenCategory,
    }),
  },
  async created() {
    console.log("[ HomeView ] created()");

    this.changeCategory("all");
    var self = this;
  },
  watch: {
    fetchedProducts(newVal) {
      if (newVal) {
        this.displayedProducts = this.getListInRange(
          newVal,
          0,
          this.itemsPerPage
        );
      } else {
        this.fetchedProducts = [];
      }
    },
  },
  methods: {
    getListInRange(originList, startIndex, endIndex) {
      var list = [];
      if (endIndex > originList.length) {
        endIndex = originList.length;
      }

      for (let index = startIndex; index < endIndex; index++) {
        const element = originList[index];
        list.push(element);
      }

      return list;
    },

    async updateDisplayedProducts(newCategory) {
      console.log("[ updateDisplayedProducts ] newCategory: ", newCategory);
      var self = this;
      try {
        if (newCategory == "all") {
          console.log("[ displayedProducts ] chosenCategory = all");
          var rs = await axios.get("http://localhost:8000/items/hotproduct");
        } else {
          console.log("[ displayedProducts ] chosenCategory = else");
          var rs = await axios.get(
            `http://localhost:8000/category/${newCategory}`
          );
        }
        console.log(rs.data);

        self.fetchedProducts = rs.data;
        // this.displayedProducts = rs.data;
      } catch (error) {
        console.error(error);
      }
    },

    changeCategory(newCategory) {
      this.$store.commit("chooseCategory", newCategory);
    },

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

.featured__controls {
  ul {
    li {
      &.active {
        background-color: red;
        color: green;
      }
    }
  }
}

.featured {
  padding-top: 10px;

  // .section-title {

  // }
}

.hero__categories {
  ul {
    li {
      &.active {
        background-color: red;
      }
    }
  }
}
</style>