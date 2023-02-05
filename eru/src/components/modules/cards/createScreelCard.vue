<template>
  <div class="dark:bg-gray-800 bg-grayLightMode-100 p-5 rounded-curl">
    <div class="flex space-x-3">
      <img class="h-12 rounded-full" :src="currentUser.avatar" alt="" />
      <div class="flex flex-col items-stretch flex-grow">
        <div class="w-full relative">
          <textarea
            v-model="post.message"
            class="w-full dark:bg-gray-700 p-2 focus:outline-none rounded-curl dark:text-gray-200"
            placeholder="What’s screeling?"
            type="text"
            name=""
            id="__inputScreelPost"
            style="resize: none"
            :maxlength="maxAcceptedPostMessage"
          />
          <!-- display counter for messages -->
          <div
            :class="
              post.message
                ? maxAcceptedPostMessage - post.message.length < 20
                  ? `text-yellow-500`
                  : `text-green-500`
                : null
            "
            class="text-xs font-bold absolute right-3 bottom-3 text-green-500"
          >
            {{
              post.message
                ? maxAcceptedPostMessage - post.message.length
                : maxAcceptedPostMessage
            }}
          </div>
          <!--/ display counter for messages -->
        </div>

        <div class="flex justify-between mt-3">
          <!-- for adding tags to post -->
          <div
            class="flex flex-wrap space-x-1 pl-1 py-1 w-full rounded-chip dark:bg-gray-700 bg-grayLightMode-100 dark:text-gray-300 text-grayLightMode-400 font-bold text-sm relative"
          >
            <div
              v-for="(tag, index) in post.tags"
              :key="tag"
              class="flex space-x-1 dark:bg-gray-600 bg-grayLightMode-200 px-2 h-fit my-auto py-0.5 rounded-chip select-none cursor-pointer"
            >
              <div class="my-auto">{{ tag }}</div>
              <svg
                @click="removeTag(index)"
                class="h-3 my-auto"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 0C6.2 0 0 6.2 0 14C0 21.8 6.2 28 14 28C21.8 28 28 21.8 28 14C28 6.2 21.8 0 14 0ZM19.4 21L14 15.6L8.6 21L7 19.4L12.4 14L7 8.6L8.6 7L14 12.4L19.4 7L21 8.6L15.6 14L21 19.4L19.4 21Z"
                  fill="#1F6FEB"
                />
              </svg>
            </div>
            <input
              id="__tag"
              type="text"
              :placeholder="tagMessageStatus"
              :class="
                post.tags.length == maxAcceptedTags
                  ? 'placeholder-red-600'
                  : 'false'
              "
              class="dark:bg-gray-700 bg-grayLightMode-100 rounded-chip p-1 px-2.5 focus:outline-none dark:text-gray-200 flex-grow"
              v-model="currentTag"
              @click.stop="() => {}"
              @keydown.enter="addTag"
              @keydown.delete="removeLastTag"
              @keydown.space.prevent
              @input="displayTagSuggestions"
              :disabled="post.tags.length == maxAcceptedTags ? true : false"
            />

            <!-- Tags suggestions dropdown -->

            <transition name="fade">
              <ul
                v-if="currentTag && matchingTags.length > 0"
                @click.stop="() => {}"
                class="tags-list absolute top-[95%] -left-[3.5px] w-full p-2 z-10 shadow rounded-sm mx-auto max-h-72 overflow-auto dark:bg-gray-700 bg-grayLightMode-100"
              >
                <li
                  v-for="tag in matchingTags"
                  :key="`stag${tag._id}`"
                  class="text-left px-2 py-1 mb-2 border-b border-gray-700 cursor-pointer hover:bg-gray-600"
                  @click="chooseTag(tag.title)"
                >
                  {{ tag.title }}
                </li>
              </ul>
            </transition>
          </div>
          <!--/ for adding tags to post -->
          <div class="ml-2">
            <regularButton
              @clicked="createScreelPost()"
              state="regular"
              text="Screel"
              :classes="'shake-button'"
              :id="'create-screel-btn'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import regularButton from "@/components/modules/buttons/regularButton.vue";
import { mapGetters } from "vuex";
import axios from "@/axios";
import { debounce } from "@/utils";

export default {
  name: "createScreelCard",
  components: {
    regularButton,
  },
  data() {
    return {
      phrases: [
        "What's the nerdy news?",
        "What's the geeky gossip?",
        "What's the science scoop?",
        "What's the tech talk?",
        "What's the nerd nugget?",
        "What's the gaming update?",
        "What's the nerd-o-rama?",
        "What's the geek-a-licious scoop?",
        "What's the nerd-tastic news?",
        "What's the latest in the land of geeks?",
        "What's the nerdy scoop?",
        "What's the geeky update?",
        "What's the science status?",
        "What's the tech tidbit?",
        "What's the nerd knowledge?",
        "What's the gaming gossip?",
        "What's the nerd-o-licious news?",
        "What's the geek-tastic update?",
        "What's the nerd-approved scoop?",
        "What's the latest in the realm of geeks?",
      ],
      tagMessageStatus: "add a tag",
      maxAcceptedTags: 4, //maximum tags allowed
      maxAcceptedPostMessage: 200,
      currentTag: "",
      post: { message: null, tags: [] }, //the post to be sent to the backedn

      matchingTags: [],
    };
  },
  mounted: function () {
    this.typingPlaceholder();
    //Toggle class every 2 seconds
    setInterval(function () {
      const createScreelButton = document.getElementById("create-screel-btn");

      createScreelButton && createScreelButton.classList.toggle("shake-button");
    }, 2000);

    // if tags suggestion is open, close it when we click on the page
    window.addEventListener("click", () => {
      if (this.matchingTags.length > 0) {
        this.matchingTags.length = [];
      }
    });
  },
  computed: {
    // mapping to get current logged in user from store auth module
    ...mapGetters({ currentUser: ["authentication/getCurrentUser"] }),
  },
  methods: {
    async createScreelPost() {
      console.log("creating post", this.post.message, this.post.tags);
      if (this.post.message) {
        // calling action in screel store module and wait for response
        let responsePost = await this.$store.dispatch(
          "screel/postScreelAction",
          {
            _vm: this,
            data: this.post,
          }
        );
        console.log("post of screel successful? => ", responsePost);
        // if user posted a screel successfully emit an event to parent component
        if (responsePost) {
          this.$emit("userPosted");
        } else {
          console.log("posted was not successfully made");
        }
      } else {
        this.$toast.error("Screel field can't be left empty!", {
          position: "bottom",
        });
      }
    },

    async displayTagSuggestions(e) {
      //allow only numbers and letters
      if (!/[0-9a-zA-Z]/i.test(e.data)) {
        e.preventDefault();
        this.currentTag = this.currentTag.replace(e.data, "");
        return;
      }
      if (this.currentTag.length === 0) return; //don't search for empty strings
      let _vm = this;

      // final request is made only 1.5s after user stops typing
      debounce(async () => {
        try {
          const result = await axios.get(
            _vm.$store.getters.getAPI_DOMAIN +
              `/api/v1/tags/${_vm.currentTag}?per_page=50`
          );
          _vm.matchingTags = result.data.data.data;
        } catch (err) {
          this.$toast.error("Oh no, we are unable to load tags at the moment", {
            position: "bottom",
          });
        }
      }, 1200);
    },
    addTag(event) {
      event.preventDefault();
      let val = event.target.value.trim().toLowerCase(); //making it lowercase aswell
      if (val.length > 0) {
        if (this.post.tags.length >= 1) {
          for (let i = 0; i < this.post.tags.length; i++) {
            if (this.post.tags[i] === val) {
              return false;
            }
          }
        }
        this.post.tags.push("#" + val);
        event.target.value = "";

        this.checkTagsStatus();
        this.currentTag = "";
        this.matchingTags = [];
      }
    },

    chooseTag(tag) {
      this.post.tags.push(tag.toLocaleLowerCase());
      this.checkTagsStatus();
      this.currentTag = "";
      this.matchingTags = [];
    },
    removeTag(index) {
      this.post.tags.splice(index, 1);
      this.checkTagsStatus();
    },
    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.post.tags.length - 1);
      }
      this.checkTagsStatus();
    },
    // function to check the tag status and show message
    checkTagsStatus() {
      // for showing max tags and placeholder message
      if (this.post.tags.length == this.maxAcceptedTags) {
        this.tagMessageStatus = "Max tags reached: " + this.maxAcceptedTags;
      } else if (this.post.tags.length > 0) {
        this.tagMessageStatus =
          `add ` +
          (this.maxAcceptedTags - this.post.tags.length) +
          ` more tag(s)`;
      } else if (this.post.tags.length == 0) {
        this.tagMessageStatus = "add a tag";
      }
    },
    // function to get radom phrase from array
    getRandomPhrase() {
      let phrases = this.phrases;
      let randomIndex = Math.floor(Math.random() * phrases.length);
      return phrases[randomIndex];
    },

    // for applying a typing animation to the placeholder
    typingPlaceholder() {
      let text = this.getRandomPhrase();
      // console.log(text);
      var i = 0;
      var placeholderText = "";
      var input = document.getElementById("__inputScreelPost");
      var typingInterval = setInterval(function () {
        if (i < text.length) {
          placeholderText += text.charAt(i);
          input.placeholder = placeholderText;
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
    },
  },
};
</script>
<style scoped>
/* to show lowercase while typing */
#__tag {
  text-transform: lowercase;
}

.tags-list::-webkit-scrollbar {
  width: 10px;
}

.tags-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  /* border-radius: 5px; */
}

.tags-list::-webkit-scrollbar-thumb {
  background: #888;
  /* border-radius: 5px; */
}
.tags-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
