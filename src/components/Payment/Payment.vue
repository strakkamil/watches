<script setup>
import Price from "@/components/Price.vue";
import WatchesLink from "@/components/WatchesLink.vue";
</script>

<template>
  <WatchesLink />
  <section class="payment container">
    <h1>Płatność</h1>
    <span class="desc"
      >Symulacja płatności — żadne dane nie są przetwarzane naprawdę.</span
    >
    <div class="price">
      <span>Do zapłaty</span>
      <span><Price /></span>
    </div>
    <button>Zapłać (symulacja)</button>
    <div class="secure">
      <svg
        class="lock"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--text-dim)"
        stroke-width="1.5"
      >
        <rect x="5" y="11" width="14" height="9" rx="1"></rect>
        <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
      </svg>
      <span> Środowisko testowe · brak realnej transakcji </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.payment {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px;
  width: 600px;
  background-color: var(--bg-card);
  border: 1px solid var(--hairline);
  border-radius: 3px;
  gap: 10px;

  h1 {
    font-size: 26px;
  }

  span.desc {
    font-family: "JetBrains";
    font-size: 14px;
    color: var(--text-dim);
  }

  .price {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    padding: 10px 0px;
    border-top: 1px solid var(--hairline);
    border-bottom: 1px solid var(--hairline);
    span {
      font-family: "JetBrains";
      font-size: 18px;
    }
  }

  button {
    padding: 15px;
    font-family: "JetBrains";
    font-size: 20px;
    background-color: var(--gold);
    color: var(--bg);
    border: none;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--gold-bright);
    }
  }

  .secure {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    gap: 10px;

    span {
      font-family: "JetBrains";
      color: var(--text-dim);
    }

    .lock {
      width: 20px;
      height: auto;
    }
  }
}
</style>
