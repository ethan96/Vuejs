<template>
  <div class="form-group">
    <label for="">{{ label }}</label>
    <input @input="onInputChanged" :value="defaultValue" type="text" class="form-control" />
    <!-- <p>inputText: {{ inputText }}</p> -->
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: ['label','defaultValue'],
  data() {
    return {
      //inputText: "",
    };
  },
  methods: {
    onInputChanged(event) {
      //來自 @input
      //onblur 改變值後，離開才觸發
      //const text = this.inputText;
      const text = event.target.value;
      //通知母元件輸入框值改變了
      this.$emit("onChange", text);
    }
  },
  mounted() {
    console.log(this.defaultValue);
  }
};
</script>