import Vue from 'vue';

console.log('現在開始執行 author 套件初始化');
const author = {
    name: "Andy",
    email: "andy@aschool.com",
    phone: "0988-123-456"
}

export default (context, inject) => {
    //讓每個 vue 元件都可以使用 this.$author 取得作者資訊
    inject("author", author);
    inject("getAuthorInfo", (args) => {
        return `Hi ${args}, 我是${author.name}`;
    })
    //inject 可以注入屬性，或是函數
}

// const authorVue = {
//     install: function(Vue, options) {
//         console.log('Vue 開始安裝 authorVue', options);
//         Vue.prototype.author = author;
//         Vue.prototype.getAuthorInfo = function(args) {
//             return `Hi ${args}, 我是${author.name}`;
//         }
//     }
// }

//Vue.use(authorVue, {})