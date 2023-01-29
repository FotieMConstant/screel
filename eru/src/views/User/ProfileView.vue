<template>
  <!-- default layout -->
  <DefaultLayout>
    <div class="h-screen overflow-y-scroll __hideScroller pt-6">
      <!-- user profile banner -->
      <!-- if theUser object contain data -->
      <UserBannerProfile
        v-if="userInView"
        :key="userInView.user._id"
        :userId="userInView.user._id"
        :name="userInView.user.name"
        :userName="userInView.user.username"
        :profileImage="userInView.user.avatar"
        :joinedDate="userInView.user.created_at"
        :alreadyFollow="userInView.user.is_followed_by_current_screeler"
        :alreadyFollowedByThatUser="
          userInView.user.is_following_current_screeler
        "
        :followingsCount="userInView.user.followings_count"
        :followersCount="userInView.user.followers_count"
      />
      <!--/ if userInView object contain data -->
      <!-- else display loader -->
      <UserBannerProfile v-else :loading="true" />
      <!--/ else display loader -->

      <!--/ user profile banner -->
      <!-- switch tab -->
      <!-- only show tab if there's userInView's data -->
      <div v-if="userInView" class="flex font-bold mt-6 mb-4 space-x-20">
        <router-link
          :to="{
            name: 'ProfileView',
            params: { username: userInView.user.username },
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
            params: { username: userInView.user.username },
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
        <!-- no screels found -->
        <div v-if="userInView" class="mt-4 space-y-4">
          <div
            v-if="userInView.screels.data.length == 0"
            class="text-center py-3 px-20"
          >
            <div
              class="text-lg font-bold dark:text-grayLightMode-300 text-grayLightMode-400"
            >
              Nada, zip, zilch. No posts here!
            </div>
            <div class="text-sm text-gray-300">
              @{{ userInView.user.username }}'s been too busy coding to post,
              it's eerily quiet here!
            </div>
          </div>
          <!--/ no screels found -->
          <!-- all userInView's screels -->
          <cardPost
            v-else
            v-for="screel in userInView.screels.data"
            :key="screel._id"
            :profileImage="userInView.user.avatar"
            :name="userInView.user.name"
            :userName="userInView.user.username"
            :content="screel.content"
            :postedDate="screel.created_at"
            :tags="screel.tags"
            :loading="false"
          />
          <!--/ all userInView's screels -->
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
  <!--/ default layout-->
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/Layout/DefaultLayout";
import UserBannerProfile from "@/components/global/UserBannerProfile.vue";
import cardPost from "@/components/modules/cards/cardPost.vue";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters({ userInView: ["user/getUserInView"] }),
    // this.getUserProfileToView(this.$route.params.username); //getting the username from the param url
  },

  created() {
    //clear previous userInView object
    this.$store.commit("user/SET_USER_IN_VIEW_PROFILE", null, {
      root: true,
    });
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

      this.$store.commit("user/SET_USER_IN_VIEW_PROFILE", responseProfileData, {
        root: true,
      }); // setting the user whose profile we want to view in the store

      console.log(this.userInView.user);
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
