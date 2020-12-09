<template>
  <div class="content">
    <div class="row justify-center">
      <router-link :to="'/register'" style="text-decoration: none; color: #b89130;">
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
    <div class="row justify-center">
      <router-link :to="'/trading'" style="text-decoration: none; color: black;">
      <q-btn class="box3" flat>
        <div>중고거래 하기</div>
      </q-btn>
    </router-link>
    </div>
  </div>
</template>

<style lang="sass">
.box1, .box2
  width: 150px
  height: 110px
  margin: 50px 15px
.box1
  border: 1px solid #b89130
.box2
  background: black
  color: #b89130
  border: 4px solid #b89130
.box3
  background: black
  color: #b89130
  width: 200px
  border: 4px solid #b89130

.box1, .box2, .box3
  font-size: 22px
  font-weight: bold

</style>

<script>
export default {
  name: 'SectionIntro'
}
</script>
