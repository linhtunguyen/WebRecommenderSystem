<template>
  <div class="featured__item" @click="onClickViewDetail">
    <div class="featured__item__pic">
      <img :src="product.img" alt="" />
      <ul class="featured__item__pic__hover">
        <li>
          <a href="#"><i class="fa fa-heart"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-retweet"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-shopping-cart"></i></a>
        </li>
      </ul>
    </div>
    <div class="featured__item__text">
      <h6>
        <a href="#">{{ product?.full_name }}</a>
        <!-- product?.name + " " + product?.brand + " " + product?.cpu1 -->
      </h6>
      <h5>{{ product?.price }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, default: function () {} },
  },
  methods: {
    onClickViewDetail() {
      var self = this;
      console.log(this.product.code);
      this.$router.push({
        name: 'detail',
        params: { productCode: self.product.code },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.featured__item__pic {
  height: 178px;
  width: 262px;
  border: 1px solid #7fad39;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.featured__item:hover .featured__item__pic .featured__item__pic__hover {
  bottom: 15px;
}
</style>
