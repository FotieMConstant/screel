<template>
  <followListingCardLoading v-if="loading" />
  <div
    v-else
    class="dark:bg-gray-800 dark:text-gray-100 text-grayLightMode-400 bg-grayLightMode-100 p-5 rounded-curl"
  >
    <div class="">
      <div class="flex justify-between">
        <div class="flex space-x-2">
          <div class="relative">
            <router-link :to="`/u/` + userName">
              <img class="h-12 rounded-full" :src="profileImage" />

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
            <div class="flex space-x-1 my-auto">
              <div
                class="dark:text-gray-100 text-grayLightMode-400 font-bold my-auto"
              >
                <router-link :to="`/u/` + userName">
                  {{ name ? truncateText(name, 11) : userName }}</router-link
                >
              </div>
              <div class="font-bold my-auto">·</div>
              <div class="text-gray-300 text-sm my-auto">
                <router-link :to="`/u/` + userName">
                  @{{ userName ? truncateText(userName, 16) : null }}
                </router-link>
              </div>
              <div
                v-if="alreadyFollowedByThatUser"
                class="dark:bg-gray-700 bg-grayLightMode-200 dark:text-gray-300 text-grayLightMode-400 px-2 py-0.5 rounded-full font-bold select-none cursor-pointer my-auto text-xs"
              >
                Follows you
              </div>
            </div>
            <div>Istanbul, Turkey.</div>
          </div>
        </div>

        <!-- only show `follow`, `unfollow` buttons and `menu` if the current user is not the listed user -->
        <div v-if="currentUser._id !== userId" class="flex space-x-4">
          <div class="my-auto">
            <!-- follow or unfollow button -->
            <unFollowButton
              v-if="alreadyFollowUser"
              @clicked="unFollowThisUser()"
            />
            <followButton v-else @clicked="followThisUser()" />
            <!--/ follow or unfollow button -->
          </div>
          <!-- menu button -->
          <svg
            class="my-auto"
            width="20"
            height="6"
            viewBox="0 0 20 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99999 0.5C10.663 0.5 11.2989 0.763392 11.7678 1.23223C12.2366 1.70107 12.5 2.33696 12.5 3C12.5 3.66304 12.2366 4.29893 11.7678 4.76777C11.2989 5.23661 10.663 5.5 9.99999 5.5C9.33695 5.5 8.70106 5.23661 8.23222 4.76777C7.76338 4.29893 7.49999 3.66304 7.49999 3C7.49999 2.33696 7.76338 1.70107 8.23222 1.23223C8.70106 0.763392 9.33695 0.5 9.99999 0.5ZM9.99999 1.5C9.60203 1.50013 9.22043 1.65835 8.93912 1.93984C8.65782 2.22133 8.49986 2.60304 8.49999 3.001C8.50012 3.39896 8.65834 3.78056 8.93983 4.06187C9.22132 4.34317 9.60303 4.50113 10.001 4.501C10.3989 4.50087 10.7806 4.34265 11.0619 4.06116C11.3432 3.77967 11.5011 3.39796 11.501 3C11.5009 2.60204 11.3426 2.22044 11.0611 1.93913C10.7797 1.65783 10.3979 1.49987 9.99999 1.5ZM2.56299 0.5C3.22603 0.5 3.86191 0.763392 4.33076 1.23223C4.7996 1.70107 5.06299 2.33696 5.06299 3C5.06299 3.66304 4.7996 4.29893 4.33076 4.76777C3.86191 5.23661 3.22603 5.5 2.56299 5.5C1.89995 5.5 1.26406 5.23661 0.795221 4.76777C0.32638 4.29893 0.0629883 3.66304 0.0629883 3C0.0629883 2.33696 0.32638 1.70107 0.795221 1.23223C1.26406 0.763392 1.89995 0.5 2.56299 0.5ZM2.56299 1.5C2.16503 1.50013 1.78343 1.65835 1.50212 1.93984C1.22082 2.22133 1.06286 2.60304 1.06299 3.001C1.06312 3.39896 1.22134 3.78056 1.50283 4.06187C1.78432 4.34317 2.16603 4.50113 2.56399 4.501C2.96195 4.50087 3.34355 4.34265 3.62486 4.06116C3.90616 3.77967 4.06412 3.39796 4.06399 3C4.06386 2.60204 3.90564 2.22044 3.62415 1.93913C3.34266 1.65783 2.96095 1.49987 2.56299 1.5ZM17.437 0.5C18.1 0.5 18.7359 0.763392 19.2048 1.23223C19.6736 1.70107 19.937 2.33696 19.937 3C19.937 3.66304 19.6736 4.29893 19.2048 4.76777C18.7359 5.23661 18.1 5.5 17.437 5.5C16.7739 5.5 16.1381 5.23661 15.6692 4.76777C15.2004 4.29893 14.937 3.66304 14.937 3C14.937 2.33696 15.2004 1.70107 15.6692 1.23223C16.1381 0.763392 16.7739 0.5 17.437 0.5ZM17.437 1.5C17.039 1.50013 16.6574 1.65835 16.3761 1.93984C16.0948 2.22133 15.9369 2.60304 15.937 3.001C15.9371 3.39896 16.0953 3.78056 16.3768 4.06187C16.6583 4.34317 17.04 4.50113 17.438 4.501C17.8359 4.50087 18.2176 4.34265 18.4989 4.06116C18.7802 3.77967 18.9381 3.39796 18.938 3C18.9379 2.60204 18.7796 2.22044 18.4981 1.93913C18.2167 1.65783 17.8349 1.49987 17.437 1.5Z"
              fill="currentColor"
            />
          </svg>
          <!--/ menu button -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { truncateText } from "@/utils";
import { mapGetters } from "vuex";
import followButton from "@/components/modules/buttons/followButton.vue";
import unFollowButton from "@/components/modules/buttons/unFollowButton.vue";
import followListingCardLoading from "@/components/modules/skeleton-loaders/followListingCardLoading.vue";

export default {
  name: "followListingCard",
  components: {
    followButton,
    unFollowButton,
    followListingCardLoading,
  },
  props: {
    userId: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: "fotiecodes",
    },
    userName: {
      type: String,
      default: "FotieMConstant",
    },
    profileImage: {
      type: String,
      default: "https://picsum.photos/200",
    },
    isOnline: {
      type: String,
      default: "online",
    },
    alreadyFollow: {
      type: Boolean,
      default: false,
    },
    // already followed by the user you are viewing their profile
    alreadyFollowedByThatUser: {
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
    return {
      alreadyFollowUser: this.alreadyFollow,
    };
  },
  computed: {
    // mapping to get current logged in user from store auth module
    ...mapGetters({ currentUser: ["authentication/getCurrentUser"] }),
  },
  methods: {
    // function to follow user
    async followThisUser() {
      console.log("you wanna follow user", this.userId, this.userName);
      // calling the follow function in module store
      let response = await this.$store.dispatch("user/followUserAction", {
        _vm: this,
        follower_id: this.currentUser._id, // page number to fetch
        following_id: this.userId,
      });
      console.log("follow response", response);
      if (response.status == "Success") {
        this.alreadyFollowUser = !this.alreadyFollowUser;
        // notification
        this.$toast.success(
          "You followed @" + this.userName + " successfully",
          {
            position: "bottom",
          }
        );
      } else {
        console.log("was unable to follow user");
      }
    },
    // function to unfollow user
    async unFollowThisUser() {
      console.log("you wanna unfollow user", this.userId, this.userName);
      // calling the unfollow function in module store
      let response = await this.$store.dispatch("user/unFollowUserAction", {
        _vm: this,
        follower_id: this.currentUser._id, // page number to fetch
        following_id: this.userId,
      });
      console.log("unfollow response", response);
      if (response.status == "Success") {
        this.alreadyFollowUser = !this.alreadyFollowUser;
        // notification
        this.$toast.info("You just unfollowed @" + this.userName, {
          position: "bottom",
        });
      } else {
        console.log("was unable to follow user");
      }
    },
    truncateText,
  },
};
</script>
<style lang="scss" scoped></style>
