export default {
  addNewCard({ commit, state }, payload) {
    const { listOrder, title } = payload;
    const list = state.lists.find(item => item.order === listOrder);
    const newCardOrder = list.cards.length
      ? list.cards[list.cards.length - 1].order + 1
      : 0;
    list.cards = [
      ...list.cards,
      { title, description: "", order: newCardOrder }
    ];

    commit("updateList", { order: listOrder, list });
  },
  addNewList({ commit, state }, payload) {
    const { title } = payload;
    const newListOrder = state.lists.length
      ? state.lists[state.lists.length - 1].order + 1
      : 0;

    commit("addList", { title, cards: [], order: newListOrder });
  },
  updateList({ commit, state }, payload) {
    const { source, target, listOrder } = payload;

    const list = state.lists.find(item => item.order === listOrder);

    const temp = list.cards[source];
    list.cards[source] = {
      ...list.cards[target],
      order: source
    };
    list.cards[target] = {
      ...temp,
      order: target
    };

    commit("updateList", { order: listOrder, list });
  },
  moveCard({ dispatch, state }, payload) {
    const { source, target } = payload;

    dispatch("removeCard", source);
    const card = state.lists
      .find(item => item.order === source.listOrder)
      .cards.find(item => item.order === source.cardOrder);
    dispatch("addCard", { ...target, card });
  },
  removeCard({ commit, state }, payload) {
    const { listOrder, cardOrder } = payload;

    const list = state.lists.find(item => item.order === listOrder);

    const cards = list.cards
      .filter(item => item.order !== cardOrder)
      .reduce(
        (acc, cv) => [
          ...acc,
          cv.order > cardOrder ? { ...cv, order: cv.order - 1 } : cv
        ],
        []
      );

    commit("updateList", {
      order: listOrder,
      list: {
        ...list,
        cards
      }
    });
  },
  addCard({ commit, state }, payload) {
    const { listOrder, cardOrder, card } = payload;

    const list = state.lists.find(item => item.order === listOrder);

    list.cards
      .reduce(
        (acc, cv) => [
          ...acc,
          cv.order >= cardOrder ? { ...cv, order: cv.order + 1 } : cv
        ],
        []
      )
      .splice(cardOrder, 0, { ...card, order: cardOrder });

    commit("updateList", {
      order: listOrder,
      list
    });
  },
  updateBoard({ commit }, payload) {}
};
