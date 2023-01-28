<template>
  <div
    class="dark:bg-gray-800 bg-grayLightMode-100 dark:text-sky-white text-grayLightMode-400 py-5 rounded-curl flex flex-col flex-grow"
  >
    <div class="text-left px-5 __headerBgBlur">
      <div class="font-bold text-xl">Across the glob 🌍</div>
      <div class="font-bold text-sm text-gray-300">
        ONLINE ({{ people ? people.length : 0 }})
      </div>
    </div>
    <div class="mt-2">
      <!-- if people contain data -->
      <div
        v-if="people"
        class="space-y-2 h-72 overflow-y-auto __hideScroller px-5 pt-2"
      >
        <peopleGlobeCard
          v-for="person in people"
          :key="person._id"
          :userId="person._id"
          :name="person.name"
          :userName="person.username"
          :profileImage="person.avatar"
          :alreadyFollow="person.is_followed_by_current_screeler"
          :lastPostTimeStamp="
            person.latest_screel ? person.latest_screel.created_at : null
          "
          :loading="false"
        />
      </div>
      <!--  else show loading -->
      <div
        v-else
        class="space-y-2 h-72 overflow-y-auto __hideScroller px-5 pt-2"
      >
        <peopleGlobeCard v-for="n in 6" :key="n" :loading="true" />
      </div>
    </div>
    <div class="flex-grow"></div>
    <div
      class="text-blue-light mt-4 text-left text-sm font-bold cursor-pointer select-none px-5"
    >
      Show More
    </div>
  </div>
  <!-- footer -->
  <div class="flex space-x-4 py-6 justify-center">
    <!-- github icon -->
    <a
      href="https://github.com/FotieMConstant/screel"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_19357_3058)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0C15.523 0 20 4.58993 20 10.2529C20 14.7819 17.138 18.624 13.167 19.981C12.66 20.082 12.48 19.7618 12.48 19.4888C12.48 19.1508 12.492 18.0468 12.492 16.6748C12.492 15.7188 12.172 15.0949 11.813 14.7769C14.04 14.5229 16.38 13.6558 16.38 9.71777C16.38 8.59777 15.992 7.68382 15.35 6.96582C15.454 6.70682 15.797 5.66395 15.252 4.25195C15.252 4.25195 14.414 3.97722 12.505 5.30322C11.6894 5.07588 10.8467 4.95961 10 4.95801C9.15392 4.95954 8.31194 5.0758 7.497 5.30322C5.586 3.97722 4.746 4.25195 4.746 4.25195C4.203 5.66395 4.546 6.70682 4.649 6.96582C4.01 7.68382 3.619 8.59777 3.619 9.71777C3.619 13.6458 5.954 14.5262 8.175 14.7852C7.889 15.0412 7.63 15.4928 7.54 16.1558C6.97 16.4178 5.522 16.8712 4.63 15.3042C4.63 15.3042 4.101 14.3191 3.097 14.2471C3.097 14.2471 2.122 14.2341 3.029 14.8701C3.029 14.8701 3.684 15.1851 4.139 16.3701C4.139 16.3701 4.726 18.2001 7.508 17.5801C7.513 18.4371 7.522 19.2448 7.522 19.4888C7.522 19.7598 7.338 20.0769 6.839 19.9819C2.865 18.6269 0 14.7829 0 10.2529C0 4.58993 4.478 0 10 0Z"
            fill="#8B949E"
          />
        </g>
        <defs>
          <clipPath id="clip0_19357_3058">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
    <!--/ github icon -->
    <!-- discord icon -->
    <a
      href="https://discord.gg/7mqC4qc7bt"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_19357_3054)">
          <path
            d="M7.9639 9.21729C7.35415 9.21729 6.87378 9.75166 6.87378 10.4042C6.87378 11.0544 7.3654 11.591 7.9639 11.591C8.57253 11.591 9.0529 11.0544 9.0529 10.4042C9.06528 9.75053 8.57253 9.21729 7.9639 9.21729ZM11.8654 9.21729C11.2556 9.21729 10.7753 9.75166 10.7753 10.4042C10.7753 11.0544 11.2669 11.591 11.8654 11.591C12.474 11.591 12.9544 11.0544 12.9544 10.4042C12.9533 9.75053 12.474 9.21729 11.8654 9.21729Z"
            fill="#8B949E"
          />
          <path
            d="M17.0596 0.25H2.73725C2.44887 0.250738 2.16346 0.30827 1.89731 0.419311C1.63116 0.530352 1.38949 0.692728 1.1861 0.897168C0.9827 1.10161 0.821564 1.34411 0.711888 1.61082C0.602212 1.87754 0.546143 2.16324 0.546882 2.45162V16.9011C0.546882 18.1195 1.53013 19.1027 2.73725 19.1027H14.8569L14.2887 17.1239L15.6579 18.3962L16.9505 19.5932L19.25 21.625V2.45162C19.2507 2.16324 19.1947 1.87754 19.085 1.61082C18.9753 1.34411 18.8142 1.10161 18.6108 0.897168C18.4074 0.692728 18.1657 0.530352 17.8996 0.419311C17.6334 0.30827 17.348 0.250738 17.0596 0.25V0.25ZM12.9331 14.2079C12.9331 14.2079 12.5484 13.7489 12.2289 13.3405C13.6284 12.9445 14.1627 12.0692 14.1627 12.0692C13.724 12.3572 13.3077 12.562 12.9331 12.7015C11.5693 13.2723 10.0673 13.428 8.61537 13.1492C8.07886 13.0438 7.55316 12.8895 7.04487 12.688C6.7768 12.5862 6.51628 12.4655 6.26525 12.3269C6.23262 12.3032 6.20112 12.2942 6.16962 12.2729C6.15277 12.2648 6.13782 12.2533 6.12575 12.2391C5.93337 12.1334 5.8265 12.0591 5.8265 12.0591C5.8265 12.0591 6.3395 12.9141 7.69737 13.3202C7.37675 13.7252 6.98075 14.2079 6.98075 14.2079C4.61938 14.1325 3.72275 12.5834 3.72275 12.5834C3.72275 9.14199 5.26175 6.35312 5.26175 6.35312C6.80075 5.19774 8.26437 5.23037 8.26437 5.23037L8.37125 5.35862C6.4475 5.91549 5.55988 6.75924 5.55988 6.75924C5.55988 6.75924 5.79613 6.63099 6.191 6.44987C7.334 5.94812 8.24187 5.80862 8.6165 5.77599C8.68062 5.76587 8.73462 5.75462 8.79875 5.75462C10.6519 5.50489 12.5362 5.85706 14.174 6.75924C14.174 6.75924 13.3291 5.95824 11.5122 5.40249L11.6619 5.23149C11.6619 5.23149 13.1266 5.19887 14.6645 6.35424C14.6645 6.35424 16.2035 9.14311 16.2035 12.5845C16.2035 12.5834 15.2956 14.1325 12.9331 14.2079V14.2079Z"
            fill="#8B949E"
          />
        </g>
        <defs>
          <clipPath id="clip0_19357_3054">
            <rect width="21" height="21" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>

    <!--/ discord icon -->
  </div>
  <!--/ footer -->
</template>

<script>
import peopleGlobeCard from "@/components/modules/cards/peopleGlobeCard.vue";
export default {
  name: "peopleAcrossTheGlobe",
  components: { peopleGlobeCard },
  data() {
    return {
      people: null,
    };
  },
  mounted() {
    this.getUsersAcrossTheGlobe();
  },
  methods: {
    // function to call for users across the globe action from store
    async getUsersAcrossTheGlobe() {
      // get screelers from backend
      let responseScreelers = await this.$store.dispatch(
        "user/getUsersAcrossTheGlobeAction",
        {
          _vm: this,
          pageNumber: 20, // page number to fetch
        }
      ); //
      this.people = responseScreelers.data; // setting the screelers to people

      // console.log("responseScreelers across the globe => ", this.people);
    },
  },
};
</script>
<style lang="scss" scoped></style>
