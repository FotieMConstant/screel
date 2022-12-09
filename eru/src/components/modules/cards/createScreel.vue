<template>
  <div class="dark:bg-gray-800 bg-grayLightMode-100 p-5 rounded-curl">
    <div class="flex space-x-3">
      <img
        class="h-12 rounded-full"
        src="https://avatars.githubusercontent.com/u/42372656?v=4"
        alt=""
      />
      <textarea
        class="w-full dark:bg-gray-700 p-2 focus:outline-none rounded-curl dark:text-gray-200"
        placeholder="What’s screeling?"
        type="text"
        name=""
        id=""
        style="resize: none"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "postScreel",
  components: {},
};
</script>
<style lang="scss" scoped></style>
