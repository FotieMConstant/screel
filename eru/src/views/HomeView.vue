<template>
  <div class="home px-5">
    <div class="min-h-screen flex flex-col h-screen">
      <!-- main container -->
      <div class="flex-1 flex flex-row overflow-y-hidden">
        <div class="w-3/12 overflow-y-auto">Sidebar</div>
        <main class="w-6/12 h-screen py-20 mt-16 overflow-y-scroll">
          <!-- post screel -->
          <postScreel />
          <!--/ post screel -->
          <!-- card post  -->
          <div class="mt-4 space-y-4">
            <cardPost v-for="n in 20" :key="n" />
          </div>
          <!--/ card post  -->
        </main>
        <aside class="w-3/12 overflow-y-auto">Right Sidebar</aside>
      </div>
      <!-- end main container -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import postScreel from "@/components/modules/cards/createScreel.vue";
import cardPost from "@/components/modules/cards/cardPost.vue";

export default {
  name: "HomeView",
  components: {
    postScreel,
    cardPost,
  },
};
</script>
