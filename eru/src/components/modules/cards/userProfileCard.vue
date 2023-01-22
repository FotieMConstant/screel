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
          <!-- user is online -->
          <div
            v-if="isOnline === 'online'"
            class="w-4 h-4 bg-blue-accent rounded-full my-auto border-2 absolute right-1 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          ></div>
          <!-- offline mode -->
          <div
            v-else-if="isOnline === 'offline'"
            class="w-4 h-4 bg-gray-300 rounded-full my-auto border-2 absolute right-1 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          ></div>
          <!-- DND mode -->
          <div
            v-else-if="isOnline === 'dnd'"
            class="w-4 h-4 dark:bg-gray-800 bg-grayLightMode-100 rounded-full my-auto border-2 absolute right-1 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          >
            <svg
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_19358_3571)">
                <path
                  d="M3.51309 1.80689C3.51309 1.16571 3.64231 0.55622 3.87635 0.000366211C1.65294 0.539154 0.00244141 2.54071 0.00244141 4.92747C0.00244141 7.72624 2.27461 9.99841 5.07338 9.99841C7.46014 9.99841 9.4617 8.34792 10.0005 6.12451C9.44463 6.35855 8.83271 6.48776 8.19396 6.48776C5.60973 6.48776 3.51309 4.39112 3.51309 1.80689Z"
                  class="dark:border-gray-800 border-grayLightMode-100"
                  fill="#FFA928"
                />
              </g>
              <defs>
                <clipPath id="clip0_19358_3571">
                  <rect width="10" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div class="">
          <div class="dark:text-gray-100 text-grayLightMode-400 font-bold">
            {{ name }}
          </div>
          <div class="text-gray-300 text-sm">@{{ userName }}</div>
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
            0
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
            0
          </div>
          <div class="dark:text-gray-300 font-medium text-grayLightMode-300">
            following
          </div>
        </div>
      </div>
      <div class="text-center font-bold text-blue-accent mt-4 cursor-pointer">
        <router-link :to="`/user/` + userName"> My Profile</router-link>
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
      default: "null",
    },
    isOnline: {
      type: String,
      default: "dnd",
    },
  },
};
</script>
<style lang="scss" scoped></style>
