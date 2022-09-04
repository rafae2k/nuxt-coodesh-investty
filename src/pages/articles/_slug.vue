<template>
  <main
    v-if="article.id"
    class="container mx-auto flex flex-col items-center my-24 gap-8"
  >
    <div class="prose">
      <img
        :src="article.featured_media.large"
        alt=""
        class="w-full object-cover rounded-md"
      />
      <h1 class="text-4xl font-bold">{{ article.title }}</h1>
      <h2 class="text-gray-400 font-normal">{{ article.headline }}</h2>
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="prose" v-html="article.content" />
  </main>
</template>

<script>
export default {
  name: 'ArticlePage',
  data() {
    return {
      article: {},
      loading: false,
      error: null,
    }
  },
  async mounted() {
    const article = await this.$axios.$get(`/posts/${this.$route.params.id}`)
    this.article = article
  },
}
</script>
