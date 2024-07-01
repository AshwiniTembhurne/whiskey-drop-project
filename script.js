let currentRoom = 'intro';
const rooms = ['intro', 'living-room', 'dining-room', 'library', 'final-room'];

document.addEventListener('DOMContentLoaded', () => {
    const backgroundSound = document.getElementById('background-sound');
    backgroundSound.play();
});

function startGame() {
    showRoom('living-room');
}

function showRoom(roomId) {
    document.getElementById(currentRoom).classList.remove('active');
    document.getElementById(roomId).classList.add('active');
    currentRoom = roomId;
    if (roomId === 'final-room') {
        document.getElementById('background-sound').pause();
    }
}

function checkAnswer(roomId, answer) {
    const correctAnswers = {
        'living-room': 'Gryffindor',
        'dining-room': 'Paris',
        'library': 'Harper Lee'
    };

    if (answer === correctAnswers[roomId]) {
        document.getElementById('correct-answer-sound').play();
        if (roomId === 'library') {
            showRoom('final-room');
        } else {
            const nextRoomIndex = rooms.indexOf(roomId) + 1;
            showRoom(rooms[nextRoomIndex]);
        }
    } else {
        document.getElementById('next-room-sound').play();
        alert('Wrong answer. Start again!');
        showRoom('intro');
    }
}
