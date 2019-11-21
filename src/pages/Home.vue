<template>
  <div v-bind:style="{ padding: '40px' }">
    <div>Home</div>
    <br />
    <div>
      Simple counter: {{ count }}
      <button @click="add">Increment vuex count</button>
      <br><br>
      Users count: {{ usersCount }}
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { COUNTER_MUTATIONS, COUNTER_ACTIONS } from 'store/modules/counter';

  export default {
    name: 'Home',
    metaInfo: {
      title: 'Vue ssr - homepage',
      meta: [{ name: 'description', content: 'Vue ssr template' }],
    },
    mounted() {
      this.getUsersCount();
    },
    serverPrefetch () {
      return this.getUsersCount()
    },
    methods: {
      add() {
        this.$store.commit(COUNTER_MUTATIONS.INCREMENT, 1);
      },
      getUsersCount() {
        return this.$store.dispatch(COUNTER_ACTIONS.GET_USERS_COUNT);
      },
    },
    computed: {
      ...mapState({
        count: state => state.counter.count,
        usersCount: state => state.counter.usersCount,
      }),
    },
  }
</script>
