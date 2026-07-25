import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

export const useCartStore = defineStore("cart", () => {
  const cart = ref(JSON.parse(sessionStorage.getItem("cart")) || []);

  watch(
    cart,
    (newValue) => {
      sessionStorage.setItem("cart", JSON.stringify(newValue));
    },
    { deep: true },
  );

  const toast = useToast();

  function isExisting(id) {
    return cart.value.some((item) => item === id);
  }

  const addToCart = (id) => {
    if (!isExisting(id)) {
      cart.value.push(id);
      toast.success("Dodano do koszyka!", {
        position: "top-left",
      });
    }
  };

  const removeFromCart = (id) => {
    if (isExisting(id)) {
      const index = cart.value.indexOf(id);
      if (index !== -1) {
        cart.value.splice(index, 1);
        toast.error("Usunięto z koszyka!", {
          position: "top-left",
        });
      }
    }
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
});
