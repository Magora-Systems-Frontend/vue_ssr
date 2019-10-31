export const COUNTER_MUTATIONS = {
  INCREMENT: 'COUNTER_MUTATIONS_INCREMENT',
  USERS_COUNT: 'COUNTER_MUTATIONS_USERS_COUNT',
};

export const COUNTER_ACTIONS = {
  GET_USERS_COUNT: 'COUNTER_ACTIONS_GET_USERS_COUNT',
};

const getUsersCountMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(30), 100);
  });
};

export const counter = {
  state: {
    count: 1,
    usersCount: 0,
  },
  mutations: {
    [COUNTER_MUTATIONS.INCREMENT](state, payload) {
      state.count = state.count + payload;
    },
    [COUNTER_MUTATIONS.USERS_COUNT](state, payload) {
      state.usersCount = payload;
    },
  },
  actions: {
    async [COUNTER_ACTIONS.GET_USERS_COUNT](context) {
      const usersCount = await getUsersCountMock();
      context.commit(COUNTER_MUTATIONS.USERS_COUNT, usersCount);
    },
  },
};
