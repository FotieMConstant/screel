<template>
  <div
    class="dark:bg-gray-800 text-left pt-4 bg-sky-white text-grayLightMode-400 shadow-lg rounded-curl dark:text-gray-100 absolute top-8 right-0 w-96 z-100"
  >
    <div class="px-4 pb-4 font-bold text-lg">Notifications</div>
    <div
      class="py-4 px-4 space-y-4 h-52 overflow-y-scroll border-t dark:border-gray-700 border-grayLightMode-200"
    >
      <!-- notification items -->
      <!-- notif about vibe -->
      <div class="flex space-x-3 text-left cursor-pointer">
        <svg
          class="dark:text-gray-600 text-grayLightMode-200"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18.5" cy="18.5" r="18.5" fill="currentColor" />
          <path
            d="M27 19V22C27 23.5913 26.3679 25.1174 25.2426 26.2426C24.1174 27.3679 22.5913 28 21 28H15C13.4087 28 11.8826 27.3679 10.7574 26.2426C9.63214 25.1174 9 23.5913 9 22V16C9 14.4087 9.63214 12.8826 10.7574 11.7574C11.8826 10.6321 13.4087 10 15 10H18M25 15C25.7956 15 26.5587 14.6839 27.1213 14.1213C27.6839 13.5587 28 12.7956 28 12C28 11.2044 27.6839 10.4413 27.1213 9.87868C26.5587 9.31607 25.7956 9 25 9C24.2044 9 23.4413 9.31607 22.8787 9.87868C22.3161 10.4413 22 11.2044 22 12C22 12.7956 22.3161 13.5587 22.8787 14.1213C23.4413 14.6839 24.2044 15 25 15Z"
            stroke="#8B949E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>
          <div class="flex space-x-1 text-sm">
            <div class="font-bold">dougterry3</div>
            <div>vibed to your screel</div>
          </div>
          <div class="text-sm font-bold text-gray-300">22 seconds ago</div>
        </div>
      </div>
      <!--/ notif about vibe -->

      <!-- screel post about vibe -->
      <div class="flex space-x-3 text-left cursor-pointer">
        <svg
          class="dark:text-gray-600 text-grayLightMode-200"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18.5" cy="18.5" r="18.5" fill="currentColor" />
          <g clip-path="url(#clip0_19691_2014)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.9078 16.9891C31.2536 19.8271 30.616 22.698 29.1013 25.1228C27.5867 27.5477 25.2866 29.3801 22.5845 30.3144C19.8824 31.2487 16.9417 31.2285 14.2527 30.2572C11.5637 29.2858 9.289 27.422 7.80781 24.9766C7.64661 24.7107 7.59761 24.3917 7.6716 24.0898C7.74559 23.7878 7.93651 23.5276 8.20234 23.3664C8.46818 23.2052 8.78717 23.1562 9.08913 23.2302C9.39109 23.3042 9.6513 23.4951 9.8125 23.7609C10.6104 25.0785 11.6975 26.1973 12.9915 27.0327C14.2856 27.8681 15.7527 28.3982 17.2819 28.5829C18.8111 28.7676 20.3623 28.6021 21.818 28.0989C23.2738 27.5957 24.596 26.7679 25.6847 25.6783C26.7734 24.5887 27.5999 23.2657 28.1018 21.8094C28.6038 20.3532 28.7679 18.8019 28.5818 17.2729C28.3957 15.7439 27.8643 14.2772 27.0277 12.9839C26.1911 11.6906 25.0714 10.6045 23.7531 9.80781C23.4871 9.64703 23.2958 9.38714 23.2214 9.08532C23.1469 8.7835 23.1955 8.46448 23.3562 8.19844C23.517 7.93239 23.7769 7.74112 24.0787 7.66669C24.3806 7.59226 24.6996 7.64077 24.9656 7.80156C26.5879 8.78217 27.9659 10.1189 28.9954 11.7106C30.0248 13.3023 30.6788 15.1073 30.9078 16.9891ZM20.0625 7.5625C20.0625 7.9769 19.8979 8.37433 19.6049 8.66735C19.3118 8.96038 18.9144 9.125 18.5 9.125C18.0856 9.125 17.6882 8.96038 17.3951 8.66735C17.1021 8.37433 16.9375 7.9769 16.9375 7.5625C16.9375 7.1481 17.1021 6.75067 17.3951 6.45765C17.6882 6.16462 18.0856 6 18.5 6C18.9144 6 19.3118 6.16462 19.6049 6.45765C19.8979 6.75067 20.0625 7.1481 20.0625 7.5625ZM10.3812 13.8125C10.4855 13.6347 10.5535 13.4381 10.5814 13.2339C10.6093 13.0298 10.5966 12.8221 10.5439 12.6229C10.4912 12.4237 10.3997 12.2368 10.2745 12.0732C10.1493 11.9095 9.99303 11.7722 9.81457 11.6691C9.63612 11.5661 9.43905 11.4994 9.2347 11.4728C9.03036 11.4462 8.82278 11.4604 8.62392 11.5144C8.42505 11.5683 8.23883 11.6611 8.07598 11.7874C7.91312 11.9136 7.77685 12.0709 7.675 12.25C7.47107 12.6087 7.41729 13.0335 7.52539 13.4317C7.6335 13.8299 7.89472 14.1691 8.25204 14.3754C8.60936 14.5817 9.03379 14.6383 9.43269 14.5329C9.83158 14.4274 10.1726 14.1684 10.3812 13.8125ZM7.5625 16.9375C7.9769 16.9375 8.37433 17.1021 8.66735 17.3951C8.96038 17.6882 9.125 18.0856 9.125 18.5C9.125 18.9144 8.96038 19.3118 8.66735 19.6049C8.37433 19.8979 7.9769 20.0625 7.5625 20.0625C7.1481 20.0625 6.75067 19.8979 6.45765 19.6049C6.16462 19.3118 6 18.9144 6 18.5C6 18.0856 6.16462 17.6882 6.45765 17.3951C6.75067 17.1021 7.1481 16.9375 7.5625 16.9375ZM13.8125 10.3812C13.9916 10.2794 14.1489 10.1431 14.2751 9.98027C14.4014 9.81742 14.4942 9.6312 14.5481 9.43233C14.6021 9.23347 14.6163 9.02589 14.5897 8.82155C14.5631 8.6172 14.4964 8.42013 14.3934 8.24168C14.2903 8.06322 14.153 7.90691 13.9893 7.78174C13.8257 7.65657 13.6388 7.56502 13.4396 7.51235C13.2404 7.45968 13.0327 7.44693 12.8286 7.47485C12.6244 7.50276 12.4278 7.57079 12.25 7.675C11.8941 7.88367 11.6351 8.22467 11.5296 8.62356C11.4242 9.02246 11.4808 9.44689 11.6871 9.80421C11.8934 10.1615 12.2326 10.4228 12.6308 10.5309C13.029 10.639 13.4538 10.5852 13.8125 10.3812Z"
              fill="#8B949E"
            />
            <rect
              x="18.0688"
              y="13.7588"
              width="2.58621"
              height="7.75862"
              rx="1.2931"
              fill="#8B949E"
            />
            <rect
              width="2.58621"
              height="5.46844"
              rx="1.2931"
              transform="matrix(0.00568134 0.999984 0.999984 -0.00568134 15.1797 18.9844)"
              fill="#8B949E"
            />
          </g>
          <defs>
            <clipPath id="clip0_19691_2014">
              <rect
                width="25"
                height="25"
                fill="white"
                transform="translate(6 6)"
              />
            </clipPath>
          </defs>
        </svg>

        <div class="text-sm">
          <div class="flex space-x-1">
            <div class="font-bold">johndoe</div>
            <div>posted a screel update 🚀</div>
          </div>
          <div class="text-blue-light font-medium">
            Check it out before it disappears in 24h
          </div>
          <div class="text-sm font-bold text-gray-300">1 minute ago</div>
        </div>
      </div>
      <!--/ screel post about vibe -->

      <!-- screel post about vibe -->
      <div
        v-for="person in people"
        :key="person.id"
        class="text-left cursor-pointer"
      >
        <div class="flex justify-between">
          <div class="flex space-x-2">
            <div class="relative">
              <img
                class="h-10 rounded-full"
                :src="person.profileImage"
                alt=""
              />

              <div
                v-show="person.isOnline"
                class="w-3 h-3 bg-blue-accent rounded-full my-auto border-2 absolute right-0 bottom-1 dark:border-gray-800 border-grayLightMode-100"
              ></div>
            </div>
            <div class="text-left">
              <div class="dark:text-gray-100 text-grayLightMode-400">
                <span class="font-bold">{{ person.name }}</span> followed you
              </div>
              <div class="text-sm font-bold text-gray-300">
                {{ person.timeAgo }}
              </div>
            </div>
          </div>
          <!-- if current user logged in alreadyFollow this user-->
          <button
            @mouseover="hoveredOnFollowing = true"
            @mouseleave="hoveredOnFollowing = false"
            v-if="person.alreadyFollow"
            class="font-bold text-sm dark:bg-gray-600 dark:hover:bg-gray-700 bg-grayLightMode-100 hover:bg-grayLightMode-200 dark:text-gray-100 text-grayLightMode-400 rounded-chip px-3 py-1 my-auto h-7"
          >
            {{ hoveredOnFollowing ? "Unfollow" : "Followed" }}
          </button>
          <!-- else -->
          <button
            v-else
            class="font-bold text-sm dark:bg-blue-light dark:hover:bg-blue-accent bg-blue-light hover:bg-blue-accent text-sky-white rounded-chip px-2 py-1 my-auto h-7"
          >
            Follow back
          </button>
        </div>
      </div>
      <!--/ screel post about vibe -->
      <!--/ notification items -->
    </div>
  </div>
</template>

<script>
export default {
  name: "OverlayNotifications",
  props: {},
  data() {
    return {
      // sample data
      isOnline: true,
      hoveredOnFollowing: false,
      //   alreadyFollow: true,
      people: [
        {
          id: 0,
          name: "Lauren Miller",
          timeAgo: "10 minutes ago",
          profileImage: "https://i.pravatar.cc/300",
          isOnline: true,
          alreadyFollow: true,
        },
        {
          id: 2,
          name: "fotiecodes",
          timeAgo: "30 minutes ago",
          profileImage: "https://avatars.githubusercontent.com/u/42372656?v=4",
          isOnline: false,
          alreadyFollow: false,
        },
        {
          id: 3,
          name: "yancodes",
          timeAgo: "1 hour(s) ago",
          profileImage: "https://avatars.githubusercontent.com/u/44243880?v=4",
          isOnline: true,
          alreadyFollow: false,
        },
        {
          id: 4,
          name: "longla afru",
          timeAgo: "5 hour(s) ago",
          profileImage: "https://avatars.githubusercontent.com/u/44490676?v=4",
          isOnline: false,
          alreadyFollow: true,
        },
        {
          id: 5,
          name: "Jullie Brek",
          timeAgo: "Yesterday",
          profileImage: "https://i.pravatar.cc/300",
          isOnline: true,
          alreadyFollow: false,
        },
      ],
    };
  },
};
</script>
<style scoped></style>
