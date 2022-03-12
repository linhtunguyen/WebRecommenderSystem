<template>
  <h1 @click="changeRoute">SEARCH VIEW</h1>

  <div class="row featured__filter">
    <div
      v-for="item in listItem"
      :key="item.code"
      class="col-lg-3 col-md-4 col-sm-6 mix oranges"
    >
      <ProductItem :product="item"></ProductItem>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/productlist/ProductItem.vue";
import axios from "axios";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      listItem: [], //Danh sách sản phẩm sẽ hiển thị lên kết quả tìm kiếm
    };
  },
  async mounted() {
    console.log(this.$route.params);
    var self = this;
    var searchQuery = this.$route.params.query;
    var rs = await axios.get(
      "http://127.0.0.1:8000/items/testmongo_query/" + searchQuery
    );
    self.listItem = rs.data.listProduct;
    console.log(rs.data.listProduct);
  },
  created() {
    // this.$watch(
    //   () => this.$route.params,
    //   (toParams, previousParams) => {
    //     print(toParams);
    //     // react to route changes...
    //   }
    // );
  },
  methods: {
    changeRoute() {
      this.$router.push({
        name: "search",
        params: {
          query: "HP",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>