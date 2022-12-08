<template>
  <div>
    <div class="flex justify-between items-center" @click="toggleDark()">
      <h2>Toggle me</h2>
      <div
        class="w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
        :class="{ 'bg-green-400': isDark }"
      >
        <div
          class="bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out"
          :class="{ 'translate-x-6': isDark }"
        ></div>
      </div>
    </div>
    <div class="mt-6">
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Vue 3 dark Mode With Tailwind CSS
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          install & setup vue 3 dark mode in vue 3 using tailwind css 3
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";

export default {
  components: {},
  data() {
    return {
      isDark: useDark(),
    };
  },
  created() {},
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
      console.log("isDark on => " + this.isDark);
      useToggle(this.isDark);
    },
  },
};
</script>

<style lang="scss" scoped></style>
