<template>
  <button
    @click="clickEventFollow()"
    class="flex space-x-1 dark:bg-blue-light dark:hover:bg-blue-accent bg-blue-light hover:bg-blue-accent text-sky-white rounded-curl px-3 py-1 h-8"
  >
    <div class="my-auto font-bold text-sm">Follow</div>
  </button>
</template>

<script>
export default {
  name: "followButton",
  props: {},
  data() {
    return {};
  },
  methods: {
    // for the follow emiter
    clickEventFollow() {
      this.$emit("clicked"); // emit on click to parent component
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
