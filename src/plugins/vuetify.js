import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#1565c0",
        secondary: "#1ecb88",
        dark: "#1f272f",
        "dark-grey": "#424f5b",
        grey: "#697785",
        medium: "#a7afc3",
        ice: "#dce1ed",
        light: "#f0f2f5",
        white: "#ffffff",
        success: "#1ecb88",
        alert: "#fd693e",
        error: "#ef1f65"
      }
    }
  },

  icons: {
    iconfont: "mdiSvg"
  }
});
