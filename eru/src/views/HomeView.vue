<template>
  <!-- default layout for dashbord -->
  <DefaultLayout>
    <!-- post screel -->
    <createScreelCard />
    <!--/ post screel -->
    <!-- card post  -->
    <div class="mt-4 space-y-4">
      <cardPost v-for="n in 20" :key="n" />
    </div>
    <!--/ card post  -->
  </DefaultLayout>
  <!-- default layout dashbord-->
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/Layout/DefaultLayout";
import createScreelCard from "@/components/modules/cards/createScreelCard.vue";
import cardPost from "@/components/modules/cards/cardPost.vue";

export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    createScreelCard,
    cardPost,
  },
};
</script>
