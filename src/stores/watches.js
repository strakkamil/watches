import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useWatchesStore = defineStore("watches", () => {
  const watches = ref([]);
  const watch = ref({});
  const countWatches = ref(Number);
  const lastWatches = ref([]);

  const fetchWatches = async () => {
    try {
      const response = await axios.get("http://localhost:8000/watches");
      watches.value = response.data;
      countWatches.value = response.data.length;
    } catch (e) {
      console.error("Failed fetch watches", e);
    }
  };

  const fetchWatch = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/watches/${id}`);
      watch.value = response.data;
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

  return {
    watches,
    watch,
    countWatches,
    lastWatches,
    fetchWatches,
    fetchWatch,
    fetchLastWatches,
  };
});
