<script setup>
import Watch from "@/components/Watch.vue";
import WatchesList from "@/components/WatchesList.vue";
import { useWatchesStore } from "@/stores/watches";
import { storeToRefs } from "pinia";
import { computed, onMounted } from "vue";

const watchesStore = useWatchesStore();
const { watches } = storeToRefs(watchesStore);

const countWatches = computed(() => watches.value.length);

onMounted(() => {
  watchesStore.fetchWatches();
});
</script>

<template>
  <section class="watches-all container">
    <div class="header">
      <h1>Nasza oferta</h1>
      <h2>{{ countWatches }} MODELI</h2>
    </div>
    <WatchesList>
      <Watch v-for="watch in watches" :key="watch.id" :watch="watch" />
    </WatchesList>
  </section>
</template>

<style lang="scss" scoped>
.watches-all {
  margin-top: 50px;
  margin-bottom: 100px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 30px;
    grid-area: h2;
  }

  h2 {
    font-size: 18px;
    font-family: "JetBrains";
    grid-area: h3;
    text-align: right;
  }

  @media (max-width: 640px) {
    margin-top: 30px;

    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 14px;
    }
  }
}
</style>
