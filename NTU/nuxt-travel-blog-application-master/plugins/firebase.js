




import firebase from 'firebase/app';
//引用索引專案需要用到的 firebase 服務
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

//設定專案的 config
const config = {

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