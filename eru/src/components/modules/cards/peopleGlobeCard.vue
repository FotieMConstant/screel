<template>
  <div class="dark:bg-gray-800 bg-grayLightMode-100 p-1 rounded-curl">
    <div class="flex justify-between">
      <div class="flex space-x-2">
        <div class="relative">
          <img
            :class="isOnline ? '__blob_pulse' : null"
            class="h-10 rounded-full"
            :src="profileImage"
            alt=""
          />

          <div
            v-show="isOnline"
            class="w-3 h-3 bg-blue-accent rounded-full my-auto border-2 absolute right-0 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          ></div>
        </div>
        <div class="text-left">
          <div class="dark:text-gray-100 text-grayLightMode-400 font-bold">
            {{ name }}
          </div>
          <div class="text-gray-300 text-sm">{{ userName }}</div>
        </div>
      </div>
      <!-- if current user logged in alreadyFollow this user-->
      <button
        @mouseover="hoveredOnFollowing = true"
        @mouseleave="hoveredOnFollowing = false"
        v-if="alreadyFollow"
        class="flex space-x-1 dark:bg-blue-light dark:hover:bg-blue-accent bg-blue-light hover:bg-blue-accent text-sky-white rounded-curl px-2.5 py-1 h-8"
      >
        <svg
          class="my-auto"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.6 8.4C11.3602 8.4 12.8 6.95997 12.8 5.2C12.8 3.44003 11.3602 2 9.6 2C7.83983 2 6.4 3.44003 6.4 5.2C6.4 6.95997 7.83983 8.4 9.6 8.4ZM9.6 10C7.48007 10 3.2 11.0801 3.2 13.2V14.8H16V13.2C16 11.0801 11.7199 10 9.6 10ZM3.2 7.33333V5.2H2.13333V7.33333H0V8.4H2.13333V10.5333H3.2V8.4H5.33333V7.33333H3.2Z"
            fill="currentColor"
          />
        </svg>

        <div class="my-auto font-bold">
          {{ hoveredOnFollowing ? "Unfollow" : "Following" }}
        </div>
      </button>
      <!-- else -->
      <button
        v-else
        class="flex space-x-1 dark:bg-blue-light dark:hover:bg-blue-accent bg-blue-light hover:bg-blue-accent text-sky-white rounded-curl px-2.5 py-1 h-8"
      >
        <svg
          class="my-auto"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.6 8.4C11.3602 8.4 12.8 6.95997 12.8 5.2C12.8 3.44003 11.3602 2 9.6 2C7.83983 2 6.4 3.44003 6.4 5.2C6.4 6.95997 7.83983 8.4 9.6 8.4ZM9.6 10C7.48007 10 3.2 11.0801 3.2 13.2V14.8H16V13.2C16 11.0801 11.7199 10 9.6 10ZM3.2 7.33333V5.2H2.13333V7.33333H0V8.4H2.13333V10.5333H3.2V8.4H5.33333V7.33333H3.2Z"
            fill="currentColor"
          />
        </svg>

        <div class="my-auto font-bold">Follow</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "peopleGlobeCard",
  components: {},
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: "null",
    },
    userName: {
      type: String,
      default: "@null",
    },
    profileImage: {
      type: String,
      default: null,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    alreadyFollow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hoveredOnFollowing: false,
    };
  },
};
</script>
<style scoped>
.__blob_pulse {
  animation: pulse-black 2s infinite;
}
@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(56, 138, 253, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(56, 138, 253, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(56, 138, 253, 0);
  }
}
</style>
