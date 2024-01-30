import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import "primevue/resources/themes/nova/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";


import AutoComplete from "primevue/autocomplete";
import Badge from "primevue/badge";
import BadgeDirective from "primevue/badgedirective";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmationService from "primevue/confirmationservice";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import Panel from "primevue/panel";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import Ripple from "primevue/ripple";
import StyleClass from "primevue/styleclass";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import Button from "primevue/button";
import Toast from "primevue/toast";
import Message from "primevue/message";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import InputText from 'primevue/inputtext';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("AutoComplete", AutoComplete);
app.component("Badge", Badge);
app.component("Column", Column);
app.component("Dropdown", Dropdown);
app.component("Divider", Divider);
app.component("ConfirmDialog", ConfirmDialog);
app.component("ConfirmPopup", ConfirmPopup);
app.component("Panel", Panel);
app.component("Dialog", Dialog);
app.component("InputNumber", InputNumber);
app.component("InputSwitch", InputSwitch);
app.component("Button", Button);
app.component("Toast", Toast);
app.component("Message", Message);
app.component("InputText", InputText);
app.component("Checkbox", InputText);

app.directive("tooltip", Tooltip);
app.directive("ripple", Ripple);
app.directive("badge", BadgeDirective);
app.directive("styleclass", StyleClass);

app.mount('#app')
