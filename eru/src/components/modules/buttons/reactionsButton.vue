<template>
  <div class="relative">
    <!-- default emojis -->
    <div
      @click="toggleShowEmojiList = !toggleShowEmojiList"
      class="flex space-x-1 dark:bg-gray-700 border dark:border-gray-600 bg-grayLightMode-200 dark:text-gray-300 text-grayLightMode-400 px-2 py-1 my-auto rounded-curl font-bold select-none cursor-pointer text-sm m-1"
    >
      <div>
        <!-- if the user has selected his prefered emoji -->
        <img
          class="h-5"
          v-if="currentEmoji"
          :src="currentEmoji"
          alt=""
          srcset=""
        />
        <svg
          v-else
          class="h-5"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.375 7.08333H6.38208M10.625 7.08333H10.6321M2.125 8.5C2.125 9.33718 2.28989 10.1662 2.61027 10.9396C2.93064 11.7131 3.40022 12.4158 3.99219 13.0078C4.58417 13.5998 5.28694 14.0694 6.06039 14.3897C6.83384 14.7101 7.66282 14.875 8.5 14.875C9.33718 14.875 10.1662 14.7101 10.9396 14.3897C11.7131 14.0694 12.4158 13.5998 13.0078 13.0078C13.5998 12.4158 14.0694 11.7131 14.3897 10.9396C14.7101 10.1662 14.875 9.33718 14.875 8.5C14.875 7.66282 14.7101 6.83384 14.3897 6.06039C14.0694 5.28694 13.5998 4.58417 13.0078 3.99219C12.4158 3.40022 11.7131 2.93064 10.9396 2.61027C10.1662 2.28989 9.33718 2.125 8.5 2.125C7.66282 2.125 6.83384 2.28989 6.06039 2.61027C5.28694 2.93064 4.58417 3.40022 3.99219 3.99219C3.40022 4.58417 2.93064 5.28694 2.61027 6.06039C2.28989 6.83384 2.125 7.66282 2.125 8.5Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.729 10.625C6.95983 10.8606 7.23535 11.0478 7.53943 11.1755C7.8435 11.3033 8.17001 11.3691 8.49984 11.3691C8.82966 11.3691 9.15618 11.3033 9.46025 11.1755C9.76432 11.0478 10.0398 10.8606 10.2707 10.625"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="my-auto">{{ emojiCounter }}</div>
    </div>
    <!--/ default emojis -->

    <!-- all emoji list -->
    <Transition name="bounce">
      <div v-show="toggleShowEmojiList" class="absolute -top-10 -right-14">
        <div
          class="flex space-x-3 w-max dark:bg-gray-700 border dark:border-gray-600 bg-grayLightMode-200 dark:text-gray-300 text-grayLightMode-400 px-3 py-1 my-auto rounded-curl font-bold select-none cursor-pointer text-sm h-10"
        >
          <div
            @click="
              (toggleShowEmojiList = !toggleShowEmojiList),
                (emojiCounter += 1),
                (currentEmoji = emoj.animatedEmoj)
            "
            v-for="emoj in emojisList"
            :key="emoj.id"
            class="my-auto mt-1 wiggle"
          >
            <img
              class="h-6 transform transition duration-500 hover:scale-150"
              :src="emoj.animatedEmoj"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </Transition>

    <!--/ all emoji list -->
  </div>
</template>

<script>
export default {
  name: "reactionsButton",
  data() {
    return {
      currentEmoji: null,
      emojiCounter: 0,
      toggleShowEmojiList: false, // to show the list of emojis or not
      emojisList: [
        {
          id: 0,
          label: "Vibe",
          staticEmoj: "..",
          animatedEmoj:
            "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp",
        },
        {
          id: 1,
          label: "Funny",
          staticEmoj: "..",
          animatedEmoj:
            "https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.webp",
        },
        {
          id: 2,
          label: "Happy-cry",
          staticEmoj: "..",
          animatedEmoj:
            "https://fonts.gstatic.com/s/e/notoemoji/latest/1f972/512.webp",
        },
        {
          id: 3,
          label: "Fire",
          staticEmoj: "..",
          animatedEmoj:
            "https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

/*SHAKER*/
@keyframes wiggle {
  70% {
    transform: translateY(0%);
  }
  80% {
    transform: translateY(-15%);
  }
  90% {
    transform: translateY(0%);
  }
  95% {
    transform: translateY(-7%);
  }
  97% {
    transform: translateY(0%);
  }
  99% {
    transform: translateY(-3%);
  }
  100% {
    transform: translateY(0);
  }
}

.wiggle {
  animation: none;
}
.wiggle:hover {
  animation: wiggle 2s infinite;
}
/*END SHAKER*/
</style>
