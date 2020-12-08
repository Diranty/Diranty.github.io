<template>
  <div class="content">
    <div class="row justify-center">
      <router-link :to="'/register'" style="text-decoration: none; color: black;">
        <q-btn class="box1" flat>
          <div>+<br>보증서 추가</div>
        </q-btn>
      </router-link>
      <router-link :to="'/manage'" style="text-decoration: none">
        <q-btn class="box2" flat>
          <div>보증서 관리</div>
        </q-btn>
      </router-link>
    </div>
    <router-link :to="'/trading'">
      <q-btn class="box3 absolute-center" flat>
      <div>중고거래 하기</div>
    </q-btn>
    </router-link>
  </div>
</template>

<style lang="sass">
.box1, .box2
  width: 150px
  height: 110px
  margin: 50px 15px
.box1
  border: 1px solid black
.box2
  background: #3f9af7
  color: white
.box3
  background: #3f9af7
  color: white
  width: 180px
  height: 100px

.box1, .box2, .box3
  font-size: 22px

</style>

<script>
export default {
  name: 'SectionIntro'
}
</script>
