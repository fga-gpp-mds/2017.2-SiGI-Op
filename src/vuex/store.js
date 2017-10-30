import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const mutations = {
  GET_OBJECTS(state, data) {
    const thisState = state;
    thisState.objects = data;
  },

  GET_SELECT_ITEMS(state, payload) {
    const thisState = state;
    const items = [];
    let obj = {};
    let i = 0;
    for (i = 0; i < payload.data.length; i += 1) {
      obj.text = payload.data[i][payload.itemText];
      obj.value = payload.data[i].id;
      items[i] = obj;
      obj = {};
    }
    thisState.selectitems[payload.key] = items;
  },

  POST_OBJECTS(state) {
    let i = 1;
    const thisState = state;
    const ObjectToPost = {};
    for (i = 1; i < state.headers.length; i += 1) {
      ObjectToPost[state.headers[i].name] = state.headers[i].value;
    }
    axios.post('http://localhost:8000/'.concat(state.name, 's', '/'), ObjectToPost)
      .then(thisState.alert = false)
      .catch((e) => {
        thisState.alert = true;
        state.errors.push(e);
      });
  },

  PUT_OBJECTS(state, id) {
    let i = 1;
    const thisState = state;
    const ObjectToPut = {};
    for (i = 1; i < state.headers.length; i += 1) {
      ObjectToPut[state.headers[i].name] = state.headers[i].value;
    }
    axios.put('http://localhost:8000/'.concat(state.name, 's', '/', id, '/'), ObjectToPut)
      .then(thisState.alert = false)
      .catch((e) => {
        thisState.alert = true;
        state.errors.push(e);
      });
  },

  DELETE_OBJECTS(state, id) {
    axios.delete('http://localhost:8000/'.concat(state.name, 's', '/', id, '/'))
    .then(() => {})
    .catch((e) => {
      state.errors.push(e);
    });
  },

  SET_NEW_HEADERS(state, head) {
    const thisState = state;
    thisState.headers = head;
  },

  SET_NEW_NAME(state, newName) {
    const thisState = state;
    thisState.name = newName;
  },
  TOGGLE_ALERT(state, newAlert) {
    const thisState = state;
    thisState.alert = newAlert;
  },
  FILL_UPDATE_FIELDS(state, object) {
    const thisState = state;
    let i;
    for (i = 0; i < Object.keys(object).length; i += 1) {
      thisState.headers[i].value = Object.values(object)[i];
    }
  },
};

export const getters = {
  name: state => state.name,
  headers: state => state.headers,
  objects: state => state.objects,
  selectitems: state => state.selectitems,
  alert: state => state.alert,
  errors: state => state.errors,
};

export const state = {
  name: '',
  headers: [],
  objects: [],
  selectitems: {},
  alert: false,
  errors: [],
};

export const actions = {
  getObjects({ commit }) {
    axios.get('http://localhost:8000/'.concat(state.name, 's', '/'))
    .then((response) => {
      commit('GET_OBJECTS', response.data);
    })
    .catch((e) => {
      state.errors.push(e);
    });

    for (let i = 1; i < state.headers.length; i += 1) {
      if (state.headers[i].type === 'select') {
        axios.get('http://localhost:8000/'.concat(state.headers[i].item_name, 's', '/'))
        .then((response) => {
          commit({
            type: 'GET_SELECT_ITEMS',
            key: state.headers[i].name,
            itemText: state.headers[i].itemText,
            data: response.data,
          });
        })
        .catch((e) => {
          state.errors.push(e);
        });
      }
    }
  },
  postObject({ commit, dispatch }) {
    commit('POST_OBJECTS');
    setTimeout(() => {
      dispatch('getObjects');
    }, 500);
  },
  putObject({ commit, dispatch }, id) {
    commit('PUT_OBJECTS', id);
    setTimeout(() => {
      dispatch('getObjects');
    }, 500);
  },
  deleteObject({ commit, dispatch }, id) {
    commit('DELETE_OBJECTS', id);
    setTimeout(() => {
      dispatch('getObjects');
    }, 500);
  },
  setNewHeaders({ commit }, head) {
    commit('SET_NEW_HEADERS', head);
  },
  setNewName({ commit }, name) {
    commit('SET_NEW_NAME', name);
  },
  toggleAlert({ commit }, newAlert) {
    commit('TOGGLE_ALERT', newAlert);
  },
  fillUpdateFields({ commit }, object) {
    commit('FILL_UPDATE_FIELDS', object);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});