<template>
  <div class="home px-5">
    <div class="min-h-screen flex flex-col h-screen">
      <!-- main container -->
      <div class="flex-1 flex flex-row space-x-4 overflow-y-hidden">
        <div class="w-3/12 overflow-y-auto pt-6 mt-16">
          <userProfileCard name="Arnau Jiménez" userName="@ajmnz" isOnline />
        </div>
        <main class="w-6/12 h-screen pb-16 pt-6 mt-16 overflow-y-scroll">
          <!-- post screel -->
          <createScreelCard />
          <!--/ post screel -->
          <!-- card post  -->
          <div class="mt-4 space-y-4">
            <cardPost v-for="n in 20" :key="n" />
          </div>
          <!--/ card post  -->
        </main>
        <aside class="w-3/12 overflow-y-auto pt-6 mt-16">
          <div class="mb-4">
            <smallAdsCard />
          </div>
          <div>
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
import createScreelCard from "@/components/modules/cards/createScreelCard.vue";
import cardPost from "@/components/modules/cards/cardPost.vue";
import peopleAcrossTheGlobe from "@/components/global/peopleAcrossTheGlobe.vue";
import smallAdsCard from "@/components/modules/cards/smallAdsCard.vue";
import userProfileCard from "@/components/modules/cards/userProfileCard.vue";

export default {
  name: "HomeView",
  components: {
    createScreelCard,
    cardPost,
    peopleAcrossTheGlobe,
    smallAdsCard,
    userProfileCard,
  },
};
</script>
