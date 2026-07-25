import axios from "axios";
import { ref, watch } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useCartStore } from "./cart";

export const useWatchesStore = defineStore("watches", () => {
  const watches = ref([]);
  const watchItem = ref({});
  const lastWatches = ref([]);
  const cartWatches = ref(
    JSON.parse(sessionStorage.getItem("cartWatches")) || [],
  );

  watch(
    cartWatches,
    (newValue) => {
      sessionStorage.setItem("cartWatches", JSON.stringify(newValue));
    },
    { deep: true },
  );

  const cartStore = useCartStore();
  const { cart } = storeToRefs(cartStore);

  const fetchWatches = async () => {
    try {
      const response = await axios.get("http://localhost:8000/watches");
      watches.value = response.data;
    } catch (e) {
      console.error("Failed fetch watches", e);
    }
  };

  const fetchWatch = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/watches/${id}`);
      watchItem.value = response.data;
    } catch (e) {
      console.error("Failed fetch watch", e);
    }
  };

  const fetchLastWatches = async () => {
    try {
      const response = await axios.get("http://localhost:8000/watches", {
        params: { _sort: "id", _order: "desc", _limit: 6, _page: 1 },
      });
      lastWatches.value = response.data;
    } catch (e) {
      console.error("Failed fetch watches,", e);
    }
  };

  const fetchCartWatches = async () => {
    if (cart.value.length) {
      const query = cart.value.map((id) => `id=${id}`).join("&");
      try {
        const response = await axios.get(
          `http://localhost:8000/watches?${query}`,
        );
        cartWatches.value = response.data;
      } catch (e) {
        console.error("Failed fetch watches,", e);
      }
    } else {
      cartWatches.value = [];
    }
  };

  return {
    watches,
    watchItem,
    lastWatches,
    cartWatches,
    fetchWatches,
    fetchWatch,
    fetchLastWatches,
    fetchCartWatches,
  };
});
