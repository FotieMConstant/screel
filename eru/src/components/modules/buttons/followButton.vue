<template>
  <!-- if current user logged in alreadyFollow this user-->
  <button
    @mouseover="hoveredOnFollowing = true"
    @mouseleave="hoveredOnFollowing = false"
    v-if="alreadyFollow"
    class="flex space-x-1 dark:bg-gray-600 dark:hover:bg-gray-700 bg-grayLightMode-200 hover:bg-grayLightMode-200 dark:text-gray-100 text-grayLightMode-400 rounded-curl px-3 py-1 h-8"
    @click="clickEventToUnfollow()"
  >
    <div class="my-auto font-bold text-sm">
      {{ hoveredOnFollowing ? "Unfollow" : "Following" }}
    </div>
  </button>
  <!-- else -->
  <button
    v-else
    @click="clickEventFollow()"
    class="flex space-x-1 dark:bg-blue-light dark:hover:bg-blue-accent bg-blue-light hover:bg-blue-accent text-sky-white rounded-curl px-3 py-1 h-8"
  >
    <div class="my-auto font-bold text-sm">Follow</div>
  </button>
</template>

<script>
export default {
  name: "followButton",
  props: {
    // pass to the button if the user is already following or not
    alreadyFollow: {
      trype: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hoveredOnFollowing: false,
    };
  },
  methods: {
    // for the unfollow emiter
    clickEventToUnfollow() {
      // console.log("click event $emit => unfollow!!");
      this.$emit("clicked", "unfollow"); // emit on click to parent component
    },
    // for the follow emiter
    clickEventFollow() {
      // console.log("click event $emit => follow!!");
      this.$emit("clicked", "follow"); // emit on click to parent component
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
