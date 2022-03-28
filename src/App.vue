<template>
  <div id="app">
    <header>
      <h1>Star Wars Catalog</h1>
    </header>
    <main>
      <CharacterList />
      <CharDetails />
    </main>
  </div>
</template>

<script>
import CharDetails from "@/components/CharDetails.vue"
import CharacterList from "@/components/CharacterList.vue"
export default {
  components: { CharacterList, CharDetails },
 data(){
   return{
       
   }
 },

  methods: {

  }
 
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Ropa+Sans&display=swap");

* {
  margin-top: 0;
}
body {
  width: 1400px;
  font-family: "Ropa Sans", sans-serif;
  letter-spacing: 4px;
  margin: auto;
}
header {
  background-image: url("~@/assets/header-background.png");
  background-position: center;
  background-repeat: no-repeat;
  height: 20rem;

  h1 {
    color: #ffd600;
    width: 30%;
    padding-top: 100px;
    padding-left: 70px;
    font-size: 4rem;
    letter-spacing: 10px;
    font-weight: 100;
  }
}

main {
  background-color: #424242;
  height: 45rem;
  display: flex;
  justify-content: space-evenly;

  section:nth-of-type(2) {
    background-color: #8e8e8e;
    transform: translateY(-6%);
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.15);
    height: 36rem;
    width: 26rem;
    border-radius: 10px 10px 0 0;

    h2 {
      display: flex;
      background-color: #748687;
      color: #ffd600;
      margin: 0;
      height: 3.5rem;
      justify-content: center;
      align-items: center;
      border-radius: 10px 10px 0px 0px;
      letter-spacing: 6px;
      font-size: 2rem;
      font-weight: 400;
      padding: 10px 0;
    }
  }
}

</style>
