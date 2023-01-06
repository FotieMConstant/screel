<script setup>
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';
import NavLink from '@/components/NavLink.vue';
import ApplicationMark from '@/components/ApplicationMark.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center py-1 px-3 sm:pt-0 bg-gray-100">
        <nav class="w-full bg-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="shrink-0 flex items-center">
                            <Link :href="route('order')">
                                NaXum
                            </Link>
                        </div>

                        <!-- Navigation Links -->
                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink :href="route('order')" :active="route().current('order')">
                                Dashboard
                            </NavLink>
                            <NavLink :href="route('rank.report')" :active="route().current('rank.report')">
                                Rank Report
                            </NavLink>
                        </div>
                    </div>

                    <div class="hidden sm:flex sm:items-center sm:ml-6">



                    </div>

                    <!-- Hamburger -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition" @click="showingNavigationDropdown = ! showingNavigationDropdown">
                            <svg
                                class="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <div class="w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <slot />
        </div>
    </div>
</template>
