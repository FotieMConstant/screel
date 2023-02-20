<template>
  <!-- default layout for dashbord -->
  <DefaultLayout>
    <div
      @scroll="onScroll"
      class="h-screen pb-40 overflow-y-scroll __hideScroller pt-6 no-scrollbar"
    >
      <!-- post screel -->
      <!-- run the myFeed function when user post a screel successfully -->
      <createScreelCard @userPosted="myFeed(defaultNumberToFetch)" />
      <!--/ post screel -->
      <!-- colourful divider -->
      <div class="text-center">
        <span
          class="inline-block w-1 h-1 rounded-full dark:bg-blue-800 bg-blue-100 ml-1"
        ></span>
        <span
          class="inline-block w-3 h-1 rounded-full dark:bg-blue-700 bg-blue-200 ml-1"
        ></span>
        <span
          class="inline-block w-20 h-1 rounded-full dark:bg-blue-600 bg-blue-300 ml-1"
        ></span>
        <span
          class="inline-block w-3 h-1 rounded-full dark:bg-blue-700 bg-blue-200 ml-1"
        ></span>
        <span
          class="inline-block w-1 h-1 rounded-full dark:bg-blue-800 bg-blue-100 ml-1"
        ></span>
      </div>
      <!--/colourful divider -->
      <!-- user feed view post  -->
      <div>
        <!-- welcome to screel message -->
        <welcomeToScreelBanner class="mt-4" />
        <!-- welcome to screel message -->
        <div v-if="allFeed" class="mt-4 space-y-4">
          <!-- allFeed contains data -->
          <cardPost
            v-for="feed in allFeed"
            :key="feed._id"
            :screel-id="feed._id"
            :profileImage="feed.owner.profile_pic ?? feed.owner.avatar"
            :name="feed.owner.name"
            :userName="feed.owner.username"
            :content="feed.content"
            :postedDate="feed.created_at"
            :tags="feed.tags"
            :loading="false"
            :screel-reactions="feed.screel_reactions"
            @reactOnScreelFinal="reactOnScreelFinal"
          />
          <!--/ allFeed contains data -->
        </div>
        <div
          v-else
          v-for="n in defaultNumberToFetch"
          :key="n"
          class="mt-4 space-y-4"
        >
          <!-- allFeed contains no data -->
          <cardPost :loading="true" @reactOnScreelFinal="reactOnScreelFinal" />
          <!--/ allFeed contains no data -->
        </div>
      </div>
      <!--/ user feed view post  -->

      <!-- show the user they are at the end of their feed -->
      <div
        v-if="totalPostsInMyFeed && allFeed"
        class="mt-5 dark:text-gray-100 text-grayLightMode-400"
      >
        <div v-if="totalPostsInMyFeed === allFeed.length">
          <div class="text-lg font-bold">
            You've reached maximum nerd-itude✨
          </div>
          <div class="font-medium text-sm">
            You've perused all recent updates from the primeval eras of
            awesomeness!😎
          </div>
        </div>
      </div>
      <!--/ show the user they are at the end of their feed -->
    </div>
  </DefaultLayout>
  <!-- default layout dashbord-->
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/Layout/DefaultLayout";
import createScreelCard from "@/components/modules/cards/createScreelCard.vue";
import cardPost from "@/components/modules/cards/cardPost.vue";
import welcomeToScreelBanner from "@/components/modules/cards/welcomeToScreelBanner.vue";

export default {
  name: "HomeView",
  components: {
    DefaultLayout,
    createScreelCard,
    cardPost,
    welcomeToScreelBanner,
  },
  data() {
    return {
      allFeed: null,
      defaultNumberToFetch:
        this.$store.getters["screel/getDefaultNumbOfScreelsToFetch"], //default number of post to be loaded on first page load
      totalPostsInMyFeed: null, //the total number of posts i have in my feeds `ps: coming from the backend`
    };
  },
  mounted() {
    this.myFeed(this.defaultNumberToFetch);
    this.$store.dispatch("screel/getAvailableReactionsAction", {
      _vm: this, //send context to the store
    });
  },
  methods: {
    // function to call for the action from store to fetch for feeds from the backend
    async myFeed(numb) {
      let responseFeed = await this.$store.dispatch(
        "screel/getUserFeedsAction",
        {
          _vm: this,
          pageNumber: numb, // page number to fetch
        }
      );
      // this.$toast.success("Your latest screels are here!😎", {
      //   position: "bottom",
      // });
      console.log(responseFeed.total);
      this.allFeed = responseFeed.data; // assigning the actual feed array gotten from the backend to the allFeed for display
      this.totalPostsInMyFeed = responseFeed.total; // total feed in my feeds
    },
    // check if user scrolled to buttom and load more screels
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("load more screels!!!");
        // check if they contain values
        if (this.allFeed && this.totalPostsInMyFeed) {
          // stop loading more screels if the user has reached the end of their feeds
          if (this.totalPostsInMyFeed === this.allFeed.length) {
            console.log("NO MORE screels to load");
          } else {
            this.myFeed(
              (this.defaultNumberToFetch += this.defaultNumberToFetch + 6)
            );
          }
        }
      }
    },
    async reactOnScreelFinal(payload) {
      Object.assign(payload, { _vm: this });
      const res = await this.$store.dispatch(
        "screel/reacOnScreelAction",
        payload
      );

      const idx = this.allFeed.findIndex((screel) => screel._id === res._id);
      if (idx >= 0) {
        this.allFeed.splice(idx, 1, res);
      }
    },
  },
};
</script>
