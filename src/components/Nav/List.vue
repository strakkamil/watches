<template>
  <li><RouterLink to="/watches">Katalog</RouterLink></li>
  <li><RouterLink to="/payment">Płatność</RouterLink></li>
  <li><RouterLink to="/invoices">Faktury</RouterLink></li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;

  a {
    padding: 10px 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 0.04em;
    font-weight: 400;
    transition: 0.2s;
    border-bottom: 2px solid transparent;

    &:hover {
      color: var(--gold);
    }

    &.active {
      color: var(--gold-bright);
      border-bottom: 2px solid var(--gold);
    }
  }
}
</style>
