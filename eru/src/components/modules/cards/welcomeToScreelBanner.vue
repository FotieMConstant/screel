<template>
  <div
    v-show="showWelcomToScreelBanner"
    class="dark:bg-gray-800 dark:text-gray-100 text-grayLightMode-400 bg-grayLightMode-100 border dark:border-gray-600 border-gray-100 p-5 rounded-chip text-left relative space-y-2"
  >
    <div class="font-bold text-lg">Welcome to Screel 🚀</div>
    <div class="text-base font-medium">
      Nerds unite!😎 We are thrilled to have you around. We're building a
      network where geeks can feel at home.. As we build in public, we'd love to
      hear your feedback and thoughts. Thanks for joining the Screel family and
      let's geek out together!✌🏾.
    </div>
    <div class="text-blue-light font-medium flex space-x-5">
      <div>
        <a
          href="https://github.com/FotieMConstant/screel/issues"
          target="_blank"
          rel="noopener noreferrer"
          >Send feedback</a
        >
      </div>
      <div>
        <a
          href="https://github.com/FotieMConstant/screel"
          target="_blank"
          rel="noopener noreferrer"
          >What's Screel?</a
        >
      </div>
    </div>
    <!-- close icon -->
    <svg
      @click="closeWelcomeToScreel()"
      class="cursor-pointer absolute top-1 right-3"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_19360_4377)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.34334 6.34319C6.73386 5.95266 7.36703 5.95266 7.75755 6.34319L17.657 16.2427C18.0476 16.6332 18.0476 17.2664 17.657 17.6569C17.2665 18.0474 16.6334 18.0474 16.2428 17.6569L6.34334 7.7574C5.95281 7.36688 5.95281 6.73371 6.34334 6.34319Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.34383 17.6563C5.9533 17.2658 5.9533 16.6326 6.34383 16.2421L16.2433 6.34262C16.6338 5.95209 17.267 5.95209 17.6575 6.34262C18.0481 6.73314 18.0481 7.36631 17.6575 7.75683L7.75804 17.6563C7.36751 18.0468 6.73435 18.0468 6.34383 17.6563Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_19360_4377">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.686523 12) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>

    <!-- close icon -->
  </div>
</template>

<script>
export default {
  name: "welcomeToScreelBanner",
  props: {},
  data() {
    return {
      showWelcomToScreelBanner: true,
      localKey: "welcome",
    };
  },
  mounted() {
    // console.log("bannar key=> ", this.localKey);
    localStorage.getItem(this.localKey);
    if (localStorage.getItem(this.localKey)) {
      this.showWelcomToScreelBanner = !this.showWelcomToScreelBanner;
    }
  },
  methods: {
    closeWelcomeToScreel() {
      this.showWelcomToScreelBanner = !this.showWelcomToScreelBanner;
      localStorage.setItem(this.localKey, true);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
