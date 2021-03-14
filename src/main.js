import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBKo8gI671wYPzNMcQxqXLw-vm4xY8iVpo",
    authDomain: "vue-firebase-auth-41a4a.firebaseapp.com",
    projectId: "vue-firebase-auth-41a4a",
    storageBucket: "vue-firebase-auth-41a4a.appspot.com",
    messagingSenderId: "121100426928",
    appId: "1:121100426928:web:866dcf810f986da526a575"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
