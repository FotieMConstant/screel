<template>
  <div
    class="h-80 w-96 absolute inset-0 m-auto z-0 dark:text-gray-100 text-grayLightMode-400"
  >
    <div><span class="loader"></span></div>
    <div class="font-medium text-xl">
      Initializing quantum tunneling protocol, stand by for quantum
      entanglement-based authentication...
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  components: {},
  mounted: function () {
    const authType = localStorage.getItem("authType");

    console.log("auth type=>", authType);

    console.log("granting access...");
    if (this.$route.query.code) {
      const code = this.$route.query.code;
      console.log("auth code => " + code);
      // once i got the code
      // if the auth type is github
      if (authType == "github") {
        // passing `this` instance for later use in store
        this.$store.dispatch("authentication/githubAuthMeAction", this);
      } else if (authType == "google") {
        // passing `this` instance for later use in store
        this.$store.dispatch("authentication/googleAuthMeAction", this);
      } else if (authType == "twitter") {
        console.log("authentication/twitterAuthMeAction");
      } else {
        console.error("no authType set...");
      }
    } else {
      console.log("no code passed");
    }
  },
};
</script>

<style scoped>
.loader {
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 78px;
  opacity: 0.8;
}
.loader:before {
  content: "{";
  display: inline-block;
  animation: pulse 0.4s alternate infinite ease-in-out;
}
.loader:after {
  content: "}";
  display: inline-block;
  animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
}

@keyframes pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>
