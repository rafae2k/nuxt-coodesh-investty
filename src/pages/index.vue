<template>
  <div
    class="container flex flex-col items-center h-full min-h-screen mx-auto mb-20"
  >
    <Search />

    <div v-if="$store.state.loading" class="flex gap-2">
      <p>Loading...</p>
    </div>

    <div
      v-if="!$store.state.loading && $store.state.articles?.data?.length === 0"
    >
      Não existem artigos relacionados ao termo pesquisado!
    </div>

    <main
      v-if="!$store.state.loading && $store.state.articles?.data?.length > 0"
      class="flex flex-col items-center justify-center gap-4"
    >
      <select id="orderBy" name="orderBy" @change="handleOrderChange($event)">
        <option value="date">Data</option>
        <option value="relevance">Relevância</option>
        <option value="title">Título</option>
      </select>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <nuxt-link
          v-for="article in $store.state.articles.data"
          :key="article.id"
          :to="{
            name: 'articles-slug',
            params: { id: article.id, slug: article.slug },
          }"
        >
          <ArticleCard :article="article" />
        </nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import ArticleCard from '../components/ArticleCard.vue'

export default {
  name: 'IndexPage',
  components: { Search, ArticleCard },
  head: {
    title: 'Translation, Inc.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Buscador de artigos para facilitar aos usuários encontrarem conteúdos personalizados sobre saúde e nutrição.',
      },
    ],
  },
  methods: {
    handleOrderChange(event) {
      this.$store.dispatch('getArticles', { orderBy: event.target.value })
    },
  },
}
</script>
