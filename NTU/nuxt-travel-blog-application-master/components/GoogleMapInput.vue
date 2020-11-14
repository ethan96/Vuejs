<template>
  <div>
    <label for="地標"></label>
    <input ref="locationInput" type="text" class="form-control" />
    <div ref="map" class="map">

    </div>
  </div>
</template>
<style scoped>
  .map {
    width: 100%;
    height: 300px;
  }
</style>
<script>
import mapStyles from "@/Shared/mapStyles";
export default {
  name: "googleMapInput",
  //props: ['value'],
  props: {
    value: {},
    editable: {
      default: true
    }
  },
  data() {
    return {
      autoComplete: null,
      map: null,
      lat: 25.0182079,
      lng: 121.543093,
      marker: null
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

    if (vm.value) {
      vm.lat = vm.value.lat;
      vm.lng = vm.value.lng;
    }

    //取得畫面上ref是map的元素
    const mapDiv = vm.$refs.map;
    const map = new google.maps.Map(mapDiv, {
      center: {
        lat: vm.lat,
        lng: vm.lng
      },
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      styles: mapStyles
    });
    
    vm.map = map;
    vm.renderMarker();
  },
  methods: {
    placeChanged() {
      const vm = this;
      const place = this.autoComplete.getPlace();
      console.log(place);
      const location = place.geometry.location;
      //先取得緯度和經度
      const lat = location.lat(), lng = location.lng();
      console.log("座標為:", lat, lng);
      //移動地圖至指定座標
      vm.map.panTo({
        lat: lat,
        lng: lng
      });

      if (vm.marker) {
        vm.marker.setMap(null);
      }

      //重設地圖縮放率
      vm.map.setZoom(15);
      vm.lat = map.lat;
      vm.lng = map.lng;
      vm.renderMarker();
      //通知上層元件
      vm.$emit("locationChanged"), {
        lat: vm.lat,
        lng: vm.lng
      };
    },
    renderMarker() {
      //地標圖示
      const marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        map: this.map
      });
      console.log(marker);
      this.marker = marker;
    }
  }
}
</script>