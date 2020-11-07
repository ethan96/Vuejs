<template>
  <div>
    <label for="tagInput">
      <span v-for="(tag, idx) in tagList" :key="tag">
        #{{ tag }} 
        <button @click="deleteTag(idx)" type="button" class="delete-btn">&times;</button>
      </span>
      <input @change="addTag" v-model="newTag" id="tagInput" type="text" />
    </label>
    {{ tagList }}
  </div>
</template>
<script>
export default {
  name: "TagListInputGroup",
  props: ["defaultValue"],
  methods: {
    addTag() {
      const newTag = this.newTag;
      if (this.tagList.indexOf(newTag) < 0) {
        this.tagList.push(newTag);
      }
      this.newTag = "";
    },
    deleteTag(idx) {
      //從 tag list 內，移除一筆索引直為 idx 的資料
      this.tagList.splice(idx, 1);
    }
  },
  mounted() {
    
  }
};
</script>
<style scoped>
  .delete-btn {
    background: transparent;
    border: none;
    color: white;
    width: 10px;
    font-size: 20px;
    position: relative;
  }
</style>