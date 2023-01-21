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
export default {
  name: "peopleGlobeCard",
  components: { followButton },
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
    return {};
  },
  methods: {
    // what to do `follow` or `unfollow`
    followActionDeterminer(action) {
      console.log("The action to be done is to => ", action);
    },
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
