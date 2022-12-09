<template>
  <div>
    <div
      class="flex dark:text-gray-300 dark:bg-gray-700 bg-gray-100 rounded-curl"
    >
      <svg
        class="pl-3 pr-1 h-5 my-auto"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.78888 14.25C13.3906 14.25 16.3104 11.5637 16.3104 8.25C16.3104 4.93629 13.3906 2.25 9.78888 2.25C6.18713 2.25 3.26733 4.93629 3.26733 8.25C3.26733 11.5637 6.18713 14.25 9.78888 14.25Z"
          stroke="#8B949E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.9409 15.7498L14.3948 12.4873"
          stroke="#8B949E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <input
        class="dark:bg-gray-700 bg-gray-100 py-1 h-10 px-2 focus:outline-none rounded-curl"
        type="search"
        name=""
        :placeholder="$t('appBar.searchPlaceholder')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchField",
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
