<template>
  <div class="dark:bg-gray-800 bg-grayLightMode-100 p-5 rounded-curl">
    <div class="flex space-x-3">
      <img
        class="h-12 rounded-full"
        src="https://avatars.githubusercontent.com/u/42372656?v=4"
        alt=""
      />
      <textarea
        v-model="post.message"
        class="w-full dark:bg-gray-700 p-2 focus:outline-none rounded-curl dark:text-gray-200"
        placeholder="What’s screeling?"
        type="text"
        name=""
        id=""
        style="resize: none"
      />
    </div>
    <div class="flex justify-between mt-3">
      <!-- for adding tags to post -->
      <div
        class="flex flex-wrap space-x-1 ml-14 pl-1 py-1 w-full rounded-chip dark:bg-gray-700 bg-sky-white dark:text-gray-300 text-grayLightMode-400 font-bold text-sm"
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
          type="text"
          :placeholder="tagMessageStatus"
          class="dark:bg-gray-700 rounded-chip p-1 px-2.5 focus:outline-none dark:text-gray-200"
          @keydown.enter="addTag"
          @keydown.delete="removeLastTag"
          :disabled="post.tags.length == maxAcceptedTags ? true : false"
        />
      </div>
      <!--/ for adding tags to post -->
      <div class="ml-2">
        <regularButton
          @clicked="createScreelPost()"
          state="regular"
          text="Screel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import regularButton from "@/components/modules/buttons/regularButton.vue";
export default {
  name: "createScreelCard",
  components: {
    regularButton,
  },
  data() {
    return {
      tagMessageStatus: "add a tag",
      maxAcceptedTags: 4,
      post: { message: null, tags: [] },
    };
  },
  methods: {
    createScreelPost() {
      console.log("creating post", this.post.message, this.post.tags);
      if (this.post.message) {
        // calling action in screel store module
        this.$store.dispatch("screel/postScreelAction", {
          _vm: this,
          data: this.post.message,
        });
      } else {
        this.$toast.error("Post can't be empty", {
          position: "bottom",
        });
      }
    },
    addTag(event) {
      event.preventDefault();
      let val = event.target.value.trim();
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
        console.log(this.post.tags);

        this.checkTagsStatus();
      }
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
  },
};
</script>
<style lang="scss" scoped></style>
