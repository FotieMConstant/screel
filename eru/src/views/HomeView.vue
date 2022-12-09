<template>
  <div class="home px-5">
    <div class="min-h-screen flex flex-col h-screen">
      <!-- main container -->
      <div class="flex-1 flex flex-row overflow-y-hidden">
        <div class="w-3/12 overflow-y-auto">Sidebar</div>
        <main class="flex-1 overflow-y-auto">
          <!-- post screel -->
          <postScreel />
          <!--/ post screel -->
        </main>
        <aside class="w-3/12 overflow-y-auto">Right Sidebar</aside>
      </div>
      <!-- end main container -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import postScreel from "@/components/modules/card/postScreel.vue";

export default {
  name: "HomeView",
  components: {
    postScreel,
  },
};
</script>
