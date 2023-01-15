<template>
  <!-- default layout for dashbord -->
  <DefaultLayout>
    <!-- post screel -->
    <createScreelCard />
    <!--/ post screel -->
    <!-- divider -->
    <div class="text-center">
      <span
        class="inline-block w-1 h-1 rounded-full dark:bg-blue-800 bg-blue-100 ml-1"
      ></span>
      <span
        class="inline-block w-3 h-1 rounded-full dark:bg-blue-700 bg-blue-200 ml-1"
      ></span>
      <span
        class="inline-block w-20 h-1 rounded-full dark:bg-blue-600 bg-blue-300 ml-1"
      ></span>
      <span
        class="inline-block w-3 h-1 rounded-full dark:bg-blue-700 bg-blue-200 ml-1"
      ></span>
      <span
        class="inline-block w-1 h-1 rounded-full dark:bg-blue-800 bg-blue-100 ml-1"
      ></span>
    </div>
    <!--/ divider -->
    <!-- card post  -->
    <div class="mt-1.5 space-y-4">
      <carPostLoading v-for="n in 2" :key="n" />
    </div>
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
import carPostLoading from "@/components/modules/cards/carPostLoading.vue";
export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    createScreelCard,
    cardPost,
    carPostLoading,
  },
};
</script>
