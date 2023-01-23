<template>
    <div class="autocomplete w-full">
        <TextInput
            class="w-full"
            id="searchauto"
            type="text"
            placeholder="Search by ID, Username, First Name, Last Name"
            @input="onChange"
            v-model="search"
            @keydown.down="onArrowDown"
            @keydown.up="onArrowUp"
            @keydown.enter="onEnter"
        />
        <ul
            id="autocomplete-results"
            v-show="isOpen"
            class="autocomplete-results"
        >
            <li
                class="loading"
                v-if="isLoading"
            >
                Loading results...
            </li>
            <li
                v-else
                v-for="(result, i) in results"
                :key="i"
                @click="setResult(result)"
                class="autocomplete-result"
                :class="{ 'is-active': i === arrowCounter }"
            >
                {{ result.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue';
export default {
    name: 'SearchAutocomplete',
    components: {
        TextInput
    },
    props: {
        items: {
            type: Array,
            required: false,
            default: () => [
                'retest',
                'test 2',
                'lorem',
                'viryl15',
                'viryl',
                'v15',
                'rodyl',
            ],
        },
        isAsync: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    data() {
        return {
            isOpen: false,
            results: [],
            isLoading: false,
            arrowCounter: -1,
            search: ''
        };
    },
    watch: {
        items: function (value, oldValue) {
            this.results = value;
            this.isLoading = false;
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside)
    },
    destroyed() {
        document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
        setResult(result) {
            this.search = result.name;
            this.isOpen = false;
            this.$emit('searchDistributor', result.id);
        },
        filterResults() {
            this.results = this.items.filter((item) => {
                return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            });
        },
        onChange() {
            this.$emit('input', this.search);
            this.isOpen = true;
            if (this.isAsync) {
                this.isLoading = true;
            } else {
                this.filterResults();
                this.isOpen = true;
            }
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.isOpen = false;
                this.arrowCounter = -1;
            }
        },
        onArrowDown() {
            if (this.arrowCounter < this.results.length) {
                this.arrowCounter = this.arrowCounter + 1;
            }
        },
        onArrowUp() {
            if (this.arrowCounter > 0) {
                this.arrowCounter = this.arrowCounter - 1;
            }
        },
        onEnter() {
            this.search = this.results[this.arrowCounter].name;
            this.isOpen = false;
            this.arrowCounter = -1;
        },
    },
};
</script>

<style>
.autocomplete {
    position: relative;
}

.autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
    position: absolute;
    background-color: white;
    width: 100%;
    z-index: 2;
}

.autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
}
</style>
