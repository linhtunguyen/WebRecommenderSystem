<template>
  <div class="featured__item">
    <div
      class="featured__item__pic"
    >
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
        <a href="#">{{
          product?.name + " " + product?.brand + " " + product?.cpu1
        }}</a>
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
};
</script>

<style>
</style>