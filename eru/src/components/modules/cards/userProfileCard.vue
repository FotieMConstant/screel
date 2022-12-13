<template>
  <div
    class="dark:bg-gray-800 dark:text-gray-50 text-sky-white bg-grayLightMode-100 rounded-curl"
  >
    <div
      style="background-size: cover"
      :style="{
        'background-image':
          'linear-gradient( to right, rgba(0,0,0, 0.55), #161B22 ), url(' +
          coverImage +
          ')',
      }"
      class="w-full h-28 rounded-t-curl"
    ></div>
    <div class="p-5 -mt-16 text-center">
      <div class="space-y-1">
        <div class="relative w-20 mx-auto">
          <img class="h-20 rounded-full" :src="profileImage" alt="" />
          <div
            v-show="isOnline"
            class="w-4 h-4 bg-blue-accent rounded-full my-auto border-2 absolute right-1 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          ></div>
        </div>
        <div class="">
          <div class="dark:text-gray-100 text-grayLightMode-400 font-bold">
            {{ name }}
          </div>
          <div class="text-gray-300 text-sm">{{ userName }}</div>
        </div>
        <div class="flex space-x-1 justify-center">
          <basicChip class="mt-1 text-xs" text="SS" />
          <basicChip class="mt-1 text-xs" text="OW" />
        </div>
      </div>
      <div class="my-2.5 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit..dolor sit amet,
        co... ⚡️
      </div>
      <div
        class="border-y dark:border-gray-700 border-grayLightMode-200 flex justify-between px-10 py-3"
      >
        <div class="">
          <div class="dark:text-gray-100 font-bold text-grayLightMode-400">
            1.4k
          </div>
          <div class="dark:text-gray-300 font-medium text-grayLightMode-300">
            followers
          </div>
        </div>
        <div
          class="border-r dark:border-gray-700 border-grayLightMode-200"
        ></div>
        <div class="">
          <div class="dark:text-gray-100 font-bold text-grayLightMode-400">
            3.4k
          </div>
          <div class="dark:text-gray-300 font-medium text-grayLightMode-300">
            following
          </div>
        </div>
      </div>
      <div class="text-center font-bold text-blue-accent mt-4 cursor-pointer">
        My Profile
      </div>
    </div>
  </div>
</template>

<script>
import basicChip from "@/components/modules/chips/basicChip.vue";

export default {
  name: "userProfileCard",
  components: { basicChip },
  props: {
    coverImage: {
      type: String,
      default: "https://images.unsplash.com/photo-1520564816385-4f9d711941aa",
    },
    profileImage: {
      type: String,
      default: "https://i.pravatar.cc/300",
    },
    name: {
      type: String,
      default: "null",
    },
    userName: {
      type: String,
      default: "@null",
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>
