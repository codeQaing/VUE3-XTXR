import { createStore } from "vuex";
// 2.0 创建仓库  new Vuex.Store({})
// 3.0 创建仓库 createStore({})
const moduleA = {
  // 子模块state建议写成函数
  state: () => {
    return {
      username: "模块A"
    };
  },
  getters: {
    changeName(state) {
      return state.username + "AAAAAA";
    }
  }
};

const moduleB = {
  // 带命名空间的模块
  namespaced: true,
  // 子模块state建议写成函数
  state: () => {
    return {
      username: "模块B"
    };
  },
  getters: {
    changeName(state) {
      return state.username + "BBBBBB";
    }
  },
  mutations: {
    // 修改名字的mutation
    update(state) {
      state.username = "BBBB" + state.username;
    }
  },
  actions: {
    update({ commit }) {
      // 假设请求
      setTimeout(() => {
        commit("update");
      }, 2000);
    }
  }
};

export default createStore({
  state: {
    username: "zs"
  },
  getters: {
    newName(state) {
      return state.username + "!!!";
    }
  },
  mutations: {
    updateName(state) {
      state.username = "ls";
    }
  },
  actions: {
    updateName(ctx) {
      // 发请求
      setTimeout(() => {
        ctx.commit("updateName");
      }, 1000);
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
});
