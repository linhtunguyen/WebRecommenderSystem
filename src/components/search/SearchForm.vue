<template>
  <div class="hero__search__form">
    <form action="#">
      <div class="hero__search__categories">
        Tất cả
        <span class="arrow_carrot-down"></span>
      </div>
      <input type="text" :value="value" @input="handleInput" placeholder="Bạn tìm gì..." />
      <!-- v-model="searchQueryString" -->
      <button class="site-btn" @click="onClickBtnSearch(content)">
        TÌM KIẾM
      </button>
    </form>
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