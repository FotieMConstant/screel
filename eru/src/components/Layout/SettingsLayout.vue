<template>
  <AppBar />
  <div class="home px-5">
    <div class="min-h-screen flex flex-col h-screen">
      <!-- main container -->
      <div class="flex-1 flex flex-row space-x-4 overflow-y-hidden">
        <div class="w-3/12 overflow-y-auto pt-6 mt-16">
          <UserSettingsMenuLeft />
        </div>
        <main
          class="w-6/12 h-screen pb-16 pt-6 mt-16 overflow-y-scroll __hideScroller no-scrollbar"
        >
          <!-- templete passed as slot  -->
          <slot />
          <!--/ templete passed as slot  -->
        </main>
        <aside class="w-3/12 overflow-y-auto pt-6 mt-16 no-scrollbar">
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
import smallAdsCard from "@/components/modules/cards/smallAdsCard.vue";
import AppBar from "@/components/global/AppBar.vue";
import peopleAcrossTheGlobe from "@/components/global/peopleAcrossTheGlobe.vue";
import UserSettingsMenuLeft from "@/components/global/UserSettingsMenuLeft.vue";

export default {
  name: "SettingsLayout",
  components: {
    smallAdsCard,
    AppBar,
    peopleAcrossTheGlobe,
    UserSettingsMenuLeft,
  },
};
</script>
