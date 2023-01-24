<template>
  <button
    @mouseover="hoveredOnFollowing = true"
    @mouseleave="hoveredOnFollowing = false"
    class="flex space-x-1 dark:bg-gray-600 dark:hover:bg-gray-700 bg-grayLightMode-200 hover:bg-grayLightMode-200 dark:text-gray-100 text-grayLightMode-400 rounded-curl px-3 py-1 h-8"
    @click="clickEventToUnfollow()"
  >
    <div class="my-auto font-bold text-sm">
      {{ hoveredOnFollowing ? "Unfollow" : "Following" }}
    </div>
  </button>
</template>

<script>
export default {
  name: "unFollowButton",
  props: {},
  data() {
    return {
      hoveredOnFollowing: false,
    };
  },
  methods: {
    // for the unfollow emiter
    clickEventToUnfollow() {
      this.$emit("clicked"); // emit on click to parent component
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
