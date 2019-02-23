<template>
    <div>
        <div v-for="artistItem in artistItems" :key="artistItem.name">
            {{artistItem.name}}
        </div>
    </div>
</template>

<script lang="ts">
/*
    import { mapGetters } from 'vuex'
    export default {
        async fetch ({ store }){
            await store.dispatch('artist/GET_ARTIST_ITEMS')
        },
        computed: {
            ...mapGetters(['artistItems'])
        }
    }
*/
import { mapActions } from 'vuex'
export default {
    mounted(){
        this.artistItems()
    },
    methods: {
        ...mapActions({
            artistItems: 'artists/GET_ARTIST_ITEMS'
        })
    }
}
</script>