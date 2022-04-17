<template>
  <div id="app">
    <div v-if="currentUser" id="nav">
      <router-link :to="`/${$i18n.locale}`">Home</router-link> |
      <router-link :to="`/${$i18n.locale}/about`">About</router-link>
    </div>
    <div><router-view /></div>
    <div>
      <!-- footer -->
      <FooterComponent />
      <!--/ footer -->
    </div>
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
  },
  data() {
    return {
      currentUser: null, // the currently logged in user
    };
  },
  beforeCreate() {
    console.log(this.$store.getters.getCurrentUser);
    this.currentUser = this.$store.getters.getCurrentUser;
  },
  mounted() {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
