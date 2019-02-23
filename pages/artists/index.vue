<template>
  <div>
    <b>C011 アーティスト一覧(/pages/artists/index.vue)</b><br>
    <nuxt-link to="/artists/1">[C012 アーティストー詳細]→</nuxt-link>
    <hr>
    新着アーティスト
    <div v-for="n in 3">
    <cardtypea></cardtypea><br>
    </div>
    注目アーティスト
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