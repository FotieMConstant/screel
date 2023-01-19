<template>
  <div
    class="cursor-progress dark:bg-gray-800 dark:text-gray-100 text-grayLightMode-400 bg-grayLightMode-100 rounded-curl"
  >
    <div class="animate-pulse space-y-4">
      <div class="relative">
        <!-- cover image -->
        <div
          class="dark:bg-gray-600 bg-grayLightMode-200 bg-cover bg-center w-full h-44 rounded-t-curl relative"
        ></div>
        <!--/ cover image -->
        <div class="flex absolute -bottom-10 left-9">
          <!-- profile image -->
          <div
            class="border-4 dark:border-gray-800 border-grayLightMode-100 rounded-full dark:bg-gray-600 bg-grayLightMode-200 h-20 w-20"
          ></div>
          <!--/ profile image -->
        </div>
      </div>
      <div class="relative h-10 w-full">
        <div class="absolute inset-x-28 top-0 right-0 px-5">
          <div class="flex justify-between">
            <div class="space-y-3">
              <div
                class="h-2 w-44 dark:bg-gray-600 bg-grayLightMode-200 rounded"
              ></div>
              <div
                class="h-2 w-36 dark:bg-gray-600 bg-grayLightMode-200 rounded"
              ></div>
            </div>
            <div class="space-x-4 flex">
              <div
                class="h-7 w-20 dark:bg-gray-600 bg-grayLightMode-200 rounded-curl"
              ></div>
              <div
                class="h-7 w-20 dark:bg-gray-600 bg-grayLightMode-200 rounded-curl"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-3 px-5 pb-10">
        <div class="h-2 dark:bg-gray-600 bg-grayLightMode-200 rounded"></div>
        <div class="h-2 dark:bg-gray-600 bg-grayLightMode-200 rounded"></div>
        <div class="h-2 dark:bg-gray-600 bg-grayLightMode-200 rounded"></div>
        <div
          class="h-2 w-60 dark:bg-gray-600 bg-grayLightMode-200 rounded"
        ></div>
        <div class="pt-4 space-x-3 flex">
          <div
            class="h-2 w-28 dark:bg-gray-600 bg-grayLightMode-200 rounded"
          ></div>
          <div
            class="h-2 w-32 dark:bg-gray-600 bg-grayLightMode-200 rounded"
          ></div>
        </div>
        <div
          class="h-2 w-40 dark:bg-gray-600 bg-grayLightMode-200 rounded"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserBannerProfileLoader",
  props: {},
};
</script>
