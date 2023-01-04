<template>
  <!-- default layout for dashbord -->
  <DefaultLayout>
    <!-- user profile view -->
    any user details will go there when passed in their username in param link
    <!--/ user profile view -->
  </DefaultLayout>
  <!-- default layout dashbord-->
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/Layout/DefaultLayout";

export default {
  name: "ProfileView",
  components: {
    DefaultLayout,
  },
};
</script>
