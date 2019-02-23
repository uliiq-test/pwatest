<template>
  <div>
    <b>C031 バウンティプロジェクト一覧(/pages/bounties/index.vue)</b><br>
    <nuxt-link to="/bounties/1">[C032 バウンティプロジェクト詳細]→</nuxt-link>
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
