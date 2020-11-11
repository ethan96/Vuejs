




import firebase from 'firebase/app';
//引用索引專案需要用到的 firebase 服務
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

//設定專案的 config
const config = {
    apiKey: "AIzaSyAPe0cZe9Hi3PVXvWVw078tGlEjzZDnmVY",
    authDomain: "nuxt-app-577c0.firebaseapp.com",
    databaseURL: "https://nuxt-app-577c0.firebaseio.com",
    projectId: "nuxt-app-577c0",
    storageBucket: "nuxt-app-577c0.appspot.com",
    messagingSenderId: "655561115159",
    appId: "1:655561115159:web:3beabf1096a214d5493e52"
};
//確認專案是否未初始化
if (firebase.apps.length < 1) {
    //初始化 firebase
    firebase.initializeApp(config);
}
export default (context, inject) => {
    //讓每個 vue 元件可以透過
    // this.$storage 取得 forebase.storage()
    inject('storage', firebase.storage());
	inject('db', firebase.firestore())
}