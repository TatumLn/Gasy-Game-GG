<template>
    <!--Plateau de Jeu-->
      <div class="Board">
        <!---->
      <div class="Zone-Menu1">
        <h2>Fanoron-{{ Karazany }}</h2>
        <h4>{{ Mpilalao1 }}</h4>
      </div>
      <!--Zone de jeu-->
      <div class="Zone-Jeu">
      <div class="board-row" v-for="(row, rowIndex) in board" :key="rowIndex">
        <div class="board-cell" v-for="(cell, cellIndex) in row" :key="cellIndex" @click="Click(rowIndex, cellIndex)">
          <!--Pion du jeu-->
          <div v-if="cell === 'v'" class="pion vert" :class="{ selectionner: PionPosition && PionPosition.row === rowIndex && PionPosition.cell === cellIndex }"></div>
          <div v-if="cell === 'n'" class="pion noir" :class="{ selectionner: PionPosition && PionPosition.row === rowIndex && PionPosition.cell === cellIndex }"></div>
        </div>
      </div>
    </div>
        <!---->
    <div class="Zone-Menu2">
      <h4>{{ Mpilalao2 }}</h4>
      </div>
      <button class="btnAverina" type="submit" @click="Reset"></button>
    </div>
</template>
  
<script>
  export default {
    name: 'BoardPage',
    //
    data() {
      return {
      Mpilalao1: '',
      Mpilalao2: '',
      board: [],
      Pion: '',
      PionPosition: null,
      MpilalaoActuel: 'v'
      }
    },
  //Cycle de vie hook
    mounted() {
        //Récuperation des données entrer au menu
        this.Mpilalao1 = this.$route.query.Mpilalao1;
        this.Mpilalao2 = this.$route.query.Mpilalao2;
        this.Karazany = this.$route.query.Karazany;
         //Creation du tableau en fonction de la taille choisie
        switch(this.Karazany) {
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
        case 'Tsivy':
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
    switch(this.Karazany) {
      case 'Telo':
        // Ajouter les pions pour le fanorona-telo
         // Initialisation des pions blancs
        this.board[0][0] = 'v';
        this.board[0][1] = 'v';
        this.board[0][2] = 'v';

        // Initialisation des pions noirs
        this.board[2][0] = 'n';
        this.board[2][1] = 'n';
        this.board[2][2] = 'n';
        break;
        
      case 'Dimy':
        // Ajouter les pions pour le fanorona-dimy
         // Initialisation des pions vert
        this.board[0][0] = 'v';
        this.board[0][1] = 'v';
        this.board[0][2] = 'v';
        this.board[0][3] = 'v';
        this.board[0][4] = 'v';
        this.board[1][0] = 'v';
        this.board[1][1] = 'v';
        this.board[1][2] = 'v';
        this.board[1][3] = 'v';
        this.board[1][4] = 'v';
        this.board[2][0] = 'v';
        this.board[2][3] = 'v';

        // Initialisation des pions noirs
        this.board[2][1] = 'n';
        this.board[2][4] = 'n';
        this.board[3][0] = 'n';
        this.board[3][1] = 'n';
        this.board[3][2] = 'n';
        this.board[3][3] = 'n';
        this.board[3][4] = 'n';
        this.board[4][0] = 'n';
        this.board[4][1] = 'n';
        this.board[4][2] = 'n';
        this.board[4][3] = 'n';
        this.board[4][4] = 'n';
        break;
        
      case 'Tsivy':
        // Ajouter les pions pour le fanorona-tsivy
                // Initialisation des pions blancs
        this.board[0][0] = 'v';
        this.board[0][1] = 'v';
        this.board[0][2] = 'v';
        this.board[0][3] = 'v';
        this.board[0][4] = 'v';
        this.board[0][5] = 'v';
        this.board[0][6] = 'v';
        this.board[0][7] = 'v';
        this.board[0][8] = 'v';
        this.board[1][0] = 'v';
        this.board[1][1] = 'v';
        this.board[1][2] = 'v';
        this.board[1][3] = 'v';
        this.board[1][4] = 'v';
        this.board[1][5] = 'v';
        this.board[1][6] = 'v';
        this.board[1][7] = 'v';
        this.board[1][8] = 'v';
        this.board[2][0] = 'v';
        this.board[2][2] = 'v';
        this.board[2][5] = 'v';
        this.board[2][7] = 'v';

        // Initialisation des pions noirs
        this.board[2][1] = 'n';
        this.board[2][3] = 'n';
        this.board[2][6] = 'n';
        this.board[2][8] = 'n';
        this.board[3][0] = 'n';
        this.board[3][1] = 'n';
        this.board[3][2] = 'n';
        this.board[3][3] = 'n';
        this.board[3][4] = 'n';
        this.board[3][5] = 'n';
        this.board[3][6] = 'n';
        this.board[3][7] = 'n';
        this.board[3][8] = 'n';
        this.board[4][0] = 'n';
        this.board[4][1] = 'n';
        this.board[4][2] = 'n';
        this.board[4][3] = 'n';
        this.board[4][4] = 'n';
        this.board[4][5] = 'n';
        this.board[4][6] = 'n';
        this.board[4][7] = 'n';
        this.board[4][8] = 'n';
        break;
    }
  },
     // Logique des deplacements des pions
  Click(rowIndex, cellIndex) {
     // Récupère la cellule cliquée par l'utilisateur.
    const clickedCell = this.board[rowIndex][cellIndex];
      // Si la cellule cliquée est vide.
    if (!clickedCell) {
      // Déplacer le pion sur la cellule cliquée.
      if (this.PionPosition) {
        this.board[rowIndex][cellIndex] = this.Pion;
        this.board[this.PionPosition.row][this.PionPosition.cell] = '';
        this.PionPosition = null;
        // Change le joueur actuel
        // Si le joueur actuel est "w" (blanc), le changer en "b" (noir) et vice versa
        this.MpilalaoActuel = this.MpilalaoActuel === 'v' ? 'n' : 'v';
      }
    } else if (clickedCell === this.MpilalaoActuel) {
      // Sélectionner le pion.
      this.PionPosition = { row: rowIndex, cell: cellIndex }; // Stocke la position du pion sélectionné.
      this.Pion = clickedCell; // Stocke le type du pion sélectionné.
    }
  },
  //Reinitialiser le jeu 
  Reset() {
    switch(this.Karazany) {
      //Pour le fanoron-telo
      case 'Telo':
        this.board = [
          ['v', 'v', 'v'],
          ['', '', ''],
          ['n', 'n', 'n']
        ];
        break;
      //Pour le fanoron-dimy
      case 'Dimy':
        this.board = [
          ['v', 'v', 'v', 'v', 'v'],
          ['v', 'v', 'v', 'v', 'v'],
          ['v', 'n', '', 'v', 'n'],
          ['n', 'n', 'n', 'n', 'n'],
          ['n', 'n', 'n', 'n', 'n']
        ];
        break;
      //Pour le fanoron-tsivy
      case 'Tsivy':
        this.board = [
          ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
          ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v'],
          ['v', 'n', 'v', 'n', '', 'v', 'n', 'v', 'n'],
          ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'],
          ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n']
        ];
        break;
    }
  },
  }
  
    }
</script>

<style>
    .Zone-Jeu {
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

  .pion {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: auto;
    }

    .vert {
      background-color: #50ea62;
    }

    .noir {
      background-color: rgb(0, 0, 0);
    }

    .btnAverina {
      background-image: url('../assets/Reset.png');
      background-repeat: no-repeat;
      background-size: 30px 30px;
      background-position: center;
      background-color: #e92a2a;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
    }

    button:hover{
        background-color: #158f23;
        color: #fff;
        cursor: pointer;
        }
    
</style>
  