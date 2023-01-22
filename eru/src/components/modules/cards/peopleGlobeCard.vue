<template>
  <peopleGlobeCardLoading v-if="loading" />
  <div v-else class="dark:bg-gray-800 bg-grayLightMode-100 p-1 rounded-curl">
    <div class="flex justify-between">
      <div class="flex space-x-2">
        <div class="relative">
          <router-link :to="`/user/` + userName">
            <img
              :class="
                isWithinTenMinutes(lastPostTimeStamp) ? '__blob_pulse' : null
              "
              class="h-10 rounded-full"
              :src="profileImage"
            />

            <!-- user is online -->
            <div
              v-if="isOnline === 'online'"
              class="w-4 h-4 bg-blue-accent rounded-full my-auto border-2 absolute right-0 bottom-0.5 dark:border-gray-800 border-grayLightMode-100"
            ></div>
            <!-- offline mode -->
            <div
              v-else-if="isOnline === 'offline'"
              class="w-4 h-4 bg-gray-300 rounded-full my-auto border-2 absolute right-0 bottom-0.5 dark:border-gray-800 border-grayLightMode-100"
            ></div>
            <!-- DND mode -->
            <div
              v-else-if="isOnline === 'dnd'"
              class="w-4 h-4 dark:bg-gray-800 bg-grayLightMode-100 rounded-full my-auto border-2 absolute right-0 bottom-0.5 dark:border-gray-800 border-grayLightMode-100"
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
          </router-link>
        </div>
        <div class="text-left">
          <div class="dark:text-gray-100 text-grayLightMode-400 font-bold">
            <router-link :to="`/user/` + userName">
              {{ name ? truncateText(name, 11) : userName }}</router-link
            >
          </div>
          <div class="text-gray-300 text-sm">
            <router-link :to="`/user/` + userName">
              @{{ userName ? truncateText(userName, 12) : null }}
            </router-link>
          </div>
        </div>
      </div>
      <!-- follow or unfollow button -->
      <!-- if user is already following it will display accordingly-->
      <followButton
        @clicked="followActionDeterminer($event)"
        :alreadyFollow="alreadyFollow"
      />
      <!--/ follow or unfollow button -->
    </div>
  </div>
</template>

<script>
import followButton from "@/components/modules/buttons/followButton.vue";
import peopleGlobeCardLoading from "@/components/modules/skeleton-loaders/peopleGlobeCardLoading.vue";
import { isWithinTenMinutes, truncateText } from "@/utils";
export default {
  name: "peopleGlobeCard",
  components: { followButton, peopleGlobeCardLoading },
  props: {
    id: {
      type: String,
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
      type: String,
      default: "dnd",
    },
    lastPostTimeStamp: {
      type: String,
      default: "2023-01-22T09:54:21.867000Z",
    },
    alreadyFollow: {
      type: Boolean,
      default: false,
    },
    // if the component is loading or not
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.isWithinTenMinutes(this.lastPostTimeStamp));
  },
  methods: {
    // what to do `follow` or `unfollow`
    followActionDeterminer(action) {
      console.log("The action to be done is to => ", action);
    },
    // calling function to know if user post is within 10 minutes from utils
    isWithinTenMinutes,
    truncateText,
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
