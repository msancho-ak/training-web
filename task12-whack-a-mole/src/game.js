const game = new Game();
game.initialize();

function Game() {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const minPeepTime = 200;
    const maxPeepTime = 1000;
    let lastHole;
    let timeUp = false;
    let score = 0;
    let hit = false;

    this.initialize = () => {
        window.localStorage.setItem("scores",JSON.stringify([]))
        moles.forEach(mole => mole.addEventListener('click', this.bonk));
        holes.forEach(hole => hole.addEventListener('click', this.fail));
    }


    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        const time = this.randomTime(minPeepTime, maxPeepTime);
        const hole = this.randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) this.peep();
            else{
                this.saveScore()
                document.getElementById('username').value='';
                document.getElementById('username').disabled=false;
            }
        }, time);
    }

    this.startGame = () => {
        document.getElementById('username').disabled=true;
        scoreBoard.textContent = 0;
        timeUp = false;

        score = 0;
        this.peep();
        setTimeout(() => timeUp = true, 10000)
        
    }

    this.bonk = e => {
        if (!e.isTrusted){
            return;
        } 
        const kick = document.getElementById('kick');
        kick.currentTime=0;
        kick.play();
        score++;
        e.target.classList.remove('up');
        scoreBoard.textContent = score;
        hit = true;
    }

    this.fail = e => {
        if (!e.isTrusted){
            return;
        } 
        if(e.target.classList.value.includes('hole')){
            const hihat = document.getElementById('hihat');
            hihat.currentTime=0;
            hihat.play();
        }
    }
    //
    this.saveScore = () =>{
        let userName = document.getElementById('username');
        let scores = JSON.parse(window.localStorage.getItem('scores'));
        if(scores.length < 5){
            scores = [...scores, {
                user:userName.value!==""?userName.value : 'Anonymous',
                score: score
            }]
            scores = scores.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0))
            window.localStorage.setItem('scores',JSON.stringify(scores));
        }
        else{
            for(let i =0; i< scores.length ; i++){
                if(elem[i].score < score){
                    scores[i] = {
                        user:userName.value!==""?userName.value : 'Anonymous',
                        score: score
                    }
                    break;
                }
            }
        }
        scores = scores.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0))
        window.localStorage.setItem('scores',JSON.stringify(scores));
    }
}


