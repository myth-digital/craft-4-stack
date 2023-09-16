import jsonToForm from '../../utilities/json-to-form';

export default {
  namespaced: true,
  state: {
    entry: {}
  },
  mutations: { 
    STORE_ENTRY(state, payload) {
      state.entry = payload;
    }
  },
  actions: {  
    updateEntry({commit, state}, payload) {
      payload.action = 'entries/save-entry';
      let formData = jsonToForm(payload);

      return axios.post(`/index.php`, formData)
        .then((res) => {
          commit('STORE_ENTRY', res.data);
          return res.data;
        });
    }
  }
};