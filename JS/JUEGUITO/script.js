const player = document.getElementById('player');
const road = document.querySelector('.road');
const scoreElement = document.getElementById('score');
const bestScoreElement = document.getElementById('best-score');
const gameOverScreen = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');


// Variables de estado
let playerPosition = 1; // 0: Izq, 1: Centro, 2: Der
let score = 0;
let isGameOver = false;
let speed = 5; // Velocidad inicial


// Leemos el récord guardado. Si no existe, es 0.
let highScore = localStorage.getItem('neonRunnerBest') || 0;
bestScoreElement.innerText = highScore;


// Posiciones fijas para los carriles (300px ancho total 30, 130, 230)
const lanes = [30, 130, 230];


// Los controles de teclado
document.addEventListener('keydown', (e) => {
   if (isGameOver) return;


   if (e.key === 'ArrowLeft' && playerPosition > 0) {
       playerPosition--;
   } else if (e.key === 'ArrowRight' && playerPosition < 2) {
       playerPosition++;
   }
   // Actualizamos la posicion
   updatePlayerPosition();
});


function updatePlayerPosition() {
   player.style.left = lanes[playerPosition] + 'px';
}




function startGame() {
   // Generador de enemigos
   const enemyGenerator = setInterval(() => {
       if (isGameOver) {
           clearInterval(enemyGenerator);
           return;
       }
       createEnemy();
   }, 1000); // Crea uno cada segundo


   // Bucle de movimiento
   requestAnimationFrame(updateGame);
}


function createEnemy() {
   const enemy = document.createElement('div');
   enemy.classList.add('enemy');
  
   // Carril aleatorio (0, 1, 2)
   const randomLane = Math.floor(Math.random() * 3);
   enemy.style.left = lanes[randomLane] + 'px';
   enemy.style.top = '-80px'; // Empieza arriba fuera del contendedor
  
   road.appendChild(enemy);
}


function updateGame() {
   if (isGameOver) return;


   const enemies = document.querySelectorAll('.enemy');


   enemies.forEach(enemy => {
       // El enemigo se mueve hacia abajo
       let top = parseInt(window.getComputedStyle(enemy).getPropertyValue('top'));
      
       // Si es la primera vez que se lee, puede dar NaN, aseguramos que sea número
       if (isNaN(top)) top = -80;


       enemy.style.top = (top + speed) + 'px';


       // El enememigo se borra al salir de la pantalla
       if (top > 520) {
           enemy.remove();
           score++;
           scoreElement.innerText = score;
          
           // Aumentar velocidad cada 5 puntos
           if (score % 5 === 0) speed += 2.5;
       }


       // Si nos chocamos GAME OVER
       if (checkCollision(player, enemy)) {
           endGame();
       }
   });


   requestAnimationFrame(updateGame);
}


function checkCollision(playerDiv, enemyDiv) {
   const pRect = playerDiv.getBoundingClientRect();
   const eRect = enemyDiv.getBoundingClientRect();


   // Lógica inversa: Devuelve true si se solapan
   return !(
       pRect.top > eRect.bottom ||
       pRect.bottom < eRect.top ||
       pRect.right < eRect.left ||
       pRect.left > eRect.right
   );
}


function endGame() {
   isGameOver = true;
   finalScoreElement.innerText = score;
   gameOverScreen.classList.remove('hidden');


   // Pausar animación
   road.style.animationPlayState = 'paused';


   // Comprobar Récord
   if (score > highScore) {
       highScore = score;
       localStorage.setItem('neonRunnerBest', highScore);
       bestScoreElement.innerText = highScore;
       setTimeout(() => alert("NEW RECORD!"), 100);
   }
}


// Empezar el juego
startGame();

