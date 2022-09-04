<template>
  <div class="relative max-w-xs mx-auto mt-40 mb-8">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
    <input
      :value="$store.state.query"
      type="text"
      placeholder="Search for articles"
      class="block p-4 pl-10 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 focus:ring-2 focus:outline-none"
      @input="handleInput($event)"
    />
    <button
      class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="handleSearch"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    handleInput(event) {
      this.$store.commit('setQuery', event.target.value)
    },
    handleSearch() {
      this.$store.dispatch('getArticles')
    },
  },
}
</script>
