<template>
  <div class="pt-6">
    <div class="px-6">
      <div class="flex space-x-3">
        <div>
          <img
            class="w-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/42372656?v=4"
            alt=""
          />
        </div>
        <div class="w-full">
          <textarea
            class="w-full focus:outline-none text-lg py-2"
            placeholder="What plugin, script or library did you wish existed?"
            style="resize: none"
          ></textarea>
        </div>
      </div>
      <div class="ml-12">
        <div class="border-b my-4"></div>
        <div class="flex justify-between">
          <div class="flex">
            <div class="my-auto py-2 hover:bg-lightBlue rounded-full italic">
              "Get it built by open-source developers"
            </div>

            <!-- <div
              class="my-auto p-2 hover:bg-lightBlue rounded-full cursor-pointer"
            >
              icon
            </div>
            <div
              class="my-auto p-2 hover:bg-lightBlue rounded-full cursor-pointer"
            >
              icon
            </div> -->
          </div>
          <button
            class="
              bg-yellow-500
              hover:bg-twitterBlueHovered
              transition
              duration-500
              text-white
              rounded-full
              font-bold
              py-2
              px-4
            "
          >
            Screel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
};
</script>

<style></style>
