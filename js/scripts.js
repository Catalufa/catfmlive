firstTime = true
document.querySelector("img").addEventListener("click", function() {
  if (!firstTime) {
    return
  }
  firstTime = false
  document.querySelector("img").style.animation = "spin 75s linear infinite"
  secondsSinceStart = Math.floor(Date.now() / 1000) - 1701217998
  secondsIntoVideo = secondsSinceStart % 12136
  link = "https://www.youtube-nocookie.com/embed/iUuafesulN8?start="+secondsIntoVideo+"&version=3&rel=0&modestbranding=1&autoplay=1&loop=1"
  document.querySelector("iframe").src = link

  setInterval(function() {
    document.querySelector("h1").innerHTML = getSongDetails(secondsIntoVideo).songTitle
    document.querySelector("h2").innerHTML = getSongDetails(secondsIntoVideo).songAuthor
    document.querySelector(".progress").style.width = getSongDetails(secondsIntoVideo).percent + "%"
    secondsSinceStart++
    secondsIntoVideo = secondsSinceStart % 12136
  }, 1000)
  function getSongDetails(seconds) {
      const timestampArray = timestamps.split('\n');
      let currentSong = '';

      for (let i = 0; i < timestampArray.length; i++) {
          const [timestamp, songDetails] = timestampArray[i].split('/ ');

          var [hh, mm, ss] = timestamp.split(':').map(Number);
          var totalSeconds = hh * 3600 + mm * 60 + ss;

          if (totalSeconds <= seconds) {
              currentSong = songDetails;
              nextTimestamp = timestampArray[i+1].split('/ ')[0]
              var [hh2, mm2, ss2] = timestamp.split(':').map(Number);
              var totalSeconds2 = hh2 * 3600 + mm2 * 60 + ss2;
          } else {
              break; // The array is sorted, so once we find a timestamp greater than the input seconds, we can break
          }
      }

      if (currentSong === '') {
          return 'No song found';
      }

      const [songAuthor, songTitle] = currentSong.split(' - ');
      return { songAuthor, songTitle, percent: 100 / (totalSeconds2 - totalSeconds) * (totalSeconds2 - seconds) };
  }

  // Example usage:
  const timestamps = `0:00:00/ Ivusm - Meow
  0:02:25/ Donkey Kong Country 2 OST - Stickerbush Symphony
  0:07:03/ STAYC - LOVE FOOL
  0:08:35/ L'Arc-en-Ciel - HONEY
  0:12:25/ Mr. Children - NOTFOUND
  0:17:17/ Puff Daddy & Faith Evans - I'll Be Missing You
  0:21:58/ Toby Fox | Deltarune Chapter 2 OST - 03 My Castle Town
  0:24:05/ Donkey Kong 2 OST - Forest Interlude
  0:28:51/ Cascada - Everytime we Touch
  0:32:17/ DeadMau5 - HaxPigMeow
  0:36:57/ Gotye - Somebody that I used to Know
  0:41:07/ Mr. Big-Green - Tinted Sixties Mind (MV)
  0:44:35/ Usher - U got it bad
  0:47:11/ Toto - Africa
  0:51:40/ Unknown - Mystery music :O
  0:55:10/ Super Mario Land (Gameboy) OST - World 2
  0:56:29/ Gary - Despacito
  1:00:12/ Yamashita Farm OST - Cave Story
  1:01:34/ VG Cover Junkies - Spark Mandrill
  1:03:22/ Mega Man X OST - Storm Eagle Stage
  1:04:37/ Risk of Rain 2 OST - The rain formerly known as purple
  1:10:44/ The Seatbelts - Wo Qui Non Coin
  1:14:21/ Toby Fox | Undertale OST - Uwa!! So Temperate
  1:15:20/ OneRepublic - Apologize
  1:18:43/ Astrud Gilberto - The Girl From Ipanema
  1:21:26/ Lena Raine | Minecraft OST - Otherside
  1:22:32/ A-ha - Take on me
  1:26:30/ Edvard Greig - In the Hall of the Mountain King
  1:29:28/ Culture Club - Karma Chameleon
  1:33:31/ The Living Tombstone - It's been so Long
  1:36:03/ L'Arc-en-Ciel - HONEY (Again)
  1:39:53/ SpongeBob Squarepants - Gary Come Home
  1:40:54/ Bladee - Steve Jobs
  1:43:06/ Toby Fox | Deltarune OST - Lancer's Theme
  1:44:38/ Home - Pyxis
  1:48:16/ Sasaki Sayaka - Zzz
  1:51:01/ Daisy Bell (Bicycle Built for Two)
  1:54:56/ Home - Before the Night
  1:58:55/ Toby Fox | Deltarune OST - Rude Buster
  2:00:45/ Jonathan Romero - Electro Meowcat
  2:02:46/ Patrica Taxxor - Eeeaaaooo
  2:04:31/ Tally Hall - Ruler of Everything
  2:08:34/ Leina Raine | Minecraft OST - Pigstep
  2:09:25/ JODI606 - Meow
  2:12:55/ Zzz - Dirge to Baksik
  2:14:55/ Erik Satie - Gymnopodie
  2:18:05/ Castlevania II OST - Bloody Tears
  2:19:20/ Claude Debussy - Clair de lune
  2:23:31/ Moving to the Nether by the Yogscast
  2:26:57/ C418 | Minecraft OST - Stal
  2:28:24/ C418 | Minecraft OST - Sweden
  2:30:55/ Huey Lewis & The News - The Power of Love
  2:34:40/ Javeter Hoax - The Fire Is Nyan (ULTRAKILL COVER)
  2:35:35/ Metallica - Enter Sandman
  2:41:01/ CassyDaBean - Meow
  2:42:53/ Kero Kero Bonito - Flamingo
  2:45:17/ Toby Fox | Undertale OST - His theme
  2:47:19/ Shady Fazbear - gato
  2:49:39/ Toby Fox | Deltarune OST - Field of Hopes & Dreams
  2:52:28/ Doom OST - E1M1 [At Doom's Gate]
  2:54:09/ Mary Pastel - Cat City
  2:56:17/ Different Heaven ft. Oneira - Alone
  3:00:22/ Billy Joel - Piano Man
  3:06:28/ Different Heaven ft. Oneira - Alone (Again)
  3:10:32/ Mangoo - Eurodancer
  3:13:50/ MACINTOSH PLUS - リサフランク420 | 現代のコンピュー
  3:15:57/ Home - Resonance
  3:19:28/ End
  `;
  const seconds = 150; // Change this value to the desired time in seconds
  const result = getSongDetails(timestamps, seconds);
  console.log(result);

  document.querySelector("button").addEventListener("click", function() {
    window.open("https://youtu.be/iUuafesulN8?t=" + secondsIntoVideo)
  })
})
