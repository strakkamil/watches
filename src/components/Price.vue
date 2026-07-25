<script setup>
import { useWatchesStore } from "@/stores/watches";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const watchesStore = useWatchesStore();
const { cartWatches } = storeToRefs(watchesStore);

const totalPrice = computed(() => {
  return cartWatches.value.reduce((sum, watch) => sum + watch.price, 0);
});
</script>

<template>{{ totalPrice }} PLN</template>
