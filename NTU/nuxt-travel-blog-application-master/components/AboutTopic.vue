<template>
    <div>
      <div class="row mb-5">
        <div :class="['col-md-4', { 'order-md-2': reverse }]">
          <img class="w-100" :src="require(`@//assets/images/${image}`)" :alt="title" /><!--波浪符號 外加 require-->
        </div>
        <div :class="['col-md-8', { 'order-md-1': reverse }]">
          <h3>{{ title ? title : "預設標題" }}</h3><!--如果 title 沒值，就用 default 值-->
          <p>
            
          </p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "AboutTopic",
  props: ["title","image","reverse"],
}
</script>