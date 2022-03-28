<template>
  <section class="character-info">
        <h2>Details</h2>
        <article class="character-details" v-if="currentCharacter">
          <h3>{{ currentCharacter.name }}</h3>
          <p>Height: {{ currentCharacter.height }}cm</p>
          <p>Mass: {{ currentCharacter.mass }}kg</p>
          <p>Hair color: {{ currentCharacter.hair_color }}</p>
          <p>Skin color: {{ currentCharacter.skin_color }}</p>
          <p>Eye color: {{ currentCharacter.eye_color }}</p>
          <p>Birth year: {{ currentCharacter.birth_year }}</p>
          <p>Gender: {{ currentCharacter.gender }}</p>
        </article>
        <article class="extraInfo" v-if="!planetLoading">
          <h3>{{ currentPlanet.name }}</h3>
          <p>Rotation_period: {{ currentPlanet.rotation_period }}</p>
          <p>Orbital_period: {{ currentPlanet.orbital_period }}</p>
          <p>Diameter: {{ currentPlanet.diameter }}</p>
          <p>Climate: {{ currentPlanet.climate }}</p>
          <p>Gravity: {{ currentPlanet.gravity }}</p>
          <p>Terrian: {{ currentPlanet.terrain }}</p>
        </article>
        <Loader v-else />
      </section>
</template>

<script>
import Loader from '@/components/baseLoader.vue'
export default {
components: {Loader},
  data() {
    return {
     
    };
  },

computed:{
    planetLoading(){
        return this.$store.state.planetLoading
    },
    currentPlanet() {
    return this.$store.state.currentPlanet;
    },
    currentCharacter(){
        return this.$store.state.currentCharacter
    }
}
}
</script>

<style lang="scss" scoped>
.character-info {
  background-color: #c4c4c4;
  margin: 0;
  font-size: 1.1rem;
  line-height: 5px;
  height: 180px;

  h3 {
    font-size: 2rem;
    letter-spacing: 3px;
    font-weight: 100;
  }
}

.extraInfo {
  color: whitesmoke;
  padding: 10px 0 0 20px;
  font-size: 1.1rem;
  h3 {
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: 3px;
    margin: 0;
  }
  p {
    margin: 0;
    padding-top: 7px;
    text-transform: capitalize;
  }
}

</style>