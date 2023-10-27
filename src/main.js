import { createApp } from "vue";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "./style.css";
import "animate.css";
import App from "./App.vue";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
createApp(App).use(vuetify).mount("#app");
