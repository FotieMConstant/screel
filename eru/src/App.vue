<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="dark:bg-gray-900 h-screen">
      <!-- <AppBar /> -->
      <!-- <LocalLang /> -->
      <!-- main view -->
      <div>
        <router-view />
        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>
      </div>
      <!--/ main view -->

      <!--Notification Permission popup-->
      <transition name="fade">
        <NotificationPopupCard
          v-if="showNotifPopup"
          @approved="requestNotificationPermission"
          @denied="requestNotificationPermission"
        />
      </transition>
      <!-- End Notification Permission popup -->

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
                  A new software version is available for download. ―
                  <span class="text-xs font-medium text-blue-light"
                    >You will be signed out!</span
                  >
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
  </div>
</template>

<script>
// import LocalLang from "@/components/LocalLang.vue";
// import AppBar from "@/components/global/AppBar.vue";

import NotificationPopupCard from "@/components/modules/cards/notificationPopupCard.vue";
export default {
  components: {
    // LocalLang,
    // AppBar,
    NotificationPopupCard,
  },
  data() {
    return {
      isDark: this.$store.getters.getIsDark,
      registration: null,
      updateExists: false, //if there is an update or not
      showNotifPopup: false,
    };
  },
  watch: {
    // whenever isDark changes, this function will run
    "$store.state.isDark": function () {
      this.isDark = this.$store.state.isDark;
      console.log(this.$store.state.isDark);
    },
  },
  mounted() {
    // call finish function component has been mounted
    this.$Progress.finish();
  },
  created() {
    // handler for top progress bar
    this.progressBarHandler();

    // for the service workers
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

    // window.Echo.private("testchannel").listen(".UserEvent", (e) => {
    //   console.log("test successful ", e);
    // });

    // if notification permission is not granted show request popup
    if ("Notification" in window && Notification.permission == "default") {
      //Show the notification permission popup

      setTimeout(() => {
        this.showNotifPopup = true;
      }, 3000);
    }

    if (this.$store.getters["authentication/getCurrentUser"]) {
      window.Echo.channel("testchannel").listen(".UserEvent", (e) => {
        console.log("test successful ", e);
        const audio = new Audio("/audio/notification-sound.mp3");
        audio.play();
        let notification = new Notification("New Screel", {
          body: e.title,
          icon: "https://pusher.com/static_logos/320x320.png", // optional image url
        });

        // new Audio("/audio/notification-sound.mp3").play();
        // link to page on clicking the notification
        notification.onclick = () => {
          window.open(window.location.href);
        };
      });
    }
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

      // logout user after updating app `if and only if user is logged in already`
      if (this.$store.getters["authentication/getCurrentUser"]) {
        this.$store.dispatch("authentication/logMeOut", this);
      }
    },
    // the function that handles the progress top bar
    progressBarHandler() {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start();
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress;
          // parse meta tags
          this.$Progress.parseMeta(meta);
        }
        //  start the progress bar
        this.$Progress.start();
        //  continue to next page
        next();
      });
      //  hook the progress bar to finish after we've finished moving router-view
      // eslint-disable-next-line no-unused-vars
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
        this.$Progress.finish();
      });
    },

    //Method to request permissions to display notifications
    requestNotificationPermission() {
      Notification.requestPermission((permission) => {
        console.log("permission ==>> ", permission);
        this.showNotifPopup = false;
      });
    },
  },
};
</script>
<style>
@font-face {
  font-family: "Amin";
  src: local("Amin"), url(./fonts/Amin-Regular.ttf) format("truetype");
}
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
.__hideScroller::-webkit-scrollbar {
  display: none;
}
.__moon {
  width: 180px;
  height: 180px;
  border-radius: 100px;
  background-image: -ms-radial-gradient(
    10px 95px,
    10px 9px,
    transparent 110px,
    rgb(150, 150, 150) 112px
  );
  background-image: -webkit-radial-gradient(
    10px 95px,
    10px 9px,
    transparent 110px,
    rgb(150, 150, 150) 112px
  );
  background-image: -moz-radial-gradient(
    10px 95px,
    10px 9px,
    transparent 110px,
    rgb(150, 150, 150) 112px
  );
  background-image: -o-radial-gradient(
    10px 95px,
    10px 9px,
    transparent 110px,
    rgb(150, 150, 150) 112px
  );
}
.__logo {
  font-family: "Amin", Helvetica, Arial;
}
/* for bg bluring */
.__headerBgBlur {
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
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
