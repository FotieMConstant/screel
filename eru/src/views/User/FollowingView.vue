<template>
  <!-- default layout -->
  <DefaultLayout>
    <div class="h-screen overflow-y-scroll __hideScroller pt-6">
      <!-- the current user we are on their profile -->
      <div v-if="theUserDetails" class="mb-3">
        <followersFollowingTab
          :name="theUserDetails.user.name"
          :userName="theUserDetails.user.username"
          :userId="theUserDetails.user._id"
          :profileImage="
            theUserDetails.user.profile_pic ?? theUserDetails.user.avatar
          "
          :alreadyFollowedByThatUser="
            theUserDetails.user.is_following_current_screeler
          "
        />
      </div>
      <!--/ the current user we are on their profile -->

      <div v-if="followingsList" class="space-y-3 pb-28">
        <followListingCard
          v-for="following in followingsList"
          :userId="following._id"
          :key="following._id"
          :name="following.name"
          :userName="following.username"
          :profileImage="following.profile_pic ?? following.avatar"
          :alreadyFollow="following.is_followed_by_current_screeler"
          :alreadyFollowedByThatUser="following.is_following_current_screeler"
          :loading="false"
        />
      </div>
      <div v-else class="space-y-3 pb-28">
        <followListingCard v-for="n in 6" :key="n" :loading="true" />
      </div>
      <div v-if="followingsList">
        <!-- when the user isn't following anyone yet -->
        <div
          v-if="theUserDetails && followingsList.length == 0"
          class="text-center mx-auto px-32 text-base font-medium dark:text-gray-100 text-grayLightMode-400"
        >
          Apparently @{{ theUserDetails.user.username }}
          isn't following anyone yet!
        </div>
      </div>
    </div>
  </DefaultLayout>
  <!--/ default layout-->
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/Layout/DefaultLayout";
import followListingCard from "@/components/modules/cards/followListingCard";
import followersFollowingTab from "@/components/global/followersFollowingTab";

export default {
  name: "FollowingView",
  components: { DefaultLayout, followListingCard, followersFollowingTab },
  data() {
    return {
      followingsList: null, //all this user's followers comming from the backend
      theUserDetails: null, // the user we are currently on their profile
    };
  },
  mounted() {
    this.getFollowingsList();
    this.getDetailsForThisUser(this.$route.params.username);
  },
  methods: {
    // the the followers list from action modules of user
    async getFollowingsList() {
      console.log(this.$route.params.username);
      let responseFollowingsList = await this.$store.dispatch(
        "user/getUsersFollowerings",
        {
          _vm: this,
          userName: this.$route.params.username,
        }
      );
      this.followingsList = responseFollowingsList.data;
      console.log("here are this user's followers => ", this.followingsList);
    },
    // get the user we are currently viewing his followers list
    async getDetailsForThisUser(userName) {
      let responseUserData = await this.$store.dispatch(
        "user/getSpecificUserAction",
        {
          _vm: this,
          data: userName,
        }
      );
      console.log("this UserData => ", responseUserData);
      this.theUserDetails = responseUserData; //setting `theUser` we wanna view their profile
    },
  },
};
</script>

<style></style>
