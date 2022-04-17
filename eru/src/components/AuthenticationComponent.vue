<template>
  <!-- component -->
  <div class="flex justify-center min-h-screen bg-gray-100 antialiased">
    <div
      class="
        container
        sm:mt-40
        mt-24
        my-auto
        max-w-sm
        shadow-lg
        rounded-lg
        p-3
        bg-white
      "
    >
      <!-- header -->
      <div class="text-left m-6">
        <h1 class="text-3xl font-semibold text-gray-700">Welcome</h1>
        <p class="text-gray-500 mt-2">
          By logging in you accept our
          <a href="#" class="text-yellow-500">Privacy Policy</a>
          and <a href="#" class="text-yellow-500">Terms of Service.</a>
        </p>
      </div>
      <!-- sign-in -->
      <div class="m-6 mt-10">
        <!-- alternate sign-in -->
        <div class="space-y-4">
          <!-- <button
            class="
              bg-green-500
              text-white
              w-full
              p-2
              flex flex-row
              justify-center
              gap-2
              items-center
              rounded-sm
              hover:bg-green-600
              duration-100
              ease-in-out
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="w-5"
              viewBox="0 0 48 48"
            >
              <defs>
                <path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="b">
                <use xlink:href="#a" overflow="visible" />
              </clipPath>
              <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path
                clip-path="url(#b)"
                fill="#EA4335"
                d="M0 11l17 13 7-6.1L48 14V0H0z"
              />
              <path
                clip-path="url(#b)"
                fill="#34A853"
                d="M0 37l30-23 7.9 1L48 0v48H0z"
              />
              <path
                clip-path="url(#b)"
                fill="#4285F4"
                d="M48 48L17 24l-4-3 35-10z"
              />
            </svg>
            Google
          </button> -->
          <button
            class="
              bg-gray-700
              text-white
              w-full
              p-2
              flex flex-row
              justify-center
              gap-2
              items-center
              rounded-lg
              hover:bg-gray-800
              duration-100
              ease-in-out
            "
            @click="loginWithGithub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="w-5"
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
            Log in with GitHub
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getCodeFromUrl();
  },
  methods: {
    loginWithGithub() {
      console.log("loginWithGithub...");
      this.$store.dispatch("githubAuthorizeAction"); // calling action in store
    },
    // function to get code from url
    getCodeFromUrl() {
      console.log("getCodeFromUrl");
      // if the data in the url is true
      if (this.$route.query.code) {
        console.log("auth code => " + this.$route.query.code);
        this.$store.dispatch("getAccessTokenAction", this.$route.query.code); // calling action in store and pass code gottten from github

        // return this.$route.query.code;
      } else {
        console.log("There is no code from github");
        return null;
      }
    },
  },
};
</script>
