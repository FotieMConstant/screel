<template>
  <div class="flex justify-between dark:text-white">
    <div class="flex space-x-5">
      <div
        class="w-7 h-7 rounded-full my-auto"
        style="background-color: #fd5842"
      ></div>
      <div>
        <SearchField />
      </div>
    </div>
    <div class="flex space-x-4 text-gray-200">
      <button
        class="dark:bg-sky-white my-auto bg-blue-accent h-8 rounded-curl flex space-x-1 px-3"
      >
        <svg
          class="my-auto h-5 text-white dark:text-gray-800"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196 17.021 0 16.55 0 16V7C0 6.68333 0.0709998 6.38333 0.213 6.1C0.354333 5.81667 0.55 5.58333 0.8 5.4L6.8 0.9C6.98333 0.766667 7.175 0.666667 7.375 0.6C7.575 0.533333 7.78333 0.5 8 0.5C8.21667 0.5 8.425 0.533333 8.625 0.6C8.825 0.666667 9.01667 0.766667 9.2 0.9L15.2 5.4C15.45 5.58333 15.646 5.81667 15.788 6.1C15.9293 6.38333 16 6.68333 16 7V16C16 16.55 15.8043 17.021 15.413 17.413C15.021 17.8043 14.55 18 14 18H10V11H6V18H2Z"
            fill="currentColor"
          />
        </svg>

        <div class="dark:text-gray-500 text-white my-auto font-bold">Home</div>
      </button>
      <div class="my-auto">
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="8.278"
            cy="2.5"
            rx="2.68547"
            ry="2.5"
            fill="currentColor"
          />
          <ellipse
            cx="13.6491"
            cy="7.5"
            rx="2.68547"
            ry="2.5"
            fill="currentColor"
          />
          <ellipse
            cx="2.90715"
            cy="7.5"
            rx="2.68547"
            ry="2.5"
            fill="currentColor"
          />
          <ellipse
            cx="8.278"
            cy="12.5"
            rx="2.68547"
            ry="2.5"
            fill="currentColor"
          />
        </svg>
      </div>
      <div class="my-auto">
        <svg
          width="25"
          height="22"
          viewBox="0 0 25 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.14108 17.7265C10.4535 18.7147 12.091 19.2526 13.7789 19.25C14.8925 19.25 15.9501 19.0204 16.8998 18.6079L20.2807 19.2362C20.3998 19.2583 20.5229 19.2527 20.6392 19.2199C20.7554 19.1871 20.8612 19.1281 20.9471 19.0481C21.0329 18.9682 21.0963 18.8697 21.1316 18.7615C21.1668 18.6533 21.1729 18.5387 21.1491 18.4277L20.4742 15.2817C20.9173 14.3976 21.1639 13.4117 21.1639 12.375C21.1664 10.8041 20.5886 9.28024 19.5274 8.05888C19.7376 9.07684 19.7411 10.1225 19.5377 11.1416C19.8474 12.4015 19.6723 13.7227 19.0429 14.8747C18.9671 15.0129 18.9437 15.1709 18.9765 15.323L19.4846 17.6866L16.9441 17.2136C16.7812 17.1834 16.6121 17.2052 16.4641 17.2755C15.2263 17.8623 13.8064 18.0254 12.4525 17.7361C11.3578 17.9256 10.2346 17.9224 9.14108 17.7265ZM10.8249 2.75C9.58296 2.74967 8.36102 3.04091 7.27207 3.59678C6.18312 4.15265 5.26234 4.9552 4.59491 5.93018C3.92747 6.90517 3.53493 8.0211 3.4536 9.17476C3.37227 10.3284 3.60477 11.4825 4.1296 12.5304L3.45461 15.6777C3.43089 15.7887 3.43693 15.9033 3.47218 16.0115C3.50743 16.1197 3.57081 16.2182 3.6567 16.2981C3.74259 16.3781 3.84834 16.4371 3.96458 16.4699C4.08082 16.5027 4.20396 16.5083 4.32309 16.4862L7.70248 15.8579C8.70437 16.292 9.79814 16.5113 10.9032 16.4995C12.0082 16.4878 13.0963 16.2453 14.0873 15.79C15.0783 15.3347 15.9469 14.6782 16.629 13.8688C17.3112 13.0594 17.7895 12.1178 18.0288 11.1134C18.268 10.109 18.2621 9.06746 18.0114 8.0655C17.7607 7.06353 17.2717 6.12671 16.5804 5.3241C15.889 4.52149 15.013 3.87355 14.0169 3.42805C13.0208 2.98254 11.93 2.75083 10.8249 2.75Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div class="my-auto">
        <svg
          width="26"
          height="23"
          viewBox="0 0 26 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1332 20.6875C14.2324 20.6875 15.1314 19.8466 15.1314 18.8188H11.1349C11.1349 19.8466 12.034 20.6875 13.1332 20.6875ZM19.6277 15.0813V9.94219C19.6277 7.09234 17.4796 4.66306 14.6319 4.05558V3.40156C14.6319 2.60725 13.9825 2 13.1332 2C12.2838 2 11.6344 2.60725 11.6344 3.40156V4.05558C8.78669 4.66306 6.63865 7.09234 6.63865 9.94219V15.0813L4.64038 16.95V17.8844H21.6259V16.95L19.6277 15.0813Z"
            fill="#B2BDCD"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchField from "@/components/global/SearchField.vue";

export default {
  name: "AppBar",
  components: {
    SearchField,
  },
  data() {
    return { isDark: this.$store.getters.getIsDark };
  },
  watch: {
    // whenever isDark changes, this function will run
    "$store.state.isDark": function () {
      this.isDark = this.$store.state.isDark;
      console.log(this.$store.state.isDark);
    },
  },
  computed() {},
};
</script>

<style lang="scss" scoped></style>
