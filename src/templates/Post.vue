<template>
    <Layout>
        <div class="container mx-auto">
            <img :src="$page.post.thumbnail" width="500" alt="">
            <div class="markdown-body" v-html="$page.post.content"></div>
        </div>
    </Layout>
</template>


<page-query>

query Post ($path: String!){
  post: post (path: $path){
    title
    content
    thumbnail
  }
}

</page-query>


<script>
export default {
    
    metaInfo() {
        return{
            title: this.$page.post.title
        }
    }
}
</script>