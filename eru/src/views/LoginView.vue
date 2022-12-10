<template>
  <div class="">
    <LoginAuth class="absolute inset-0 m-auto z-0" />
    <FooterAuth class="absolute bottom-0 m-auto z-0 p-5" />
  </div>
</template>

<script>
import LoginAuth from "@/components/global/auth/LoginAuth.vue";
import FooterAuth from "@/components/global/auth/FooterAuth.vue";

export default {
  name: "LoginView",
  components: { LoginAuth, FooterAuth },
};
</script>

<style scoped></style>
