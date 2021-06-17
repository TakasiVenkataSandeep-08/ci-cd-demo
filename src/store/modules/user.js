import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import { AUTH_LOGOUT } from "../actions/auth";
import router from "../../router";

const state = { status: "", profile: localStorage.getItem("profile") || {} };

const getters = {
  getProfile: (state) => state.profile,
  isProfileLoaded: (state) => !!state.profile.name,
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }, id) => {
    console.log(id);
    commit(USER_REQUEST);
    fetch(`api/users/${id}`)
      .then((resp) => {
        resp
          .json()
          .then((res) => {
            console.log(res);
            commit(USER_SUCCESS, res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(() => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT);
      });
  },
};

const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = "success";
    localStorage.setItem("profile", JSON.stringify(resp));
    state.profile = resp;
    router.push("/");
  },
  [USER_ERROR]: (state) => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
