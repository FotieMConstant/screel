<template>
  <div class="rounded-curl dark:bg-gray-800 bg-grayLightMode-100 px-5">
    <div class="text-left py-4">
      <p
        class="text-gray-400 px-12 dark:text-grayLightMode-100 font-bold text-xl"
      >
        Cover and Profile Photo
      </p>
    </div>
    <div
      class="bg-cover bg-center w-full h-40 rounded-t-curl relative"
      :style="{
        'background-image': 'url(' + coverImage + ')',
      }"
    >
      <div class="absolute -bottom-12 left-7">
        <div class="relative w-20 mx-auto">
          <div
            class="h-20 w-full rounded-full absolute bottom-0 overflow-hidden"
          >
            <img
              class="overflow-hidden h-20 rounded-full border-4 dark:border-gray-800 border-grayLightMode-100"
              :src="profileImage"
              alt=""
            />
            <input type="file" id="file" class="hidden" />
            <label
              for="file"
              class="absolute bottom-0 bg-black/70 text-xs leading-5 h-5 w-full -translate-x-2/4 text-center left-1/2 text-grayLightMode-100"
              >Edit</label
            >
          </div>

          <!-- user is online -->
          <div
            v-if="isOnline === 'online'"
            class="w-4 h-4 bg-blue-accent rounded-full my-auto border-2 absolute right-1 bottom-2 dark:border-gray-800 border-grayLightMode-100"
          ></div>
          <!-- offline mode -->
          <div
            v-else-if="isOnline === 'offline'"
            class="w-4 h-4 bg-gray-300 rounded-full my-auto border-2 absolute right-2 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          ></div>
          <!-- DND mode -->
          <div
            v-else-if="isOnline === 'dnd'"
            class="w-4 h-4 dark:bg-gray-800 bg-grayLightMode-100 rounded-full my-auto border-2 absolute right-2 bottom-1 dark:border-gray-800 border-grayLightMode-100"
          >
            <svg
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_19358_3571)">
                <path
                  d="M3.51309 1.80689C3.51309 1.16571 3.64231 0.55622 3.87635 0.000366211C1.65294 0.539154 0.00244141 2.54071 0.00244141 4.92747C0.00244141 7.72624 2.27461 9.99841 5.07338 9.99841C7.46014 9.99841 9.4617 8.34792 10.0005 6.12451C9.44463 6.35855 8.83271 6.48776 8.19396 6.48776C5.60973 6.48776 3.51309 4.39112 3.51309 1.80689Z"
                  class="dark:border-gray-800 border-grayLightMode-100"
                  fill="#FFA928"
                />
              </g>
              <defs>
                <clipPath id="clip0_19358_3571">
                  <rect width="10" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div
          class="text-white absolute text-left left-full w-full ml-6 -bottom-3"
        >
          <div
            class="dark:text-gray-100 text-xl whitespace-nowrap text-grayLightMode-400 font-bold"
          >
            {{ name }}
            <basicChip class="mt-1 text-xs" text="SS" />
          </div>
          <div class="text-gray-300 text-sm">@{{ userName }}</div>
        </div>
      </div>
      <!-- edit cover -->
      <div class="flex w-full absolute px-10 left-3/4 bottom-3">
        <input type="file" id="file" class="hidden" />

        <label
          for="file"
          class="bg-black/30 text-xs leading-5 h-5 text-center left-1/2 text-grayLightMode-100 flex row justify-center align-center"
          ><svg
            class="my-auto h-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47933 20.904 3.288 20.712C3.096 20.5207 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9127 3.075 16.788C3.125 16.6627 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.33767 20.875 7.213 20.925C7.08767 20.975 6.95833 21 6.825 21H4Z"
              fill="white"
            />
          </svg>
          <span class="ml-1 text-xs pr-2">Edit Cover</span>
        </label>
      </div>
    </div>

    <!-- the form -->
    <div class="w-full mt-20 flex justify-center items-center">
      <div class="w-5/6 text-left dark:text-grayLightMode-100 text-gray-800">
        <p
          class="text-2xl font-bold mb-5 dark:text-grayLightMode-100 text-gray-400"
        >
          Public Profile
        </p>
        <form class="w-full dark:text-gray-300 text-gray-400">
          <div class="w-full mb-8 flex justify-between align-center">
            <span class="w-1/2">
              <label for="name" class="ml-2">Display Name</label><br />
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                class="text-gray-300 dark:text-white focus:outline-0 placeholder-gray-100 px-6 py-2 mt-4 rounded-curl bg-grayLightMode-50 dark:bg-gray-700"
              />
            </span>
            <span>
              <label for="username" class="ml-2">Username</label><br />
              <input
                type="username"
                placeholder="Enter your username"
                class="text-gray-300 dark:text-white placeholder-gray-100 px-6 focus:outline-0 py-2 mt-4 rounded-curl bg-grayLightMode-50 dark:bg-gray-700"
              />
            </span>
          </div>
          <label class="ml-2">Bio <br /></label>
          <textarea
            cols="10"
            rows="3"
            class="outline-none dark:text-gray-100 text-gray-300 w-full rounded-curl mt-3 mb-4 bg-grayLightMode-50 dark:bg-gray-700 p-4"
          >
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, facere.</textarea
          >
          <div class="w-full mb-8 flex justify-between align-center">
            <span>
              <label for="name" class="ml-2">Website</label><br />
              <input
                class="text-gray-300 dark:text-white focus:outline-0 placeholder-gray-100 px-6 py-2 mt-4 rounded-curl bg-grayLightMode-50 dark:bg-gray-700"
                id="name"
                type="url"
                placeholder="Enter your name"
              />
            </span>
            <span class="w-1/2">
              <label for="username" class="ml-2">Flair</label><br />
              <select
                class="focus:outline-0 text-gray-300 dark:text-white placeholder-gray-100 px-6 mt-4 rounded-curl w-full py-3 bg-grayLightMode-50 dark:bg-gray-700"
              >
                <option value="javascript">javascript</option>
                <option value="javascript">typescript</option>
                <option value="javascript">python</option>
              </select>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import SettingsLayout from "@/components/Layout/SettingsLayout";

export default {
  name: "ProfileSettingsView",
  components: {
    // SettingsLayout,
  },
  props: {
    name: {
      type: String,
      default: "mankaa che",
    },
    userId: {
      type: String,
      default: null,
    },
    coverImage: {
      type: String,
      default: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    },
    profileImage: {
      type: String,
      default: "https://i.pravatar.cc/300",
    },
    userName: {
      type: String,
      default: "manka",
    },
    isOnline: {
      type: String,
      default: "online",
    },
  },
};
</script>

<style scoped>
select * {
  border-radius: 15px;
  background-color: rgb(82, 80, 80);
  padding: 10px;
  color: #fff;
}
</style>
