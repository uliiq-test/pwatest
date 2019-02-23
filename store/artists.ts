// アーティスト情報に関するvuex
export const state = () => ({
    artistItems: []
})
export const mutation = {
    SET_ARTIST_ITEMS(state, artistItems) {
        state.artistItems = artistItems
    }
}
export const actions = {
    async GET_ARTIST_ITEMS({ commit }){
        const res = await this.$axios.$get("/test/stub_Idol_artist.json")
        console.log('Starting Request: ', res)
        commit('SET_ARTIST_ITEMS', res)
    }
}