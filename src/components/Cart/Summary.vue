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

<template>
  <div class="summary-container">
    <div class="info">
      <span>Razem</span>
      <span class="price">{{ totalPrice }} PLN</span>
    </div>
    <RouterLink to="/payment">Przejdź do podsumowania</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.summary-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 25px;
  margin-left: auto;
  width: 25%;
  gap: 15px;

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      font-family: "JetBrains";
      font-size: 24px;
    }
  }

  a {
    width: 100%;
    padding: 15px;
    display: block;
    font-family: "JetBrains";
    font-size: 16px;
    text-decoration: none;
    background-color: var(--gold);
    text-align: center;
    color: var(--bg);
    border-radius: 3px;
    transition: 0.2s;

    &:hover {
      background-color: var(--gold-bright);
    }
  }
}
</style>
