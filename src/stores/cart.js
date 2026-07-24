import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  const addToCart = (watch) => {
    const existing = cart.value.find((c) => c.id === watch.id);
    if (!existing) cart.value.push(watch);
  };

  return {
    cart,
    addToCart,
  };
});
