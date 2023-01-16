<template>
  <div
    class="my-auto dark:text-gray-200 dark:bg-gray-800 px-6 py-4 h-72 w-96 rounded-curl shadow-lg"
  >
    <div class="text-left space-y-2">
      <div class="text-3xl font-bold dark:text-gray-100">Welcome</div>
      <div class="text-sm">
        By logging in you accept our
        <a
          class="text-blue-light hover:text-blue-accent"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >Privacy Policy</a
        >
        and
        <a
          class="text-blue-light hover:text-blue-accent"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >Terms of Service</a
        >
      </div>
    </div>
    <div class="space-y-3 mt-7">
      <button
        @click="withGithub()"
        class="flex justify-center space-x-3.5 bg-grayLightMode-100 border border-grayLightMode-200 hover:bg-grayLightMode-200 dark:border-gray-700 font-bold rounded-curl dark:bg-gray-700 dark:hover:bg-gray-600 w-full px-6 py-2"
      >
        <!-- github icon -->
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_19357_3030)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 0C15.523 0 20 4.58993 20 10.2529C20 14.7819 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.7618 12.48 19.4888C12.48 19.1508 12.492 18.0468 12.492 16.6748C12.492 15.7188 12.172 15.0949 11.813 14.7769C14.04 14.5229 16.38 13.6558 16.38 9.71777C16.38 8.59777 15.992 7.68382 15.35 6.96582C15.454 6.70682 15.797 5.66395 15.252 4.25195C15.252 4.25195 14.414 3.97722 12.505 5.30322C11.6894 5.07588 10.8467 4.95961 10 4.95801C9.15392 4.95954 8.31194 5.0758 7.497 5.30322C5.586 3.97722 4.746 4.25195 4.746 4.25195C4.203 5.66395 4.546 6.70682 4.649 6.96582C4.01 7.68382 3.619 8.59777 3.619 9.71777C3.619 13.6458 5.954 14.5262 8.175 14.7852C7.889 15.0412 7.63 15.4928 7.54 16.1558C6.97 16.4178 5.522 16.8712 4.63 15.3042C4.63 15.3042 4.101 14.3191 3.097 14.2471C3.097 14.2471 2.122 14.2341 3.029 14.8701C3.029 14.8701 3.684 15.1851 4.139 16.3701C4.139 16.3701 4.726 18.2001 7.508 17.5801C7.513 18.4371 7.522 19.2448 7.522 19.4888C7.522 19.7598 7.338 20.0769 6.839 19.9819C2.865 18.6269 0 14.7829 0 10.2529C0 4.58993 4.478 0 10 0Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_19357_3030">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <!--/ github icon -->
        <div>Login with GitHub</div>
      </button>

      <button
        @click="withTwitter()"
        class="hidden justify-center space-x-3.5 bg-grayLightMode-100 border border-grayLightMode-200 hover:bg-grayLightMode-200 dark:border-gray-700 font-bold rounded-curl dark:bg-gray-700 dark:hover:bg-gray-600 w-full px-6 py-2"
      >
        <!-- twitter icon -->
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.29 18.0014C13.837 18.0014 17.965 11.8453 17.965 6.50628C17.965 6.33128 17.965 6.15731 17.953 5.98431C18.7544 5.41401 19.4477 4.70545 20 3.89153C19.2505 4.21918 18.4565 4.43356 17.644 4.52825C18.497 4.02724 19.1383 3.23287 19.448 2.29339C18.6407 2.76441 17.7596 3.09571 16.842 3.27337C16.0892 2.49106 15.0599 2.0346 13.9747 2.00189C12.8895 1.96918 11.8346 2.36302 11.036 3.09857C10.514 3.5792 10.1291 4.18989 9.92052 4.8681C9.71196 5.5463 9.68728 6.26755 9.849 6.95843C8.22359 6.88084 6.63217 6.46526 5.17612 5.7387C3.72008 5.01214 2.43133 3.99031 1.392 2.73821C0.868251 3.62758 0.708074 4.68479 0.944877 5.68939C1.18168 6.69398 1.79718 7.56849 2.663 8.1303C2.01078 8.11179 1.37228 7.93883 0.8 7.62542V7.6762C0.801 9.5992 2.178 11.2552 4.092 11.6362C3.48779 11.7987 2.85463 11.8226 2.24 11.7055C2.777 13.3515 4.318 14.4782 6.073 14.5112C4.34672 15.8444 2.16567 16.4463 0 16.1865C1.88279 17.3739 4.06405 18.0022 6.29 17.9985"
            fill="currentColor"
          />
        </svg>

        <!--/ twitter icon -->
        <div>Login with Twitter</div>
      </button>

      <button
        @click="withGoogle()"
        class="flex justify-center space-x-3.5 bg-grayLightMode-100 border border-grayLightMode-200 hover:bg-grayLightMode-200 dark:border-gray-700 font-bold rounded-curl dark:bg-gray-700 dark:hover:bg-gray-600 w-full px-6 py-2"
      >
        <!-- google icon -->

        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_19357_3047)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.8221 8.74467H10.2121C10.2121 9.74467 10.2121 11.7427 10.2051 12.7427H15.7741C15.5611 13.7417 14.8041 15.1407 13.7351 15.8457C13.7341 15.8447 13.7331 15.8516 13.7311 15.8506C12.3101 16.7886 10.4341 17.0017 9.04111 16.7217C6.85811 16.2887 5.13111 14.7059 4.42911 12.6949C4.43311 12.6919 4.43611 12.6637 4.43911 12.6617C4.00011 11.4137 4.00011 9.74367 4.43911 8.74467C5.00411 6.90767 6.78411 5.23199 8.9691 4.77299C10.7281 4.39999 12.7121 4.80399 14.1711 6.16899C14.3651 5.97899 16.8561 3.54667 17.0431 3.34867C12.0581 -1.16633 4.07711 0.422994 1.09011 6.25199L1.08411 6.26274C0.370004 7.64916 -0.00173368 9.18661 6.07862e-06 10.7461C0.00174584 12.3057 0.376907 13.8418 1.09411 15.2266L1.08411 15.2349C1.74168 16.5021 2.65841 17.6166 3.77479 18.5064C4.89116 19.3962 6.18222 20.0415 7.56411 20.3999C10.5741 21.1899 14.4071 20.6497 16.9741 18.3277L16.9771 18.3306C19.1521 16.3726 20.5061 13.0347 19.8221 8.74467Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_19357_3047">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0 0.740723)"
              />
            </clipPath>
          </defs>
        </svg>

        <!--/ google icon -->
        <div>Login with Google</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginAuth",
  data() {
    return {};
  },
  mounted: function () {},
  methods: {
    // auth with github
    withGithub() {
      window.location.href = `${this.$store.getters.getAPI_DOMAIN}/api/v1/auth/social-login/github`;
      // Set auth type to localStorage
      localStorage.setItem("authType", "github");
    },

    // auth with twitter
    withTwitter() {
      window.location.href = `${this.$store.getters.getAPI_DOMAIN}/api/v1/auth/social-login/twitter`;
      // Set auth type to localStorage
      localStorage.setItem("authType", "twitter");
    },

    // auth with google
    withGoogle() {
      window.location.href = `${this.$store.getters.getAPI_DOMAIN}/api/v1/auth/social-login/google`;
      // Set auth type to localStorage
      localStorage.setItem("authType", "google");
    },
  },
};
</script>

<style lang="scss" scoped></style>
