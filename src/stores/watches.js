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
  const caliber = ref(sessionStorage.getItem("caliber") || "MECHANICAL");

  watch(
    cartWatches,
    (newValue) => {
      sessionStorage.setItem("cartWatches", JSON.stringify(newValue));
    },
    { deep: true },
  );

  watch(caliber, (newValue) => {
    sessionStorage.setItem("caliber", newValue);
  });

  const cartStore = useCartStore();
  const { cart } = storeToRefs(cartStore);

  const fetchAllWatches = async () => {
    const response = await axios.get(`${import.meta.env.BASE_URL}watches.json`);
    return response.data;
  };

  const fetchWatches = async () => {
    try {
      watches.value = await fetchAllWatches();
    } catch (e) {
      console.error("Failed fetch watches", e);
    }
  };

  const fetchWatch = async (id) => {
    try {
      const all = await fetchAllWatches();
      watchItem.value = all.find((watch) => watch.id === Number(id)) || {};
    } catch (e) {
      console.error("Failed fetch watch", e);
    }
  };

  const fetchLastWatches = async () => {
    try {
      const all = await fetchAllWatches();
      lastWatches.value = [...all].sort((a, b) => b.id - a.id).slice(0, 6);
    } catch (e) {
      console.error("Failed fetch watches,", e);
    }
  };

  const fetchCartWatches = async () => {
    if (cart.value.length) {
      try {
        const all = await fetchAllWatches();
        cartWatches.value = all.filter((watch) => cart.value.includes(watch.id));
      } catch (e) {
        console.error("Failed fetch watches,", e);
      }
    } else {
      cartWatches.value = [];
    }
  };

  const changeCaliber = (type) => {
    caliber.value = type;
  };

  return {
    caliber,
    watches,
    watchItem,
    lastWatches,
    cartWatches,
    changeCaliber,
    fetchWatches,
    fetchWatch,
    fetchLastWatches,
    fetchCartWatches,
  };
});
