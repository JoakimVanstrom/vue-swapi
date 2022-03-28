import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    currentPage: 1,
    currentPlanet: null,
    planetLoading: true,
    maxPages: 0,
    currentCharacter: null,
  },
  mutations: {
    saveCharacters(state, chars){
      state.characters = chars
    },
    setMaxPage(state, num){
      state.maxPages = num
    },
    increasePage(state){
      if(state.currentPage < state.maxPages){
        state.currentPage++
      }
    },
    decreasePage(state){
      if(state.currentPage > 1){
        state.currentPage--
      }
    },
    savePlanet(state, planet){
      state.currentPlanet = planet
    },
    currentCharacter(state, char){
      state.currentCharacter = char
    }
  },
  actions: {
    async fetchCharacters(context){
      const request = await fetch('https://swapi.dev/api/people?page='+context.state.currentPage)
      const data = await request.json()
      if(context.state.maxPages == 0){
        context.commit('setMaxPage', Math.ceil(data.count / 10))
      }
      context.commit('saveCharacters', data.results)
    },
    async fetchPreviousPage(context){
      context.commit('decreasePage')
      await context.dispatch('fetchCharacters')
    },
    async fetchNextPage(context){
      context.commit('increasePage')
      await context.dispatch('fetchCharacters')
    },
    async fetchPlanet(context, character){
      const request = await fetch(character.homeworld)
      const data = await request.json()
      context.commit('savePlanet', data)
    }
  }
})
