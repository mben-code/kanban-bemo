import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
  lists: [
    {
      title: "bababa",
      cards: [
        {
          title: "Lorem ipsum dolor sit amet",
          description: "sdfasdfasd asdfasd",
          order: 0
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          order: 1
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum",
          order: 2
        }
      ],
      order: 0
    },
    {
      title: "dasdfasdfasd",
      cards: [
        {
          title: "awerqef",
          description: "werdfasdf werqwer",
          order: 0
        },
        {
          title: "werfsdfqwer",
          description: "werfs asdfwer",
          order: 1
        }
      ],
      order: 1
    }
  ]
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
