/*
  Можно потом перенести модули (modules) в отдельный ООП компонент
*/
// eslint-disable-next-line import/no-unresolved
// import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import * as address from './modules/addresses';

Vue.use(Vuex);

// const dataState = createPersistedState({
//   paths: ['settings'],
// });

const store = new Vuex.Store({
  modules: {
    address,
  },
  // plugins: [dataState],
});

export default store;
