<template>
  <div class="hero__categories">
    <div class="hero__categories__all">
      <i class="fa fa-bars"></i>
      <span>Danh mục</span>
    </div>
    <ul>
      <li v-for="item in sidebarItems" class="item-li" :key="item.id">
        <a href="#">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarItems: [
        {
          name: "Điện thoại",
          id: 1,
        },
        {
          name: "Laptop",
          id: 2,
        },
        {
          name: "Tablet",
          id: 3,
        },
        {
          name: "Phụ kiện",
          id: 4,
        },
        // {
        //   name: "Điện thoại",
        //   id: 5,
        // },
        {
          name: "PC, máy in",
          id: 6,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hero__categories {
  .item-li {
    a:hover {
      color: #7fad39;
    }
  }
}
</style>