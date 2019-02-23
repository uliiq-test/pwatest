<template>
  <div>
    <b>M031 バウンティプロジェクト一覧(/pages/account/my/bounties/index.vue)</b><br>
    <nuxt-link to="/bounties/101">[C032 バウンティプロジェクト詳細]→</nuxt-link>
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