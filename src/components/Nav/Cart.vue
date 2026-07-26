<script setup>
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
</script>

<template>
  <RouterLink to="/cart"
    >KOSZYK<span class="dot">·</span
    ><span class="number">{{ cart.length }}</span></RouterLink
  >
</template>

<style lang="scss" scoped>
a {
  display: flex;
  gap: 5px;
  border: 1px solid var(--hairline);
  padding: 5px 15px;
  border-radius: 5px;
  font-family: "JetBrains";
  font-size: 14px;
  font-weight: 400;
  transition: 0.2s;

  &.active {
    border-color: var(--gold);
  }

  span {
    font-family: "JetBrains";
    &.dot {
      color: var(--gold);
    }
  }

  @media (max-width: 640px) {
    padding: 5px 8px;
    font-size: 11px;
  }
}
</style>
