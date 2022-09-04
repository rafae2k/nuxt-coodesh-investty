export const state = () => ({
  query: '',
  articles: [],
  loading: false,
  error: null,
  pagination: {
    page: 1,
    perPage: 9,
    totalArticles: 0,
    totalPages: 0,
    orderBy: 'relevance',
  },
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
  setPagination(state, pagination) {
    state.pagination = { ...state.pagination, ...pagination }
  },
}

export const actions = {
  async getArticles({ state, commit }) {
    const {
      query,
      pagination: { page, orderBy, perPage },
    } = state

    try {
      commit('setLoading', true)
      await this.$axios
        .$get(
          `/posts?search=${query}&page=${page}&orderby=${orderBy}&per_page=${perPage}`,
          {
            progress: true,
          }
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
  setPagination({ commit, dispatch }, pagination) {
    commit('setPagination', pagination)
    dispatch('getArticles')
  },
}
