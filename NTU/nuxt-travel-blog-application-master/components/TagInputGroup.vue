<template>
  <div>
    <label for="tagInput">
      <span v-for="tag in tagList" :key="tag">#{{ tag }}</span>
      <input @change="addTag" v-model="newTag" id="tagInput" type="text"/>
    </label>
    {{ tagList }}
  </div>
</template>
<script>
export default {
  name: "TagInputGroup",
  data() {
    return {
      tagList: [],
      newTag: ""
    }
  },
  methods: {
    addTag() {
      this.tagList.push(this.newTag);
      this.newTag = "";
    }
  },
}
</script>
<style scoped>
label {
  border: 1px solid black;
  background: #9933ff;
  display: flex;
  padding: 8px;
  border-radius: 5px;
  overflow: hidden;
}
input {
  background: #ff0000;
}
input:focus {
  outline: none;
}
span {
  background: tomato;
  color: white;
  display: inline-block;
  padding: 0px 5px;
  margin-right: 5px;
}
</style>