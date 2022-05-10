<template>
  <div class="hero__search__form hello">
    <form action="#">
      <div class="hero__search__categories">
        Tất cả
        <span class="arrow_carrot-down"></span>
      </div>
      
    </form>

    <h1>Category</h1>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
    //   content: this.value,
    };
  },
  mounted() {
    console.log("HELOO");
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
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

<style>
</style>