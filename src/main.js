import { createApp } from 'vue'

import App from './App.vue'
import AddressBox from './components/ui/AddressBox.vue';
import TheButton from './components/ui/TheButton.vue';

const app = createApp(App);

app.component('address-box', AddressBox);
app.component('the-button', TheButton);

app.mount('#app');
