//這個倉庫有哪些狀態(state必須回傳物件的函數)
// export const state = () => {
//     return {
//         //狀態
//         numX: 12
//     }
// };
//和下面一樣效果

export const state = () => ({
    numX: 12
});

//能夠更新 state 的函數 Mitations: 一系列用來更新 state 的函數
export const mutations = {
    addX(state) {
        //可把numX+1
        state.numX += 1;
    }
};
