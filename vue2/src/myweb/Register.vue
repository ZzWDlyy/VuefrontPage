<script setup>
import { onMounted } from "vue";

// example components
import Header from "@/examples/Header.vue";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
//Vue Material Kit 2 Pro components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Navmenu from "@/components/Navmenu.vue"

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <div>
  <Navmenu />
  <!-- <DefaultNavbar transparent /> -->
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    加入我们
                  </h4>
                  <div color="text-white" id="text">
                    <!-- <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div> -->
                    欢迎来到3D智慧医疗平台！
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                    <MaterialInput
                id="email"
                class="input-group-outline mb-3"
                :label="{ text: 'Email', class: 'form-label' }"
                type="email"
              />
              <MaterialInput
                id="password"
                class="input-group-outline mb-3"
                :label="{ text: 'Password', class: 'form-label' }"
                type="password"
                 minlength="6"
                maxlength="18"
                pattern="^(?=.*[a-zA-Z])(?=.*\d).{6,}$" 
                title="密码必须包含至少一个数字和一个字母，长度至少为 6。"
                required
              />
              <MaterialInput
                id="password"
                class="input-group-outline mb-3"
                :label="{ text: 'confirm', class: 'form-label' }"
                type="password"
                minlength="6"
                maxlength="18"
                pattern="^(?=.*[a-zA-Z])(?=.*\d).{6,}$" 
                title="密码必须包含至少一个数字和一个字母，长度至少为 6。"
                required
              />
              <MaterialCheckbox id="toc"  v-model="checked">
                我同意
                <a href="javascript:;" class="text-dark font-weight-bolder"
                  >相关协议</a
                >
              </MaterialCheckbox>
              <div class="text-center">
                <MaterialButton
                  class="my-4 mb-2"
                  variant="gradient"
                  color="success"
                  fullWidth
                  >注册</MaterialButton
                >
              </div>
                </form>
                <div class="card-footer text-center pt-0 px-sm-4 px-1">
            <p class="mb-4 mx-auto">
              已经有账户了?
              <a
                href="../login"
                class="text-success text-gradient font-weight-bold"
                >登陆</a
              >
            </p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
</div>
</template>
<style>
#text{
  text-align: center;
  padding-left: 0px;
  color: aliceblue;
  font-weight: 100;
}

</style>
