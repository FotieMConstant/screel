<template>
  <!-- default layout for dashbord -->
  <DefaultLayout>
    <div class="h-screen overflow-y-scroll __hideScroller">
      <!-- user profile banner -->
      <UserBannerProfile />
      <!--/ user profile banner -->
      <!-- switch tab -->
      <div class="flex font-bold mt-6 mb-4 space-x-20">
        <router-link
          :to="{ name: 'ProfileView', params: { username: 'FotieMConstant' } }"
          class="relative"
        >
          <div
            :class="
              whichRouteWeOn() === 'ProfileView'
                ? `__activeTab text-blue-accent`
                : `dark:text-gray-100 text-gray-400`
            "
            class="cursor-pointer select-none"
          >
            Screels
          </div>
        </router-link>
        <router-link
          :to="{
            name: 'UserEventsView',
            params: { username: 'FotieMConstant' },
          }"
          class="relative"
        >
          <div
            :class="
              whichRouteWeOn() === 'UserEventsView'
                ? `__activeTab text-blue-accent`
                : `dark:text-gray-100 text-gray-400`
            "
            class="cursor-pointer select-none"
          >
            Events
          </div>
        </router-link>
      </div>
      <!--/ switch tab -->

      <!-- body of tabs -->
      <!-- only how this tab if the user is on the ProfileView route -->
      <div v-if="whichRouteWeOn() === 'ProfileView'" class="mt-4 space-y-4">
        <cardPost v-for="n in 20" :key="n" />
      </div>
      <!-- where we will plot our views -->
      <router-view />
      <!--/ body of tabs -->
    </div>
  </DefaultLayout>
  <!--/ default layout dashbord-->
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/Layout/DefaultLayout";
import UserBannerProfile from "@/components/global/UserBannerProfile.vue";
import cardPost from "@/components/modules/cards/cardPost.vue";

export default {
  name: "ProfileView",
  components: {
    DefaultLayout,
    UserBannerProfile,
    cardPost,
  },
  mounted() {
    console.log(this.$route.params);

    this.$store.dispatch("user/getSpecificUserAction", {
      _vm: this,
      data: this.$route.params.username,
    });
  },
  methods: {
    // returns information about the route
    whichRouteWeOn() {
      return this.$route.name;
    },
  },
};
</script>

<style>
.__activeTab::after {
  content: "";
  width: 36px;
  height: 3px;
  left: 0px;
  top: 24px;
  @apply bg-blue-accent absolute rounded-curl;
}
</style>
