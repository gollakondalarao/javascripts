
document.getElementById("rollButton").addEventListener("click", function () {
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const audioPlayer = document.getElementById("audioPlayer");
  
    const songs = [
      "[iSongs.info] 01 - Jaragandi.mp3",
      "[iSongs.info] 03 - Game Changer Teaser Theme.mp3",
      "[iSongs.info] 04 - College Papa.mp3",
      "Chuttamalle - Devara_HD-(HDvideo9).mp4",
      "Poolamme Pilla.mp3",
    ];
  
    const number1 = Math.floor(Math.random() * 6) + 1;
    const number2 = Math.floor(Math.random() * 6) + 1;
  
    dice1.style.transform = `rotate(${360 * Math.random()}deg)`;
    dice2.style.transform = `rotate(${360 * Math.random()}deg)`;
  
    setTimeout(() => {
      dice1.textContent = number1;
      dice2.textContent = number2;
    }, 500);
  
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    audioPlayer.src = randomSong;
    audioPlayer.play();
  });
  