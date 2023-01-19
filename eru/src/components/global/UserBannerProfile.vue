<template>
  <!-- if the banner is let to loading 'if loading is set to true' -->
  <userBannerProfileLoader v-if="loading" />
  <div v-else class="rounded-curl dark:bg-gray-800 bg-grayLightMode-100">
    <div
      class="bg-cover bg-center w-full h-40 rounded-t-curl relative"
      :style="{
        'background-image': 'url(' + coverImage + ')',
      }"
    >
      <div class="absolute -bottom-12 left-7">
        <div class="relative w-20 mx-auto">
          <img
            class="h-20 rounded-full border-4 dark:border-gray-800 border-grayLightMode-100"
            :src="profileImage"
            alt=""
          />
          <!-- user is online -->
          <div
            v-if="isOnline === 'online'"
            class="w-4 h-4 bg-blue-accent rounded-full my-auto border-2 absolute right-2 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          ></div>
          <!-- offline mode -->
          <div
            v-else-if="isOnline === 'offline'"
            class="w-4 h-4 bg-gray-300 rounded-full my-auto border-2 absolute right-2 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          ></div>
          <!-- DND mode -->
          <div
            v-else-if="isOnline === 'dnd'"
            class="w-4 h-4 dark:bg-gray-800 bg-grayLightMode-100 rounded-full my-auto border-2 absolute right-2 bottom-1 dark:border-gray-800 border-grayLightMode-100"
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
      </div>
    </div>

    <div class="relative h-28 w-full">
      <div class="absolute inset-x-28 top-3 right-0">
        <div class="flex justify-between pr-6 pl-2">
          <div>
            <div
              class="flex space-x-3 dark:text-grayLightMode-100 text-grayLightMode-400"
            >
              <div>
                <div class="flex space-x-2">
                  <div class="text-xl font-bold">
                    {{ truncateText(name, 12) }}
                  </div>
                  <!-- javascript icon -->
                  <svg
                    class="my-auto"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_19620_1092)">
                      <path
                        d="M0 3C0 1.34315 1.34315 0 3 0H8C9.65685 0 11 1.34315 11 3V8C11 9.65685 9.65685 11 8 11H3C1.34315 11 0 9.65685 0 8V3Z"
                        fill="#F7DF1E"
                      />
                      <path
                        d="M2.89238 9.19241L3.73413 8.68297C3.89656 8.9709 4.04428 9.21454 4.39865 9.21454C4.73831 9.21454 4.95251 9.08168 4.95251 8.56485V5.05009H5.98621V8.57946C5.98621 9.65011 5.35861 10.1375 4.44295 10.1375C3.61601 10.1375 3.13605 9.70928 2.89238 9.19241ZM6.54769 9.08163L7.38936 8.59433C7.61095 8.95617 7.89892 9.22197 8.40836 9.22197C8.83672 9.22197 9.10983 9.00781 9.10983 8.71245C9.10983 8.35804 8.82924 8.23249 8.35667 8.02581L8.0983 7.91495C7.35249 7.59754 6.85779 7.19879 6.85779 6.35703C6.85779 5.5817 7.44848 4.99097 8.37149 4.99097C9.02866 4.99097 9.50123 5.2199 9.84085 5.81799L9.03596 6.3349C8.85872 6.0174 8.66682 5.89189 8.37145 5.89189C8.06869 5.89189 7.87671 6.08388 7.87671 6.3349C7.87671 6.64501 8.06869 6.7706 8.5117 6.96259L8.77011 7.07332C9.64883 7.44994 10.1435 7.83387 10.1435 8.69771C10.1435 9.62815 9.41254 10.1376 8.43049 10.1376C7.47061 10.1376 6.8504 9.67976 6.54769 9.08163Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_19620_1092">
                        <rect width="11" height="11" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="flex space-x-1">
                    <div>
                      <basicChip
                        title="Screel staff"
                        class="text-xs"
                        text="SS"
                      />
                    </div>
                    <div>
                      <basicChip
                        class="text-xs"
                        title="Open for work"
                        text="OW"
                      />
                    </div>
                  </div>
                  <!-- javascript icon -->
                </div>
                <div class="flex space-x-2">
                  <div class="mt-1 text-sm text-left text-gray-300">
                    @{{ userName }}
                  </div>
                  <div
                    class="mt-1 dark:bg-gray-700 bg-grayLightMode-200 dark:text-gray-300 text-grayLightMode-400 px-2 py-0.5 rounded-full font-bold select-none cursor-pointer text-xs"
                  >
                    Follows you
                  </div>
                </div>
              </div>
            </div>

            <!-- followers counts -->
            <div class="flex space-x-3 mt-3">
              <div class="flex space-x-1.5">
                <div
                  class="dark:text-gray-100 font-bold text-grayLightMode-400"
                >
                  0
                </div>
                <div
                  class="dark:text-gray-300 font-medium text-grayLightMode-300"
                >
                  followers
                </div>
              </div>
              <div class="flex space-x-1.5">
                <div
                  class="dark:text-gray-100 font-bold text-grayLightMode-400"
                >
                  0
                </div>
                <div
                  class="dark:text-gray-300 font-medium text-grayLightMode-300"
                >
                  followers
                </div>
              </div>
            </div>
            <!--/ followers counts -->
          </div>
          <div class="flex space-x-3">
            <div>
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

                <div class="my-auto font-bold text-sm">
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

                <div class="my-auto font-bold text-sm">Follow</div>
              </button>
            </div>
            <div>
              <!-- DM button -->
              <button
                class="flex space-x-1 dark:bg-gray-700 dark:hover:bg-gray-600 bg-blue-light hover:bg-blue-accent text-sky-white rounded-curl px-2.5 py-1 h-8"
              >
                <!-- message icon -->
                <svg
                  class="my-auto"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.22629 15.6978C9.17036 16.4613 10.3483 16.877 11.5625 16.875C12.3637 16.875 13.1244 16.6976 13.8076 16.3788L16.2397 16.8644C16.3254 16.8814 16.4139 16.8771 16.4976 16.8517C16.5812 16.8264 16.6573 16.7808 16.719 16.719C16.7808 16.6572 16.8264 16.5811 16.8518 16.4975C16.8771 16.4139 16.8815 16.3253 16.8644 16.2396L16.3789 13.8086C16.6976 13.1254 16.875 12.3636 16.875 11.5625C16.8768 10.3486 16.4612 9.1711 15.6978 8.22731C15.849 9.01392 15.8515 9.8219 15.7052 10.6094C15.928 11.583 15.802 12.6039 15.3493 13.4941C15.2947 13.6009 15.2779 13.723 15.3015 13.8405L15.667 15.6669L13.8395 15.3014C13.7223 15.2781 13.6006 15.2949 13.4942 15.3492C12.6038 15.8027 11.5823 15.9287 10.6084 15.7052C9.82089 15.8516 9.01289 15.8491 8.22629 15.6978ZM9.43754 4.125C8.54416 4.12475 7.66514 4.3498 6.8818 4.77933C6.09845 5.20887 5.43608 5.82902 4.95595 6.58242C4.47582 7.33581 4.19345 8.19813 4.13494 9.08959C4.07643 9.98105 4.24369 10.8729 4.62123 11.6826L4.13567 14.1146C4.11861 14.2003 4.12295 14.2889 4.14831 14.3725C4.17367 14.4561 4.21926 14.5322 4.28104 14.594C4.34283 14.6558 4.4189 14.7014 4.50252 14.7267C4.58614 14.7521 4.67472 14.7564 4.76042 14.7394L7.19142 14.2538C7.91214 14.5893 8.69896 14.7587 9.49387 14.7497C10.2888 14.7406 11.0715 14.5532 11.7844 14.2014C12.4973 13.8496 13.1221 13.3422 13.6128 12.7168C14.1035 12.0913 14.4476 11.3638 14.6197 10.5876C14.7919 9.81152 14.7876 9.00668 14.6073 8.23243C14.4269 7.45818 14.0751 6.73428 13.5778 6.11408C13.0805 5.49388 12.4503 4.9932 11.7338 4.64894C11.0172 4.30469 10.2325 4.12564 9.43754 4.125Z"
                    fill="white"
                  />
                </svg>

                <!--/ message icon -->
                <div class="my-auto font-bold text-sm">Send DM</div>
              </button>
              <!--/ DM button -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- about section -->
    <div class="px-6 pb-6">
      <div class="text-left dark:text-gray-200 text-grayLightMode-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nunc sit
        pulvinar ut tellus sit tincidunt faucibus sapien. ipsum dolor sit amet,
        consectetur adipiscing elit. Quis nunc sit pulvinar ut tellus sit
        tincidunt faucibus sapien. ⚡️
      </div>
      <div class="flex space-x-3 mt-4 font-bold text-blue-light">
        <div class="flex space-x-1">
          <svg
            class="my-auto"
            width="10"
            height="13"
            viewBox="0 0 10 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99999 13C4.0978 12.2221 3.26156 11.3692 2.49999 10.4503C1.35714 9.07043 6.2778e-07 7.01539 6.2778e-07 5.05711C-0.000495013 4.05699 0.292506 3.07921 0.841922 2.2475C1.39134 1.4158 2.17247 0.76755 3.08647 0.384803C4.00046 0.00205556 5.00624 -0.0979864 5.9765 0.0973378C6.94676 0.292662 7.83789 0.774572 8.53712 1.48208C9.00266 1.95061 9.37165 2.50782 9.62275 3.12147C9.87385 3.73513 10.0021 4.39303 9.99997 5.05711C9.99997 7.01539 8.64284 9.07043 7.49998 10.4503C6.73841 11.3692 5.90217 12.222 4.99999 13ZM4.99999 2.89086C4.43167 2.89086 3.88662 3.11909 3.48476 3.52534C3.0829 3.93159 2.85714 4.48258 2.85714 5.05711C2.85714 5.63163 3.0829 6.18262 3.48476 6.58887C3.88662 6.99512 4.43167 7.22335 4.99999 7.22335C5.56831 7.22335 6.11335 6.99512 6.51521 6.58887C6.91707 6.18262 7.14284 5.63163 7.14284 5.05711C7.14284 4.48258 6.91707 3.93159 6.51521 3.52534C6.11335 3.11909 5.56831 2.89086 4.99999 2.89086Z"
              fill="#388BFD"
            />
          </svg>

          <div>Istanbul, Turkey</div>
        </div>
        <a href="#" target="_BLANK" class="flex space-x-1">
          <svg
            class="my-auto"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.52143 8C1.52143 6.63214 2.63214 5.52143 4 5.52143H7.14286V4H4C1.79286 4 0 5.79286 0 8C0 10.2071 1.79286 12 4 12H7.14286V10.4786H4C2.63214 10.4786 1.52143 9.36786 1.52143 8ZM4.57143 8.78571H11.4286V7.21429H4.57143V8.78571ZM12 4H8.85714V5.52143H12C13.3679 5.52143 14.4786 6.63214 14.4786 8C14.4786 9.36786 13.3679 10.4786 12 10.4786H8.85714V12H12C14.2071 12 16 10.2071 16 8C16 5.79286 14.2071 4 12 4Z"
              fill="#388BFD"
            />
          </svg>

          <div>loremipsum.com</div>
        </a>
      </div>
      <div class="flex space-x-1 mt-2">
        <svg
          class="my-auto"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z"
            fill="url(#paint0_linear_19529_2492)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_19529_2492"
              x1="12"
              y1="2.625"
              x2="6"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.229167" stop-color="#FD5842" />
              <stop offset="1" stop-color="#6948D3" stop-opacity="0.78" />
            </linearGradient>
          </defs>
        </svg>

        <div class="dark:text-gray-400 text-grayLightMode-300 text-sm">
          Member since {{ memeberSince }}.
        </div>
      </div>
    </div>
    <!-- /about section -->
  </div>
</template>

<script>
import basicChip from "@/components/modules/chips/basicChip.vue";
import userBannerProfileLoader from "@/components/modules/skeleton-loaders/userBannerProfileLoader.vue";
import moment from "moment";
import { formatDate } from "@/utils";
import { truncateText } from "@/utils";

export default {
  name: "UserBannerProfile",
  props: {
    coverImage: {
      type: String,
      default: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    },
    profileImage: {
      type: String,
      default: "https://i.pravatar.cc/300",
    },
    name: {
      type: String,
      default: "user",
    },
    userName: {
      type: String,
      default: "username",
    },
    joinedDate: {
      type: String,
      default: null,
    }, //date account was created
    isOnline: {
      type: String,
      default: "dnd",
    },
    alreadyFollow: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    basicChip,
    userBannerProfileLoader,
  },
  data() {
    return {
      memeberSince: null,
      hoveredOnFollowing: false,
    };
  },
  // each time the `joinedDate` changes re-run the function to makeJoinedDateReadable
  watch: {
    // eslint-disable-next-line no-unused-vars
    joinedDate: function (newVal, oldVal) {
      // console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.makeJoinedDateReadable();
    },
  },
  mounted() {
    // run function on mounted
    this.makeJoinedDateReadable();
  },
  methods: {
    formatDate,
    truncateText,
    // function to make the date readable
    makeJoinedDateReadable() {
      this.memeberSince = moment(this.formatDate(this.joinedDate)).format(
        "MMMM Do YYYY"
      );
      // console.log(this.formatDate(this.joinedDate));
    },
  },
};
</script>

<style scoped></style>
