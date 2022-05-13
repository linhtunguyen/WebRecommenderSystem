import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      count: 99,
      chosenCategory: "all",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },

    chooseCategory(state, newCategory) {
      console.log("[ chooseCategory ] newCategory: ", newCategory);
      state.chosenCategory = newCategory;
    },
  },
});
