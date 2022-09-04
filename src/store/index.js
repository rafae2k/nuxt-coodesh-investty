export const state = () => ({
  query: '',
  articles: [],
  loading: false,
  error: null,
})

export const mutations = {
  setQuery(state, query) {
    state.query = query
  },
  setArticles(state, articles) {
    state.articles = articles
  },
  setLoading(state, loading) {
    state.loading = loading
  },
}

export const actions = {
  async getArticles({ state, commit }, options = {}) {
    options.page = options.page || 1
    options.orderBy = options.orderBy || 'relevance'

    const { page, orderBy } = options

    try {
      commit('setLoading', true)
      await this.$axios
        .$get(
          `/posts?search=${state.query}&page=${page}&orderby=${orderBy}&per_page=9`
        )
        .then((response) => {
          commit('setArticles', response)
        })
    } catch (error) {
      commit('setError', error)
    } finally {
      commit('setLoading', false)
    }
  },
}
