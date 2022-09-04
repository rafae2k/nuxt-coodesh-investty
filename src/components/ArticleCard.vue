<template>
  <article
    class="w-80 h-80 group flex flex-col justify-start gap-4 p-4 bg-white rounded-lg shadow-md hover:ring-2 hover:ring-blue-500 hover:scale-[1.02] transition-all"
  >
    <img
      v-if="article.featured_media"
      :src="article.featured_media.medium"
      :alt="article.excerpt"
      class="w-full h-48 object-cover rounded-sm"
    />

    <img
      v-else
      src="https://picsum.photos/200"
      alt="Placeholder image"
      class="w-full h-48 object-cover rounded-sm"
    />

    <div class="flex flex-col gap-2 justify-between h-full">
      <h2
        class="text-xl font-bold line-clamp-2 group-hover:text-blue-800 transition-all"
        :title="article.title"
      >
        {{ article.title }}
      </h2>

      <p class="text-sm text-gray-400">
        Published at:

        {{
          new Date(article.published).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })
        }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
