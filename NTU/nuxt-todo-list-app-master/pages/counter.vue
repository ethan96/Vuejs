<template>
  <div>
    <div class="container">
      <h1>Counter
        <span :class="[ { 'text-red': n > 5}]">{{ n }}</span>
      </h1>
      <!-- TODO: 設計計數器UI -->
      <h4 v-if="n > 5">現在num已經超過5了</h4>
      <table>
        <tbody>
          <tr>
            <td>
              <button @click="add">+</button>
            </td>
            <td>
              <h1>{{ n }}</h1>
            </td>
            <td>
              <button @click="sub">-</button>
            </td>
          </tr>
          <tr v-if="n > 0">
            <td colspan="3"><button @click="zero">Zero</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "counterPage",
  data() {
    return {
      //這個vue元件有哪些資料
      n: 5
    }
  },
  methods: {
    //這個vue元件可用的方法(函數,功能)
    add() {
      //如果要在vue元件內取得元件的資料，要加上this(this 就是整個vue元件)
      //console.log(this.n);

      //
      if (this.n >= 10)
        return;
      this.n += 1;
    },
    sub() {
      if (this.n > 0)
        this.n -= 1;//如果已經是零就不用再減少
    },
    zero() {
      this.n = 0;
    }
  }
};
</script>