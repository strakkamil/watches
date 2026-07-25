<script setup>
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
    <button
      class="add"
      v-if="!isInCart()"
      @click="cartStore.addToCart(props.id)"
    >
      Dodaj do koszyka
    </button>
    <button
      class="remove"
      v-if="isInCart()"
      @click="cartStore.removeFromCart(props.id)"
    >
      Usuń z koszyka
    </button>
    <button class="cart" v-if="isInCart()" @click="goToCart">
      Przejdź do koszyka
    </button>
  </div>
</template>

<style lang="scss" scoped>
.buttons-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;

  button {
    margin-top: 20px;
    padding: 10px 20px;
    width: 40%;
    background-color: var(--gold);
    border: none;
    border-radius: 3px;
    font-family: "JetBrains";
    font-size: 18px;
    color: var(--bg);
    cursor: pointer;
    transition: 0.2s;

    &.remove {
      background-color: var(--danger);

      &:hover {
        background-color: var(--danger-bright);
      }
    }

    &.cart {
      background-color: var(--hairline);
      color: var(--text);
      margin-left: unset;

      &:hover {
        color: var(--bg);
      }
    }

    &:hover {
      background-color: var(--gold-bright);
    }
  }
}
</style>
