<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="container mx-auto">
      <div class="flex mb-4">
      <div class="w-full bg-gray-500 h-12">
        WELCOME to BAKEBUNNY
      </div>
    </div> 
    </div>
    
    <div class="container mx-auto">
      <ul>
        <li v-for="post in $page.posts.edges" :key="post.id">
          <g-link :to="post.node.path">{{post.node.title}}</g-link>
        </li>
      </ul>
    </div>


  </Layout>
</template>

<page-query>
query Posts{
  posts: allPost{
    edges{
      node{
        id
        title
        path
      }
    }
  }
}

</page-query>


<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>

.home-links a {
  margin-right: 1rem;
}
</style>
