<template>
  <div v-if="currentUser" class="sm:w-80 bg-white rounded-md p-6">
    <div class="flex space-x-3">
      <img class="rounded-full w-20" :src="currentUser.avatar_url" alt="" />

      <div>
        <div class="font-bold">{{ currentUser.login }}</div>
        <div class="text-sm text-gray-400">@{{ currentUser.name }}</div>
        <div class="mt-3 flex space-x-2">
          <div>
            <a href="#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="w-4"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
          </div>
          <span
            v-if="currentUser.hireable"
            class="
              text-xs
              bg-yellow-500
              font-bold
              rounded-md
              cursor-pointer
              text-white
              px-1
              py-0.5
            "
            :title="`${currentUser.name} is available for hire`"
            >Open for work</span
          >
          <span
            v-else
            class="
              text-xs
              bg-blue-500
              font-bold
              rounded-md
              cursor-pointer
              text-white
              px-1
              py-0.5
            "
            :title="`${currentUser.name} is not available for hire`"
            >Unavailable</span
          >
        </div>
      </div>
    </div>
    <div class="mt-3 text-gray-500 text-sm">
      {{ currentUser.bio }}
    </div>

    <div class="flex justify-between mt-6 text-sm">
      <div>
        <span class="font-bold"> {{ currentUser.followers }}</span> followers
      </div>
      <div>
        <span class="font-bold"> {{ currentUser.following }}</span> following
      </div>
      <div><span class="font-bold">80</span> Stars</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePreviewBox",
  data() {
    return {
      currentUser: null, // the currently logged in user
    };
  },
  mounted() {
    this.currentUser = this.$store.getters.getCurrentUser;
    console.log(this.currentUser);
  },
};
</script>

<style></style>
