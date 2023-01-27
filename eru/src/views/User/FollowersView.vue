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
          :profileImage="theUserDetails.user.avatar"
          :alreadyFollowedByThatUser="
            theUserDetails.user.is_following_current_screeler
          "
        />
      </div>
      <!--/ the current user we are on their profile -->

      <div v-if="followersList" class="space-y-3 pb-28">
        <followListingCard
          v-for="follower in followersList"
          :userId="follower._id"
          :key="follower._id"
          :name="follower.name"
          :userName="follower.username"
          :profileImage="follower.avatar"
          :alreadyFollow="follower.is_followed_by_current_screeler"
          :alreadyFollowedByThatUser="follower.is_following_current_screeler"
          :theProfileWeOnUserName="
            theUserDetails ? theUserDetails.user.username : null
          "
          :loading="false"
        />
      </div>
      <div v-else class="space-y-3 pb-28">
        <followListingCard v-for="n in 6" :key="n" :loading="true" />
      </div>
      <!-- when the user doesn't have any followers yet -->
      <div v-if="followersList">
        <div
          v-if="theUserDetails && followersList.length == 0"
          class="text-center mx-auto px-32 text-base font-medium dark:text-gray-100 text-grayLightMode-400"
        >
          It appears @{{ theUserDetails.user.username }}
          doesn't have any followers yet!
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
  name: "FollowersView",
  components: { DefaultLayout, followListingCard, followersFollowingTab },
  data() {
    return {
      followersList: null, //all this user's followers comming from the backend
      theUserDetails: null, // the user we are currently on their profile
    };
  },
  mounted() {
    this.getFollowersList();
    this.getDetailsForThisUser(this.$route.params.username);
  },
  methods: {
    // the the followers list from action modules of user
    async getFollowersList() {
      console.log(this.$route.params.username);
      let responseFollowerList = await this.$store.dispatch(
        "user/getUsersFollowers",
        {
          _vm: this,
          userName: this.$route.params.username,
        }
      );
      this.followersList = responseFollowerList.data;
      console.log("here are this user's followers => ", this.followersList);
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
