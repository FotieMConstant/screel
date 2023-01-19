<template>
  <!-- default layout for dashbord -->
  <DefaultLayout>
    <div class="h-screen overflow-y-scroll __hideScroller pt-6">
      <!-- user profile banner -->
      <!-- if theUser object contain data -->
      <UserBannerProfile
        v-if="theUser"
        :name="theUser.user.name"
        :userName="theUser.user.username"
        :profileImage="theUser.user.avatar"
        :joinedDate="theUser.user.created_at"
      />
      <!--/ if theUser object contain data -->
      <!-- else display loader -->
      <UserBannerProfile v-else :loading="true" />
      <!--/ else display loader -->

      <!--/ user profile banner -->
      <!-- switch tab -->
      <!-- only show tab if there's theUser's data -->
      <div v-if="theUser" class="flex font-bold mt-6 mb-4 space-x-20">
        <router-link
          :to="{
            name: 'ProfileView',
            params: { username: theUser.user.username },
          }"
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
            params: { username: theUser.user.username },
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
      <div v-if="whichRouteWeOn() === 'ProfileView'" class="pb-36">
        <div v-if="theUser" class="mt-4 space-y-4">
          <!-- all theUser's screels -->
          <cardPost
            v-for="screel in theUser.screels.data"
            :key="screel._id"
            :profileImage="theUser.user.avatar"
            :name="theUser.user.name"
            :userName="theUser.user.username"
            :content="screel.content"
            :postedDate="screel.created_at"
            :tags="screel.tags"
            :loading="false"
          />
          <!--/ all theUser's screels -->
        </div>
        <div
          v-else
          v-for="n in defaultNumberToFetch"
          :key="n"
          class="mt-4 space-y-4"
        >
          <!-- allFeed contains no data -->
          <cardPost :loading="true" />
          <!--/ allFeed contains no data -->
        </div>
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
  data() {
    return {
      theUser: null, //the user we wanna view their profile `the entire object with screel and other`
      defaultNumberToFetch:
        this.$store.getters["screel/getDefaultNumbOfScreelsToFetch"], //default number of post to be loaded on first page load
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.getUserProfileToView(this.$route.params.username); //getting the username from the param url
  },
  computed() {
    this.getUserProfileToView(this.$route.params.username); //getting the username from the param url
  },
  // catching the route param changes and fetching the user data again
  beforeRouteUpdate(to, from, next) {
    console.log(to.params);
    next();
    this.getUserProfileToView(to.params.username);
  },
  methods: {
    // function to get current user we wanna view their profile
    async getUserProfileToView(userName) {
      let responseProfileData = await this.$store.dispatch(
        "user/getSpecificUserAction",
        {
          _vm: this,
          data: userName,
        }
      );
      console.log("responseProfileData => ", responseProfileData);
      this.theUser = responseProfileData; //setting `theUser` we wanna view their profile
    },
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
