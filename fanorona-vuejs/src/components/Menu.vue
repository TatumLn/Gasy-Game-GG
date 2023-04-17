<template>
    <div class="Menu">
        <div>
        <!-- Titre du Jeu-->
      <h1>{{ title }}</h1>
      <img src="../assets/DreapeauMalagasy.png" alt="Drapeau Malagasy" width="100%">
      <!--Menu Du Jeu-->
        </div>
        <br>
      <form @submit.prevent="startGame">
        <!-- Nom des Joueurs-->
        <div class="Nom1">
          <label for="Mpilalao1">Anaran'i Mpilalao 1</label>
          <input type="text" id="Mpilalao1" v-model="Mpilalao1">
        </div>
        <div class="Nom2">
          <label for="Mpilalao2">Anararan' i Mpilalao 2</label>
          <input type="text" id="Mpilalao2" v-model="Mpilalao2">
        </div>
        <div class="Size">
         <!-- Taille du plateau de jeu-->
          <label for="boardSize">Fanorona</label>
          <select id="boardSize" v-model="boardSize">
            <option value="Telo">Telo 3x3</option>
            <option value="Dimy">Dimy 5x5</option>
            <option value="Sivy">Sivy 5x9</option>
          </select>
        </div>
        <!--Commencer le jeu-->
        <button class="btn" type="submit">Ndao Ary</button>
        <router-link to="/Fepetra" style="color: #a1a0a0; text-decoration: none">Fepetra miraiktra ny lalao</router-link>
        
      </form>
    </div>
</template>
  
<script>
  export default {
    name: 'MenuDeDemarrage',
    data() {
      return {
        //Titre du jeu
        title: 'Fanorona Malagasy',
        //Nom des Joueurs
        Mpilalao1: '',
        Mpilalao2: '',
        //Taille du plateau de jeu par defaut
        boardSize: '',
      }
    },
    methods: {
      startGame() {
        // Vérifier que les champs sont remplis
      if (this.Mpilalao1 === '') {
        this.message1 = "Ampidiro etsy ambany ny anaran'i mpilalao vaolohany"
        alert(this.message1)
        return;
      }else if(this.Mpilalao2 === ''){
        this.message2 = "Ampidiro iany koa ny anaran'i mpilalao faraharoa"
        alert(this.message2)
        return;
      }else if(this.boardSize === ''){
        this.message3 = "Safidio ny karazana fanorona izay ilalaovanareo azafady!"
        alert(this.message3)
        return;
      }
      // Envoyer les informations au composant parent pour démarrer le jeu
      this.$router.push({
        name: 'Board',
        query: {
            Mpilalao1: this.Mpilalao1,
            Mpilalao2: this.Mpilalao2,
            boardSize: this.boardSize,
        }
        });

    },
    },
};
</script>

<style>
        .Menu {
        background-color: #f2f2f2;
        border: 1px solid #ded9d9;
        border-radius: 5px;
        padding: 20px;
        margin: 20px auto;
        max-width: 600px;
        }

        .Menu h1 {
        text-align: center;
        font-size: 2em;
        margin-bottom: 20px;
        }

        .Menu img {
        display: inline-block;
        width: 80px;
        height: 80px;
        margin-bottom: -15px;
        }


        .Menu label {
        display: block;
        margin-bottom: 10px;
        font-size: 1em;
        }

        .Menu input[type="text"] {
        display: block;
        margin: 0 auto;
        width: 90%;
        padding: 5px;
        border: 3px solid #ded9d9;
        margin-bottom: 20px;
        font-size: 1.2em;
        }

        .Menu select {
        display: block;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        border: 3px solid #ded9d9;
        margin-bottom: 20px;
        font-size: 1.2em;
        }

        .Menu .btn {
        display: block;
        background-color: #e92a2a;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 3px;
        font-size: 1.2em;
        cursor: pointer;
        margin: 20px auto;
        }

        /*  */
        .Menu button:hover {
        background-color: #158f23;
        color: #fff;
        cursor: pointer;
        }

        /* */
        .Menu input:focus,
        .Menu select:focus,
        .Menu button:focus {
        outline: none;
        box-shadow: 0 0 5px #50ea62;
        }

</style>