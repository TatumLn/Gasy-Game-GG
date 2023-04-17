<template>
    <!--Plateau de jeu-->
     <div class="board-container">
        <!--Zone de texte-->
        <!--Zone de Jeu-->
      <div class="board-row" v-for="(row, rowIndex) in board" :key="rowIndex">
        <div class="board-cell" v-for="(cell, cellIndex) in row" :key="cellIndex" >
             <!-- Afficher le pion blanc -->
        <div v-if="cell === 'w'" class="piece white"></div>
        <!-- Afficher le pion noir -->
        <div v-if="cell === 'b'" class="piece black"></div>
            
        </div>
      </div>
      </div>

</template>
  
<script>
  export default {
    name: 'BoardPage',
    data() {
      return {
      Mpilalao1: '',
      Mpilalao2: '',
      board: [],
      }
    },
  //Cycle de vie hook
    mounted() {
        //Recuperation des donnees entrees dans le menu
        this.Mpilalao1 = this.$route.query.Mpilalao1;
        this.Mpilalao2 = this.$route.query.Mpilalao2;
        this.boardSize = this.$route.query.boardSize;
         //Creation du tableau en fonction de la taille choisie
        switch(this.boardSize) {
            //Si fanoron-telo 3x3
        case 'Telo':
            for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push('');
            }
            this.board.push(row);
            }
            break;
            //Si fanoron-dimy 5x5
        case 'Dimy':
            for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                row.push('');
            }
            this.board.push(row);
            }
            break;
            //Si fanoron-tsivy 5x9
        case 'Sivy':
            for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 9; j++) {
                row.push('');
            }
            this.board.push(row);
            }
            break;
        }
        // Initialiser les pions
  this.initPions();
    },
    //Logique du jeu
    methods: {
        //Logique d'initialisation des pions
        initPions() {
    switch(this.boardSize) {
      case 'Telo':
        // Ajouter les pions pour le fanorona-telo
         // Initialisation des pions blancs
        this.board[0][0] = 'w';
        this.board[0][1] = 'w';
        this.board[0][2] = 'w';

        // Initialisation des pions noirs
        this.board[2][0] = 'b';
        this.board[2][1] = 'b';
        this.board[2][2] = 'b';
        break;
        
      case 'Dimy':
        // Ajouter les pions pour le fanorona-dimy
         // Initialisation des pions blancs
        this.board[0][0] = 'w';
        this.board[0][2] = 'w';
        this.board[0][4] = 'w';
        this.board[1][1] = 'w';
        this.board[1][3] = 'w';

        // Initialisation des pions noirs
        this.board[3][0] = 'b';
        this.board[3][2] = 'b';
        this.board[3][4] = 'b';
        this.board[4][1] = 'b';
        this.board[4][3] = 'b';
        break;
        
      case 'Sivy':
        // Ajouter les pions pour le fanorona-tsivy
                // Initialisation des pions blancs
        this.board[0][0] = 'w';
        this.board[0][2] = 'w';
        this.board[0][4] = 'w';
        this.board[0][6] = 'w';
        this.board[0][8] = 'w';
        this.board[1][1] = 'w';
        this.board[1][3] = 'w';
        this.board[1][5] = 'w';
        this.board[1][7] = 'w';

        // Initialisation des pions noirs
        this.board[3][0] = 'b';
        this.board[3][2] = 'b';
        this.board[3][4] = 'b';
        this.board[3][6] = 'b';
        this.board[3][8] = 'b';
        this.board[4][1] = 'b';
        this.board[4][3] = 'b';
        this.board[4][5] = 'b';
        this.board[4][7] = 'b';
        break;
    }
  }
  
    }
}
</script>

<style>
    .board-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.board-row {
  display: flex;
  flex-direction: row;
}

.board-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 2px;
  border: 1px solid black;
  cursor: pointer;
}

.piece {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: auto;
  }

  .white {
    background-color: #50ea62;
  }

  .black {
    background-color: rgb(0, 0, 0);
  }


</style>
  