import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

const state = {
  lists: [
    {
      title: "bababa",
      list: [
        {
          title: "Lorem ipsum dolor sit amet",
          description: "sdfasdfasd asdfasd"
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum"
        }
      ]
    },
    {
      title: "dasdfasdfasd",
      list: [
        {
          title: "awerqef",
          description: "werdfasdf werqwer"
        },
        {
          title: "werfsdfqwer",
          description: "werfs asdfwer"
        }
      ]
    }
  ]
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters
});
