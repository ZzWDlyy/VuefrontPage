<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
import Navmenu from "@/components/Navmenu.vue"
// example components
import AboutUsOption from "@/views/LandingPages/Coworking/Components/AboutUsOption.vue";
// example component
import DefaultBackgroundCard from "@/examples/cards/backgroundCards/DefaultBackgroundCard.vue";

// local component
import ListItem from "@/views/Support/HelpCenter/Components/ListItem.vue";

// images
import bg1 from "@/assets/img/examples/color1.jpg";
import bg2 from "@/assets/img/examples/color3.jpg";
  import { useRouter } from 'vue-router'

  // 获取路由实例
  const router = useRouter()

  // 定义点击事件处理程序
  function handleClick() {
    router.push({ name: 'Login' })
  }
</script>
<template>
 <div>
  <header>
    <Navmenu />
    <div class="page-header min-vh-100"
      id = "head"
      loading="lazy">
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 class="text-white mb-4">3D智慧医疗</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              -------基于百度padlepadle平台的cv分析平台
            </p>
            <div class="buttons">
              <MaterialButton color="white" class="mt-4"
                @click="handleClick">快速开始</MaterialButton>
              <!-- <MaterialButton color="none" class="text-white shadow-none mt-4"
                >Read more</MaterialButton> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- 内容介绍 -->
   <section class="py-9" id = "section2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <h3>为什么要创建该平台？</h3>
          <p class="pe-5">
            3D智慧医疗平台可以利用人工智能技术，对医学影像进行快速、准确的诊断。相比传统的2D医学影像，3D医学影像可以提供更多的信息，帮助医生更准确地诊断和制定治疗方案。
          </p>
          <a href="javascript:;" class="text-success icon-move-right"
            >了解更多
            <i class="fas fa-arrow-right text-sm ms-1"></i>
          </a>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="3D智慧医疗平台可以实现自动化诊断，减少医生的劳动强度，提高诊断效率。"
          />
          <AboutUsOption
            icon="settings_overscan"
            content="3D医学影像可以通过云平台进行共享，让医生、患者和医疗机构之间更加紧密地联系起来。"
          />

          <AboutUsOption
            icon="token"
            content="通过3D智慧医疗平台，可以实现医学影像的数字化管理，降低医疗成本。"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- 简述使用方法 -->
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-10 ms-auto me-auto text-center">
          <div class="p-3 info-hover-warning">
            <div
              class="icon icon-shape bg-gradient-success shadow icon-shape-circle text-success"
            >
              <i class="fa fa-cogs"></i>
            </div>
          </div>
          <h3 class="mt-4">How To Handle Them</h3>
          <p>
            We’re constantly trying to express ourselves and actualize our
            dreams. Don't stop.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 ms-auto my-auto">
          <DefaultBackgroundCard
            :image="bg1"
            label="Website visitors"
            title="The Best Productivity Apps on Market"
            description="As we live, our hearts turn colder. Cause pain is what we go
                  through as we become older. We get insulted by others, lose
                  trust for those others."
          />
        </div>
        <div class="col-md-5 me-auto my-auto ms-md-5">
          <ListItem title="1. Listen to Social Conversations">
            Gain access to the demographics, psychographics, and location of
            unique people who are interested and talk about your brand.
          </ListItem>
          <ListItem title="2. Performance Analyze">
            Gain access to the demographics, psychographics, and location of
            unique people who are interested and talk about your brand.
          </ListItem>
          <ListItem title="3. Social Conversions">
            Track actions taken on your website that originated from social, and
            understand the impact on your bottom line.
          </ListItem>
        </div>
      </div>
      <hr class="horizontal dark my-sm-6 my-3 mx-7" />
      <div class="row">
        <div class="col-md-5 ms-auto my-auto">
          <ListItem title="1. Always In Sync">
            No matter where you are, Trello stays in sync across all of your
            devices.
          </ListItem>
          <ListItem title="2. Work With Any Team">
            Whether it’s for work or even the next family vacation, Trello helps
            your team.
          </ListItem>
          <ListItem title="3. A Productivity Platform">
            Integrate the apps your team already uses directly into your
            workflow.
          </ListItem>
        </div>
        <div class="col-md-4 me-auto my-auto ms-md-5">
          <DefaultBackgroundCard
            :image="bg2"
            label="Social activities"
            title="Working on Wallstreet is Not So Easy"
            description="There’s nothing I really wanted to do in life that I wasn’t
                  able to get good at. I’m not really specifically talented at
                  anything except for the ability to learn."
          />
        </div>
      </div>
    </div>
  </section>
  <!-- 数据统计 -->

  
  </div>
</template>

<style scoped>
#head{
  background-image: url('../assets/own/bg.jpg');
}
#section2{
  /* background-image: url('../assets/own/bg2.png'); */
}
</style>