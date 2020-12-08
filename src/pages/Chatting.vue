<template>
  <div class="content q-pt-md">
    <q-toolbar class="justify-center text-bold">채팅하기
    </q-toolbar>
    <div class="row">
      <router-link :to="'/detail'" style="text-decoration: none; color: black;">
        <q-btn flat label="< Back"/>
      </router-link>
      <q-space/>
      <q-btn flat icon="mdi-magnify"/>
    </div>
    <hr>
    <div class="q-pa-md row justify-center" style="height: 450px">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          name="나"
          :text="['안녕하세요~']"
          sent
        />
        <q-chat-message
          name="나"
          :text="['아직 구매 가능한가요??']"
          sent
        />
        <q-chat-message
          name="판매자"
          :text="['네, 가능합니다 !!']"
        />
      </div>
    </div>
    <hr>
    <div class="row justify-center">
      <router-link :to="'detail'" style="text-decoration: none">
        <q-btn class="chat__btn text-bold" label="상품창"/>
      </router-link>
      <q-btn class="chat__btn text-bold" label="예약하기" @click="alert"/>
    </div>
  </div>
</template>

<style lang="sass">
.chat__btn
  width: 100px
  background-color: #3f9af7
  color: white
  margin: 10px
</style>

<script>
export default {
  name: 'Chatting',
  data () {
    return {

    }
  },
  methods: {
    alert () {
      this.$q.dialog({
        title: '예약하기',
        message: '예약이 성공적으로 완료되었습니다.',
        ok: true
      }).onOk(() => {
        this.$router.push('/detail')
      })
    }
  }
}
</script>
