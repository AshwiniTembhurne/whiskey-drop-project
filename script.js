const rooms = {
    'living-room': {
        correctAnswer: 'Gryffindor',
        nextRoom: 'library',
        backgroundImage: 'assets/images/livingroom.jpg',
    },
    'library': {
        correctAnswer: 'B',
        nextRoom: 'dining-hall',
        backgroundImage: 'assets/images/library.jpg',
    },
    'dining-hall': {
        correctAnswer: '17',
        nextRoom: 'gallery',
        backgroundImage: 'assets/images/diningroom.jpg',
    },
    'gallery': {
        correctAnswer: 'Starry Night',
        nextRoom: 'study',
        backgroundImage: 'assets/images/gallary.jpg',
    },
    'study': {
        correctAnswer: 'Oxygen',
        nextRoom: 'observatory',
        backgroundImage: 'assets/images/study.jpg',
    },
    'observatory': {
        correctAnswer: 'Mars',
        nextRoom: 'final-room',
        backgroundImage: 'assets/images/library.jpg',
    },
   /* 'kitchen': {
        correctAnswer: 'Fermentation',
        nextRoom: 'cellar',
        backgroundImage: 'assets/images/kitchenroom.jpg',
    },
    'celler': {
        correctAnswer: '1912',
        nextRoom: 'final-room',
        backgroundImage: 'assets/images/cellerroom.jpg',
    },*/
    'final-room': {
        backgroundImage: 'assets/images/livingroom.jpg',
    },
};

function startGame() {
    document.getElementById('intro').classList.remove('active');
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('living-room').classList.remove('hidden');
    document.getElementById('living-room').classList.add('active');
    playBackgroundSound();
}

function checkAnswer(room, answer) {
    const feedback = document.querySelector(`#${room} .feedback`);
    const currentRoom = rooms[room];
    if (answer === currentRoom.correctAnswer) {
        feedback.textContent = 'Correct! A secret door opens, leading to the next room.';
        feedback.style.color = 'green';
        playCorrectAnswerSound();
        // Transition to the next room after a delay
        setTimeout(() => {
            document.getElementById(room).classList.remove('active');
            document.getElementById(room).classList.add('hidden');
            const nextRoom = currentRoom.nextRoom;
            document.getElementById(nextRoom).classList.remove('hidden');
            document.getElementById(nextRoom).classList.add('active');
            changeBackgroundImage(rooms[nextRoom].backgroundImage);
            playNextRoomSound();
            if (nextRoom === 'final-room') {
                stopBackgroundSound();
            }
        }, 2000);
    } else {
        feedback.textContent = 'Wrong answer. Start again!';
        feedback.style.color = 'red';
        playNextRoomSound();
        // Show alert and transition back to the start page after a delay
        setTimeout(() => {
            alert('Wrong answer! You will be redirected to the start page.');
            document.getElementById(room).classList.remove('active');
            document.getElementById(room).classList.add('hidden');
            document.getElementById('intro').classList.remove('hidden');
            document.getElementById('intro').classList.add('active');
            feedback.textContent = '';
            stopBackgroundSound();
        }, 2000);
    }
}

function playBackgroundSound() {
    const backgroundSound = document.getElementById('background-sound');
    backgroundSound.play();
}

function stopBackgroundSound() {
    const backgroundSound = document.getElementById('background-sound');
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
}

function playCorrectAnswerSound() {
    const correctAnswerSound = document.getElementById('correct-answer-sound');
    correctAnswerSound.play();
}

function playNextRoomSound() {
    const nextRoomSound = document.getElementById('next-room-sound');
    nextRoomSound.play();
}

function changeBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
}
