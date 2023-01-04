<template>
  <div class="dark:bg-gray-900 h-screen">
    <!-- <AppBar /> -->
    <!-- <LocalLang /> -->
    <!-- main view -->
    <div>
      <router-view />
    </div>
    <!--/ main view -->
    <!-- software update notifications -->
    <transition name="slide-fade">
      <div v-show="updateExists" class="absolute bottom-6 right-6 z-10">
        <div
          class="bg-white dark:bg-gray-800 dark:text-gray-100 w-80 border dark:border-gray-600 rounded-lg shadow-lg"
        >
          <div class="flex space-x-5 p-5">
            <div>🚀</div>
            <div class="text-left">
              <div class="font-bold text-lg">Update available!</div>
              <div class="text-sm">
                A new software version is available for download.
              </div>
              <div class="flex pt-4 space-x-2">
                <button
                  class="w-full rounded-curl inline-flex font-bold justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-light text-white text-sm hover:bg-blue-accent"
                  @click="refreshApp"
                >
                  Update
                </button>
                <button
                  class="w-full rounded-curl dark:bg-gray-700 dark:text-gray-100 border inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-grayLightMode-100 hover:bg-grayLightMode-200 dark:border-gray-700 text-sm font-bold text-gray-700"
                  @click="updateExists = false"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- / software update notifications -->
  </div>
</template>

<script>
// import LocalLang from "@/components/LocalLang.vue";
// import AppBar from "@/components/global/AppBar.vue";
export default {
  components: {
    // LocalLang,
    // AppBar,
  },
  data() {
    return {
      registration: null,
      updateExists: false, //if there is an update or not
    };
  },
  created() {
    document.addEventListener("swUpdated", this.updateAvailable, {
      once: true,
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      // We'll also need to add 'refreshing' to our data originally set to false.
      if (this.refreshing) return;
      this.refreshing = true;
      // Here the actual reload of the page occurs
      window.location.reload();
    });
  },
  methods: {
    //updateAvailable function
    updateAvailable(event) {
      this.registration = event.detail;
      this.updateExists = true;
      console.log(this.registration);
    },
    // function to reset service workers
    refreshApp() {
      this.updateExists = false;
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!this.registration || !this.registration.waiting) return;
      // Send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
    },
  },
};
</script>
<style>
body {
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
