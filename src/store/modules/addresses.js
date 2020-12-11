import { flatMap, keyBy } from 'lodash';

export const namespaced = true;

export const state = {
  all: {
    loading: 0,
    error: '',
    data: [],
    fields: {},
    history: [],
  },
};

const generateMutations = {};
['ALL'].forEach((name) => {
  ['LOADING', 'ERROR', 'DATA', 'FIELDS', 'HISTORY'].forEach((type) => {
    generateMutations[`SET_${name}_${type}`] = (d, data) => {
      state[name.toLowerCase()][type.toLowerCase()] = data;
    };
    generateMutations[`PUSH_${name}_${type}`] = (d, data) => {
      state[name.toLowerCase()][type.toLowerCase()].push(data);
    };
  });
});

export const mutations = {
  ...generateMutations,
};

export const getters = {
  // eslint-disable-next-line no-shadow
  getAllObject: (state) => (newkey) => keyBy(flatMap(state.state.data), newkey),
};

export const actions = {
  async pushCoordsData({ commit }, query) {
    console.log('pushCoordsData data: ', query);
    if (!query) return false;
    try {
      commit('PUSH_ALL_DATA', query);
      return true;
    } catch (e) {
      commit('SET_ALL_ERROR', e.message);
      console.error(e.message);
      return false;
    }
  },
};
