<script setup>
    import Navmenu from "@/components/Navmenu.vue";
    import Header from "../examples/Header.vue";

//image
    import image from "@/assets/img/bg5.jpg";

//sections
    import Information from "../views/Blogs/SingleArticle/Sections/SingleArticleInformation.vue";
    // import OurEffort from "../views/Blogs/SingleArticle/Sections/SingleArticleOurEffort.vue";
    // import Features from "../views/Blogs/SingleArticle/Sections/SingleArticleFeatures.vue";
    // import Posts from "../views/Blogs/SingleArticle/Sections/SingleArticlePosts.vue";
    // import Support from "../views/Blogs/SingleArticle/Sections/SingleArticleSupport.vue";
</script>
<template>
  <div>
    <Navmenu />
    <Header
    minHeight="min-vh-85"
    :image="image"
    mask="mask bg-gradient-dark opacity-8"
    :title="{ variant: 'h1', text: '平台功能介绍', class: 'mb-0' }"
    :description="{
      text: 'The time is now for it be okay to be great. People in this world shun people for being nice.',
      class: 'pe-sm-5 me-sm-5  opacity-8',
    }"
  >
    <h5 class="mt-3 text-white"></h5>

    <div class="d-flex justify-content-start">
      <a href="javascript:;"
        ><i class="fab fa-facebook text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-instagram text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-twitter text-white me-4 text-lg"></i
      ></a>
      <a href="javascript:;"
        ><i class="fab fa-google-plus text-white text-lg"></i
      ></a>
    </div>
  </Header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <section class="py-5 mt-5">
      <Information />
    </section>
  </div>
  </div>
</template>

<style lang="scss"></style>