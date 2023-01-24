<template>
  <AppBar />
  <div class="home px-5">
    <div class="min-h-screen flex flex-col h-screen">
      <!-- main container -->
      <div class="flex-1 flex flex-row space-x-4 overflow-y-hidden">
        <div class="w-3/12 overflow-y-auto pt-6 mt-16">
          <div>We working on adding information here!</div>
        </div>
        <main class="w-6/12 pb-16 mt-16">
          <!-- templete passed as slot  -->
          <!-- must spacify `h-screen overflow-y-scroll __hideScroller` in the root component when calling this layout -->
          <slot />
          <!--/ templete passed as slot  -->
        </main>
        <aside class="w-3/12 overflow-y-auto pt-6 mt-16">
          <div class="mb-4">
            <smallAdsCard />
          </div>
          <div>We working on adding information here!</div>
        </aside>
      </div>
      <!-- end main container -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import smallAdsCard from "@/components/modules/cards/smallAdsCard.vue";

export default {
  name: "NotConnectedLayout",
  components: {
    smallAdsCard,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
