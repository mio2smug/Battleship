class Player {
        constructor (carrier, battleship, destroyer, submarine, patrol){
            this.carrier = carrier
            this.battleship = battleship
            this.destroyer = destroyer
            this.submarine = submarine
            this.patrol = patrol
        }

    myHit(h) {
    let myArr = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol']
    let myShipComponents = ['head', 'deck1', 'deck2', 'deck3', 'hull']
    let hit = h
        for (let i = 0; i < myArr.length; i++) {
            for (let j = 0; j < myShipComponents.length; j++) {
                 if(this[`${myArr[i]}`][`${myShipComponents[j]}`] === hit){
                     console.log(true, myArr[i], myShipComponents[j])
                    return true
                 }
                return false
            }
        }
    }
}

class Carrier{
    constructor(head, deck1, deck2, deck3, hull){
        this.head = head
        this.deck1 = deck1
        this.deck2 = deck2
        this.deck3 = deck3
        this.hull = hull
        
    }
}

class Battleship{
    constructor(head, deck1, deck2, hull){
        this.head = head
        this.deck1 = deck1
        this.deck2 = deck2
        this.hull = hull
    }
}

class Destroyer {
    constructor(head, deck, hull){
        this.head = head
        this.deck = deck
        this.hull = hull
    }
}

class Submarine {
    constructor (head, hull){
        this.head = head
        // this.deck1 = deck1
        // this.deck2 = deck2
        this.hull = hull
    }
}

class Patrol {
    constructor(hull){
        this.hull = hull
    }
}

const playerCarrier = new Carrier('a1', 'a2','a3','a4', 'a5')
const playerBattleship = new Battleship('b2', 'c2', 'd2', 'e2')
const playerDestroyer = new Destroyer('c3', 'c4', 'c5')
const playerSubmarine = new Submarine('e1','e2')
const playerPatrol = new Patrol('f1')

const AICarrier = new Carrier('c1', 'c2','c3','c4', 'c5')
const AIBattleship = new Battleship('b1', 'c1', 'd1', 'e1')
const AIDestroyer = new Destroyer('f3', 'g4', 'h5')
const AISubmarine = new Submarine('e1','e2')
const AIPatrol = new Patrol('f1')


const player1 = new Player(playerCarrier, playerBattleship, playerDestroyer, playerSubmarine, playerPatrol)
const player2 = new Player(AICarrier , AIBattleship, AIDestroyer, AISubmarine, AIPatrol)

// myHit('a1')


player1.myHit('a1')
player2.myHit('a1')

//     for (let i = 0; i < myArr.length; i++) {
//     // console.log(player1[`${myArr[i]}`].head === 'a1')
//     // if(player1[`${myArr[i]}`]['head'] === 'a1'){
//         // break
//     // }
// }
