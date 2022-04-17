<template>
  <div class="home">
    <div
      class="
        min-h-screen
        flex flex-col
        p-9
        bg-gray-100
        antialiased
        text-gray-700
      "
    >
      <div class="flex-1 flex flex-col sm:flex-row">
        <main class="flex-1 bg-white rounded-md">Content here</main>

        <nav class="order-first sm:w-60 bg-white mr-4 rounded-md">
          <div>
            <div class="m-5 text-left font-bold">People</div>
            <div class="mx-5 text-left">
              <div class="mb-3 uppercase font-bold text-xs text-gray-600">
                online
              </div>
              <!-- people list -->
              <div>
                <div class="flex">
                  <div class="w-12">
                    <img
                      class="rounded-full ring-2 ring-gray-100 w-8 h-8"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    />
                  </div>
                  <div class="">
                    <div class="text-left">
                      <div class="font-bold text-sm flex">
                        <div>Terry Owen</div>
                        <div
                          class="
                            mt-1.5
                            ml-1.5
                            h-2
                            w-2
                            rounded-full
                            ring ring-white
                            bg-green-500
                          "
                        ></div>
                      </div>
                      <div class="text-xs text-gray-400">Working on JQuery</div>
                    </div>
                  </div>
                </div>
              </div>
              <!--/ people list-->
            </div>
            <div></div>
          </div>
        </nav>

        <aside class="sm:w-80 bg-gray-100 ml-4 text-left">
          <ProfilePreviewBox />

          <!-- trending projects -->
          <div class="sm:w-80 bg-white rounded-md mt-6">
            <div class="bg-gray-300 font-bold p-4 rounded-tr-md rounded-tl-md">
              Trending projects
            </div>
            <div class="h-52 overflow-y-auto">
              <div
                v-for="item in 6"
                :key="item"
                class="
                  p-4
                  flex
                  justify-between
                  hover:bg-gray-200
                  cursor-pointer
                "
              >
                <div>
                  <div class="text-base font-bold">JQuery v2.6.4</div>
                  <div class="text-gray-400 text-sm">
                    fotiecode & 545 others
                  </div>
                </div>
                <div class="flex space-x-2">
                  <div
                    class="mt-2 ml-1.5 h-2 w-2 rounded-full bg-green-500"
                  ></div>
                  <div>546</div>
                </div>
              </div>
            </div>
            <div
              class="
                bg-white
                text-yellow-500
                border-t
                font-bold
                p-4
                rounded-br-md rounded-bl-md
                cursor-pointer
              "
            >
              Explore more projects
            </div>
          </div>

          <!--/ trending projects -->
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilePreviewBox from "@/components/ProfilePreviewBox.vue";

export default {
  name: "Home",
  components: {
    ProfilePreviewBox,
  },
};
</script>
