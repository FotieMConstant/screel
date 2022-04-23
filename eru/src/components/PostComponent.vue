<template>
  <div class="px-6 py-4 border-t hover:bg-gray-100 cursor-pointer">
    <div class="flex space-x-2">
      <div>
        <img
          class="w-12 rounded-full"
          src="https://avatars.githubusercontent.com/u/42372656?v=4"
          alt=""
        />
      </div>
      <div>
        <div class="flex space-x-1">
          <div class="font-bold text-base">fotiecodes</div>
          <div class="text-gray-400 text-base">@fotie_codes</div>
          <div class="text-gray-400 text-base">·</div>
          <div class="text-gray-400 text-base">6m</div>
        </div>
        <div class="text-left">
          Hi, setting up my screel account! I hope you love it and have a great
          time using the app.
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-3 mx-10 text-sm">
      <div class="flex">
        <div class="p-2 hover:bg-lightBlue rounded-full cursor-pointer">
          upvote
        </div>
        <div class="my-auto text-gray-500">1</div>
      </div>
      <div class="flex">
        <div class="p-2 hover:bg-lightBlue rounded-full cursor-pointer">
          downvote
        </div>
        <div class="my-auto text-gray-500">1</div>
      </div>

      <div class="p-2 hover:bg-lightBlue rounded-full cursor-pointer">
        share
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
};
</script>

<style></style>
