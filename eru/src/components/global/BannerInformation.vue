<template>
  <div v-show="showBannerInformation" class="bg-blue-light text-sky-white">
    <div class="w-full p-3 flex justify-between">
      <div></div>
      <div class="text-center">
        <strong>{{ title }}</strong> {{ text }}
      </div>
      <button @click="closeInforBanner()" class="banner__close" type="button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerInformation",
  props: {
    localKey: {
      type: String,
      default: "Default",
    }, //the key used for localStorage
    title: {
      type: String,
      default: "Title",
    },
    text: {
      type: String,
      default: "Text",
    },
  },
  data() {
    return {
      showBannerInformation: true,
    };
  },
  mounted() {
    console.log("bannar key=> ", this.localKey);
    localStorage.getItem(this.localKey);
    if (localStorage.getItem(this.localKey)) {
      this.showBannerInformation = !this.showBannerInformation;
    }
  },
  methods: {
    closeInforBanner() {
      this.showBannerInformation = !this.showBannerInformation;
      localStorage.setItem(this.localKey, true);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
