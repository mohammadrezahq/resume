import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", {
  state: () => ({ canChange: true }),
  actions: {
    canChangeAction() {
      this.canChange = false;
      let t = this;
      setTimeout(() => (t.canChange = true), 1000);
    },
  },
});
