<template>
  <div>
    <b>C021 公開作品一覧(/pages/products/index.vue)</b><br>
    <nuxt-link to="/products/1">[C022 作品詳細（立ち読み）]→</nuxt-link>
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
  components: {
    cardtypea
  }
}
</script>