export async function setupMusicPlayer(songFile) {
  const musicPlayer = new Expo.Audio.Sound();
  await musicPlayer.loadAsync(songFile);
  return musicPlayer;
}

export async function playSong(musicPlayer) {
  await musicPlayer.playAsync();
}

export async function pauseSong(musicPlayer) {
  await musicPlayer.pauseAsync();
}

export async function stopSong(musicPlayer) {
  await musicPlayer.stopAsync();
}
