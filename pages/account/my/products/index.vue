<template>
  <div>
    <b>M021 作品一覧(/pages/account/my/products/index.vue)</b><br>
    <nuxt-link to="/products/101">[C022 作品詳細（プレビュー）]→</nuxt-link><br>
    [M023 デジタル写真集エディタ]↓
    <hr>
    <div v-for="n in 3">
      <cardtypea></cardtypea><br>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import cardtypea from '~/components/card-type-a.vue'
export default {
  layout: 'my',
  components: {
    cardtypea
  }
}
</script>