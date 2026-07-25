import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  function isExisting(id) {
    return cart.value.some((item) => item === id);
  }

  const addToCart = (id) => {
    if (!isExisting(id)) cart.value.push(id);
  };

  const removeFromCart = (id) => {
    if (isExisting(id)) {
      const index = cart.value.indexOf(id);
      if (index !== -1) cart.value.splice(index, 1);
    }
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
});
