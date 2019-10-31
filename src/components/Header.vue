<template>
  <div class="header">
    Header
    <router-link class="header__link" to="/">Go to Home</router-link>
    <router-link class="header__link" to="/about">Go to About</router-link>
    <router-link class="header__link" to="/user/1">Go to User 1</router-link>
    <router-link class="header__link" to="/user/2">Go to User 2</router-link>
  </div>
</template>

<style lang="scss">
  .header {
    padding: 20px;
    box-shadow: 3px 3px 5px 6px #ccc;

    &__linl {
      margin-left: 10px;
    }
  }
</style>
