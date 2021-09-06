import Vue from 'vue';
import App from './App.vue';
import router from './router';
import compositionApi from "@vue/composition-api";
import axios from './models/axios';
import { makeAjax, setModleConfig } from 'dobux-vue';

Vue.config.productionTip = false;
Vue.use(compositionApi);

setModleConfig({
  ajax: axios,
  responseCheck: (res) => res.result === 1,
  effectiveParams: res => res.data,
  callBackParams: res => res,
});

declare module 'dobux-vue' {
  export interface AxiosResponse<D> {
    s?: string;
    result: number;
    data: D;
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
