<template>
  <div
    class="dark:bg-gray-800 bg-grayLightMode-100 dark:text-sky-white text-grayLightMode-400 py-5 rounded-curl"
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
          :id="person._id"
          :name="person.name"
          :userName="person.username"
          :profileImage="person.avatar"
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
      <!-- <peopleGlobeCard
        v-for="person in people"
        :key="person.id"
        :id="person.id"
        :name="person.name"
        :userName="person.userName"
        :profileImage="person.profileImage"
        :isOnline="person.isOnline"
        :alreadyFollow="person.alreadyFollow"
      /> -->
    </div>
    <div
      class="text-blue-light mt-4 text-left text-sm font-bold cursor-pointer select-none px-5"
    >
      Show More
    </div>
  </div>
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
