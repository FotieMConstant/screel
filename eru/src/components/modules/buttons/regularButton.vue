<template>
  <!-- states: `regular` -->
  <button
    v-if="state === 'regular'"
    class="font-bold dark:bg-blue-light dark:hover:bg-blue-accent bg-blue-light hover:bg-blue-accent text-sky-white rounded-curl px-4 py-1 h-9"
    :class="classes"
    :id="id"
    @click.prevent="clickEvent()"
  >
    {{ text }}
  </button>
  <!-- states: `disabled` -->
  <button
    v-if="state === 'disabled'"
    class="font-bold cursor-not-allowed dark:bg-blue-light text-blue-lightish rounded-curl px-4 py-1 h-9"
    disabled
  >
    {{ text }}
  </button>
  <!-- states: `loading` -->
  <button
    v-if="state === 'loading'"
    class="flex space-x-1.5 font-bold cursor-progress dark:bg-blue-light dark:hover:bg-blue-accent bg-blue-light hover:bg-blue-accent text-sky-white rounded-curl px-4 py-1 h-9"
  >
    <svg
      class="animate-spin h-5 w-5 text-white my-auto"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <div class="my-auto">Working...</div>
  </button>
</template>

<script>
export default {
  name: "regularButton",
  emits: ["clicked"],
  props: {
    text: {
      trype: String,
      default: "Regular",
    },
    // states: `regular` `hover` `disabled` `loading`
    state: {
      trype: String,
      default: "loading",
    },
    classes: {
      trype: String,
      default: "",
    },
    id: String,
  },
  methods: {
    clickEvent() {
      console.log("click event");
      this.$emit("clicked"); // emit on click to parent component
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
