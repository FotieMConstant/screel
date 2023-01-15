<template>
  <div
    class="cursor-progress dark:bg-gray-800 dark:text-gray-100 text-grayLightMode-400 bg-grayLightMode-100 p-5 rounded-curl"
  >
    <div class="animate-pulse flex space-x-4">
      <div
        class="rounded-full dark:bg-gray-600 bg-grayLightMode-200 h-10 w-10"
      ></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="flex justify-between">
          <div
            class="h-2 w-44 dark:bg-gray-600 bg-grayLightMode-200 rounded"
          ></div>
          <div
            class="h-2 w-20 dark:bg-gray-600 bg-grayLightMode-200 rounded"
          ></div>
        </div>
        <div class="space-y-3">
          <div class="h-2 dark:bg-gray-600 bg-grayLightMode-200 rounded"></div>
          <div class="h-2 dark:bg-gray-600 bg-grayLightMode-200 rounded"></div>
          <div
            class="h-2 w-60 dark:bg-gray-600 bg-grayLightMode-200 rounded"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "carPostLoading",
  props: {},
};
</script>
