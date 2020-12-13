<template>
  <div class="content q-px-xl">
    <h4>보증서 정보</h4>
    <div class="text-h6">
      <q-icon name="mdi-circle-small"/>
      상품명 : classic petite 32mm
    </div>
    <div class="text-h6 q-py-md">
      <q-icon name="mdi-circle-small"/>
      상품정보 : 다니엘웰링턴 / 시계
    </div>
    <div class="row justify-center">
      <img width="90px" height="100px" class="q-px-sm" src="image/watch.jpg">
      <img width="90px" height="100px" class="q-px-sm" src="image/w1.jpg">
      <img width="90px" height="100px" class="q-px-sm" src="image/2.jpg">
    </div>
    <!-- <div class="row q-pt-lg">
      <div class="text-bold q-pt-sm q-pr-lg">중고 마켓 공개</div>
      <q-radio v-model="open" val="1" label="허용" />
      <q-radio v-model="open" val="2" label="비허용" />
    </div> -->
    <div class="text-h6 q-py-sm">
      <q-icon name="mdi-circle-small"/>
      잔여 보증일 : <span class="text-red">D-50</span>일
    </div>
    <q-linear-progress size="40px" :value="progress" color="primary" class="q-mb-md">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="primary" :label="progressLabel" />
      </div>
    </q-linear-progress>
    <div class="row justify-center"><q-btn label="A/S 접수하기" class="btn1"/></div>
    <div class="row justify-center"><q-btn label="상담하기" class="btn2"/></div>
    <div class="row justify-center q-pb-lg">
      <router-link :to="'/manage'" style="text-decoration: none; ">
        <q-btn label="뒤로가기" class="btn3 text-bold"/>
      </router-link>
    </div>
  </div>
</template>

<style lang="sass">
.btn1, .btn2, .btn3
  width: 270px
  height: 40px
  margin: 10px 0

.btn3
  background: black
  color: #b89130
  border: 4px solid #b89130

</style>

<script>
export default {
  name: 'Watch',
  data () {
    return {
      open: '1',
      progress: 0.86
    }
  },
  computed: {
    progressLabel () {
      return (this.progress * 100).toFixed(0) + '%'
    }
  }
}
</script>
