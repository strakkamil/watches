<script setup>
import Button from "../Button.vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

const props = defineProps({
  id: Number,
});

const router = useRouter();

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

function isInCart() {
  return cart.value.some((item) => item === props.id);
}

function goToCart() {
  router.push("/cart");
}
</script>

<template>
  <div class="buttons-container">
    <Button
      v-if="!isInCart()"
      class="add"
      @click="cartStore.addToCart(props.id)"
      >Dodaj do koszyka</Button
    >
    <Button
      v-if="isInCart()"
      class="remove"
      @click="cartStore.removeFromCart(props.id)"
      >Usuń z koszyka</Button
    >
    <Button v-if="isInCart()" class="cart" @click="goToCart"
      >Przejdź do koszyka</Button
    >
  </div>
</template>

<style lang="scss" scoped>
.buttons-container {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
}
</style>
