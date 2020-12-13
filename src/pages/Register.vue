<template>
  <div class="content q-px-xl">
    <h4>물품 추가</h4>
    <q-btn label="카드 내역 조회" color="primary" class="q-mb-lg" @click="view = true"/>
    <div class="row q-pb-lg">
      <div class="q-pt-sm q-pr-md">상품정보 :</div>
      <router-link :to="'/product'" style="text-decoration: none; color: black;">
        <q-btn label="상품 찾으러 가기"/>
      </router-link>
    </div>
    <div class="row">
      <div class="q-pt-sm q-pr-md">상품명 :</div>
      <input type="text">
    </div>
    <div class="text-h6 q-py-lg">보증서 사진 등록</div>
    <div class="row justify-center">
      <q-file outlined v-model="model" label="사진 업로드">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="mdi-file-upload-outline" size="md"/>
          </q-avatar>
        </template>
      </q-file>
    </div>
    <div class="text-h6 q-py-lg">영수증 사진 등록</div>
    <div class="row justify-center">
      <q-file outlined v-model="model" label="사진 업로드">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="mdi-file-upload-outline" size="md"/>
          </q-avatar>
        </template>
      </q-file>
    </div>
    <!-- <div class="row q-pt-lg">
      <div class="text-bold q-pt-sm q-pr-lg">중고 마켓 공개</div>
      <q-radio v-model="open" val="1" label="허용" />
      <q-radio v-model="open" val="2" label="비허용" />
    </div> -->
    <div class="row q-py-md">
      <div class="q-pr-md">특이사항 : </div>
      <input type="text">
    </div>
    <div class="row justify-center">
      <q-btn class="reg q-my-md text-bold" label="임시저장" flat @click="alert1"></q-btn>
      <q-btn class="reg q-my-md text-bold" label="보증서 등록" flat @click="alert2"></q-btn>
    </div>

    <q-dialog v-model="view">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">카드 내역</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh; width: 350px" class="scroll">
          <div class="row q-py-sm items-center">
            <q-radio v-model="check" class="q-pr-xs" val="1"/>
            <div>
              <div style="font-size: 11px">2020/11/07</div>
              <div>신세계백화점 강남점 프라다</div>
            </div>
            <q-space/>
            <div>1,500,000원</div>
          </div>
          <div class="row q-py-sm items-center">
            <q-radio v-model="check" class="q-pr-xs" val="2"/>
            <div>
              <div style="font-size: 11px">2020/11/07</div>
              <div>신세계백화점 강남점 구찌</div>
            </div>
            <q-space/>
            <div>350,000원</div>
          </div>
          <div class="row q-py-sm items-center">
            <q-radio v-model="check" class="q-pr-xs" val="3"/>
            <div>
              <div style="font-size: 11px">2020/11/21</div>
              <div>하이마트 레노버</div>
            </div>
            <q-space/>
            <div>799,000원</div>
          </div>
          <div class="row q-py-sm items-center">
            <q-radio v-model="check" class="q-pr-xs" val="4"/>
            <div>
              <div style="font-size: 11px">2020/11/21</div>
              <div>하이마트 삼성</div>
            </div>
            <q-space/>
            <div>384,000원</div>
          </div>
          <div class="row q-py-sm items-center">
            <q-radio v-model="check" class="q-pr-xs" val="5"/>
            <div>
              <div style="font-size: 11px">2020/12/10</div>
              <div>신세계백화점 강남점 보테가베네타</div>
            </div>
            <q-space/>
            <div>600,000원</div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="확인" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="sass">
.reg
  background: black
  color: #b89130
  border: 4px solid #b89130
  height: 50px
  width: 110px
  margin: 10px

</style>

<script>
export default {
  name: 'Register',
  data () {
    return {
      open: '1',
      model: null,
      view: false,
      check: null
    }
  },
  methods: {
    alert1 () {
      this.$q.dialog({
        title: '임시저장',
        message: '임시저장이 성공적으로 완료되었습니다.',
        ok: true
      }).onOk(() => {
        this.$router.push('/')
      })
    },
    alert2 () {
      this.$q.dialog({
        title: '보증서 등록',
        message: '등록이 성공적으로 완료되었습니다.',
        ok: true
      }).onOk(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
