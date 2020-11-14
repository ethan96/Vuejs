<template>
  <div class="form-group">
    <label for="">輸入提示</label>
    <input type="text" class="form-control" />
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    label: {},
    defaultValue: {},
    type: {
      default: 'text'
    },
    placeholder: {
      default: "預設提示"
    },
    required: {
      default: false
    }
  },
  data() {
    return {
      inputText: "",
    };
  },
};
</script>