<template>
  <div class="">Granting access, Please wait...</div>
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

<style scoped></style>
