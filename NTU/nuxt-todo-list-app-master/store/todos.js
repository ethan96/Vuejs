//這個倉庫有哪些狀態(state必須回傳物件的函數)
// export const state = () => {
//     return {
//         //狀態
//         numX: 12
//     }
// };
//和下面一樣效果

export const state = () => ({
    numX: 12,
    todoList: []
});

//能夠更新 state 的函數 Mitations: 一系列用來更新 state 的函數
export const mutations = {
    addX(state) {
        //可把numX+1
        state.numX += 1;
    },
    addItemToList(state, todo) {
        //第二個參數可以傳資料進來
        state.todoList.push(todo);
        //把送來的新代辦事項加入至代辦項目內
    },
    removeItemFromList(state, idx) {
        state.todoList.splice(idx, 1);
    },
    initTodoList(state, todoList) {
        state.todoList = todoList;
    }
};

//getters 一系列用來取得 state 的函數
export const getters = {
    //這是一個用來取得numX的函數
    getX(state) {
        return state.numX;
    },
    getTodoList(state) {
        return state.todoList;
    }
};