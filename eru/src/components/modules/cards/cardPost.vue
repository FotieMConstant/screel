<template>
  <div
    class="dark:bg-gray-800 dark:text-gray-100 bg-grayLightMode-100 p-5 rounded-curl"
  >
    <div class="flex justify-between">
      <div class="flex space-x-2.5">
        <img
          class="h-8 rounded-full"
          src="https://avatars.githubusercontent.com/u/42372656?v=4"
          alt=""
        />
        <div class="flex space-x-1 my-auto">
          <div class="font-bold my-auto">fotiecode</div>
          <div class="font-bold my-auto">·</div>
          <div class="text-sm my-auto">@fotie_codes</div>
        </div>
      </div>
      <div class="flex my-auto space-x-2">
        <div class="w-2.5 h-2.5 bg-blue-accent rounded-full my-auto"></div>
        <div class="my-auto font-bold">just now</div>
      </div>
    </div>
    <div class="text-left dark:text-gray-300 px-10">
      <div>
        Good morning. It’s 06:40 in the Turkey. Just getting light outside and
        I’m gonna soon be eating my breakfast. Hi to
        <router-link to="/" class="font-bold"> @yan_codes</router-link>
        👋🏼
      </div>
      <div class="mt-2 text-left space-x-2">
        <basicChip text="1k 😎" enableDropdownShadow />
        <basicChip text="#reacjs" />
        <!-- the dropdownShadowColor should be a valide tailwind color palette -->
      </div>
    </div>
  </div>
</template>

<script>
import basicChip from "@/components/modules/chips/basicChip.vue";
export default {
  name: "cardPost",
  components: { basicChip },
};
</script>
<style lang="scss" scoped></style>
