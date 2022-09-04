<template>
  <main
    v-if="article.id"
    class="container flex flex-col items-center gap-8 mx-auto my-24"
  >
    <div class="prose">
      <img
        :src="article.featured_media.large"
        alt=""
        class="object-cover w-full rounded-md"
      />
      <h1 class="text-4xl font-bold">{{ article.title }}</h1>
      <h2 class="font-normal text-gray-400">{{ article.headline }}</h2>
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
    const article = await this.$axios.$get(`/posts/${this.$route.params.id}`, {
      progress: true,
    })
    this.article = article
  },
}
</script>
