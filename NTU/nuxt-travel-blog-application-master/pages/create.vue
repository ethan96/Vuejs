<template>
  <div>
      <form>
          <InputGroup label="城市" @onChange="(val)"/>
          <TagInputGroup :defaultValue="tagList"
          @onChange="(val) => (tagList = val)" />
      </form>
      <p>標題: {{ title }}</p>
      <p>城市: {{ city }}</p>
      <p>標題列表: {{ tagList }}</p>
  </div>
</template>
<script>
export default {
  name: "CreatePage",
  data() {
      return {
          title: "title 1",
          city: "",
          tagList: ["日本"]
      }
  }
};
</script>