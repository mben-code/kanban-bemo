export default {
  updateBoard(state, payload) {
    state.lists = [...payload];
  },

  updateList(state, payload) {
    const { order, list } = payload;
    state.lists = [
      ...state.lists.map(item => (item.order === order ? list : item))
    ];
  },

  addList(state, payload) {
    state.lists = [...state.lists, payload];
  }
};
