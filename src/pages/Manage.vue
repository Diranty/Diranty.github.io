<template>
  <div class="content q-px-xl">
    <h4>보증서 관리</h4>
    <div class="row justify-center text-center">
      <div class="q-px-md">
        <div class="row"><q-space/><q-btn flat label="X" @click="del = true"/></div>
        <img width="100px" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/Y148E8/aa/a1/98/aaa19862a6ab4288bf5e4e98ad6e43f5/images/%EB%B3%B4%EC%A6%9D%EC%84%9C%EA%B4%80%EB%A6%AC%ED%8E%98%EC%9D%B4%EC%A7%80/image_u188.jpg?token=0669da53020f017d2ae58b2bad83390f0f2b03af8e69ddeabcdf1ff665d979e7">
        <div>노트북 xzd</div>
        <router-link :to="'/notebook'" style="text-decoration: none; color: black">
          <q-btn class="q-mt-md" style="width: 100px" label="보증서"/>
        </router-link>
      </div>
      <div class="q-px-md">
        <div class="row"><q-space/><q-btn flat label="X" @click="del = true"/></div>
        <img width="100px" src="https://d1icd6shlvmxi6.cloudfront.net/gsc/Y148E8/aa/a1/98/aaa19862a6ab4288bf5e4e98ad6e43f5/images/%EB%B3%B4%EC%A6%9D%EC%84%9C%EA%B4%80%EB%A6%AC%ED%8E%98%EC%9D%B4%EC%A7%80/image_u189.jpg?token=59d60fdbb6536ee2c8f65a6da884d4d273051bf032d138331e581b00bad98d1c">
        <div>시계 yy7</div>
        <router-link :to="'/watch'" style="text-decoration: none; color: black">
          <q-btn class="q-mt-md" style="width: 100px" label="보증서"/>
        </router-link>
      </div>
    </div>
    <div class="row justify-center q-pb-lg">
      <router-link :to="'/register'" style="text-decoration: none;">
        <q-btn class="btn text-bold" label="보증서 등록" flat></q-btn>
      </router-link>
    </div>
    <q-dialog v-model="del" persistent>
      <q-card style="width: 400px">
        <q-card-section class="row items-center">
          <q-avatar class="q-ml-sm" icon="mdi-trash-can-outline" color="primary" text-color="white" />
          <span class="q-ml-md">보증서를 정말 삭제하시겠습니까 ? </span>
        </q-card-section>
        <q-card-actions align="right" class="q-pr-md">
          <q-btn flat label="아니요" color="primary" v-close-popup />
          <q-btn flat label="네" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="sass">
.btn
  background: #3f9af7
  color: white
  width: 180px
  margin: 30px 0

</style>

<script>
export default {
  name: 'Manage',
  data () {
    return {
      del: false
    }
  }
}
</script>
