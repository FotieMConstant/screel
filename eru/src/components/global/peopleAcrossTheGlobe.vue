<template>
  <div
    class="dark:bg-gray-800 bg-grayLightMode-100 dark:text-sky-white text-grayLightMode-400 p-5 rounded-curl"
  >
    <div class="text-left">
      <div class="font-bold text-xl">Across the glob 🌍</div>
      <div class="font-bold text-sm text-gray-300">
        ONLINE ({{ people.length }})
      </div>
    </div>
    <div class="mt-2 space-y-2">
      <peopleGlobeCard
        v-for="person in people"
        :key="person.id"
        :id="person.id"
        :name="person.name"
        :userName="person.userName"
        :profileImage="person.profileImage"
        :isOnline="person.isOnline"
        :alreadyFollow="person.alreadyFollow"
      />
    </div>
    <div
      class="text-blue-light mt-4 text-left text-sm font-bold cursor-pointer select-none"
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
      people: [
        {
          id: 0,
          name: "Lauren Miller",
          userName: "@lauren_miller",
          profileImage: "https://i.pravatar.cc/300",
          isOnline: true,
          alreadyFollow: false,
        },
        {
          id: 2,
          name: "fotiecodes",
          userName: "@fotie_codes",
          profileImage: "https://avatars.githubusercontent.com/u/42372656?v=4",
          isOnline: false,
          alreadyFollow: false,
        },
        {
          id: 3,
          name: "yancodes",
          userName: "@yan_codes",
          profileImage: "https://avatars.githubusercontent.com/u/44243880?v=4",
          isOnline: true,
          alreadyFollow: false,
        },
        {
          id: 4,
          name: "longla afru",
          userName: "@longla_dilan",
          profileImage: "https://avatars.githubusercontent.com/u/44490676?v=4",
          isOnline: false,
          alreadyFollow: true,
        },
        {
          id: 5,
          name: "Jullie Brek",
          userName: "@julliebrek",
          profileImage: "https://i.pravatar.cc/300",
          isOnline: true,
          alreadyFollow: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
