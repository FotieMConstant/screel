<template>
  <AppBar />
  <div class="home px-5">
    <div class="min-h-screen flex flex-col h-screen">
      <!-- main container -->
      <div class="flex-1 flex flex-row space-x-4 overflow-y-hidden">
        <div class="w-3/12 overflow-y-auto pt-6 mt-16">
          <userProfileCard
            :name="currentUser.name"
            :userName="currentUser.username"
            :biography="currentUser.biography"
            :profileImage="currentUser.profile_pic ?? currentUser.avatar"
            :coverImage="
              currentUser.cover_pic ??
              'https://images.unsplash.com/photo-1506765515384-028b60a970df'
            "
            :followingsCount="currentUser.followings_count"
            :followersCount="currentUser.followers_count"
          />
        </div>
        <main class="w-6/12 pb-16 mt-16">
          <!-- templete passed as slot  -->
          <!-- must spacify `h-screen overflow-y-scroll __hideScroller` in the root component when calling this layout -->
          <slot />
          <!--/ templete passed as slot  -->
        </main>
        <aside class="w-3/12 pt-6 mt-16 flex flex-col aside-right h-screen">
          <div class="mb-4">
            <smallAdsCard />
          </div>

          <div style="height: calc(100vh - 320px)">
            <peopleAcrossTheGlobe />
          </div>
        </aside>
      </div>
      <!-- end main container -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import peopleAcrossTheGlobe from "@/components/global/peopleAcrossTheGlobe.vue";
import smallAdsCard from "@/components/modules/cards/smallAdsCard.vue";
import userProfileCard from "@/components/modules/cards/userProfileCard.vue";
import AppBar from "@/components/global/AppBar.vue";
import { mapGetters } from "vuex";

export default {
  name: "DefaultLayout",
  components: {
    peopleAcrossTheGlobe,
    smallAdsCard,
    userProfileCard,
    AppBar,
  },
  data() {
    return {};
  },
  computed: {
    // mapping to get current logged in user from store auth module
    ...mapGetters({ currentUser: ["authentication/getCurrentUser"] }),
  },
  mounted() {
    // window.Echo.channel("user-channel").listen(".UserEvent", (data) => {
    //   console.log("notif data ", data);
    // });
  },
};
</script>

<style>
.aside-right {
  height: calc(100vh - 88px);
}
</style>
