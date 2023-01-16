<template>
  <div class="">
    <!-- top banner -->
    <BannerInformation
      localKey="infoBeta"
      title="Screel beta:"
      text="Expect bugs, we're nerding and geeking out to fix them. Thanks for your patience!"
    />
    <!-- /top banner -->
    <LoginAuth class="absolute inset-0 m-auto z-0" />
    <FooterAuth class="absolute bottom-0 m-auto z-0 p-5" />
  </div>
</template>

<script>
import LoginAuth from "@/components/global/auth/LoginAuth.vue";
import FooterAuth from "@/components/global/auth/FooterAuth.vue";
import BannerInformation from "@/components/global/BannerInformation.vue";
export default {
  name: "LoginView",
  components: { LoginAuth, FooterAuth, BannerInformation },
};
</script>

<style scoped></style>
