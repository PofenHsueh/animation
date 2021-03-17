<template>
  <v-app>
    <HelloWorld></HelloWorld>
    <!-- <div>
      <v-btn @click="loading = true"></v-btn>
      <Loading
        :active.sync="loading"
        :is-full-page="fullPage"
        :loader="'dots'"
        :opacity="10"
        :background-color="'#001f52'"
        :color="'#ff3e3e'"
      ></Loading>
    </div> -->
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      loading: false,
      fullPage: true
    };
  }
};
</script>
