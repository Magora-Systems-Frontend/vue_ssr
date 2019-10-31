<template>
  <div v-bind:style="{ padding: '10px' }">
    User id: {{ $route.params.id }}
    Query {{ $route.query }}
    <button @click="sort">
      Apply sort
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      this.getUser();
    },
    beforeRouteUpdate(to, from, next) {
      next();
      this.getUser();
    },
    methods: {
      getUser() {
        // eslint-disable-next-line
        console.log(`Get user: ${this.$route.params.id} - with params`, this.$route.query);
      },
      sort() {
        // eslint-disable-next-line
        console.log('sort');
      },
    },
  }
</script>
