<template>
  <div
    class="cursor-progress w-full dark:bg-gray-800 dark:text-gray-100 text-grayLightMode-400 bg-grayLightMode-100 p-1 rounded-curl"
  >
    <div class="animate-pulse w-full flex justify-between space-x-1">
      <div class="flex space-x-2 my-auto">
        <div
          class="rounded-full dark:bg-gray-600 bg-grayLightMode-200 h-10 w-10"
        ></div>
        <div class="space-y-2">
          <div
            class="h-2 w-20 dark:bg-gray-600 bg-grayLightMode-200 rounded"
          ></div>
          <div
            class="h-2 w-16 dark:bg-gray-600 bg-grayLightMode-200 rounded"
          ></div>
        </div>
      </div>
      <div
        class="h-6 w-16 dark:bg-gray-600 bg-grayLightMode-200 rounded-curl"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "peopleGlobeCardLoading",
  props: {},
};
</script>
