<template>
  <div>
    <label for="地標"></label>
    <input ref="locationInput" type="text" class="form-control" />
  </div>
</template>
<script>
export default {
  name: "googleMapInput",
  data() {
    return {
      autoComplete: null
    }
  },
  mounted() {
    const vm = this;
    console.log("VM:", this.$attrs);
    const input = vm.$refs.locationInput;
    console.log(input);
    const autoComplete = new google.maps.places.Autocomplete(input);
    autoComplete.addListener("place_changed", vm.placeChanged);
    //將 Google 的 autoComplete 元件存放到 Vue 元件
    vm.autoComplete = autoComplete;
  },
  methods: {
    placeChanged() {
      const place = this.autoComplete.getPlace();
      console.log(place);
    }
  }
}
</script>