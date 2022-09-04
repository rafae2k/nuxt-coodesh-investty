<template>
  <div class="flex justify-between gap-10">
    <button
      class="px-4 py-2 font-bold text-white transition-all bg-blue-500 rounded hover:bg-blue-700 disabled:opacity-50"
      :disabled="$store.state.pagination.page === 1"
      @click="prevPage"
    >
      Prev
    </button>
    <button
      class="px-4 py-2 font-bold text-white transition-all bg-blue-500 rounded hover:bg-blue-700"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  methods: {
    prevPage() {
      this.$store.dispatch('setPagination', {
        page:
          this.$store.state.pagination.page > 1 ??
          this.$store.state.pagination.page - 1,
      })
    },
    nextPage() {
      this.$store.dispatch('setPagination', {
        page: this.$store.state.pagination.page + 1,
      })
    },
  },
}
</script>
