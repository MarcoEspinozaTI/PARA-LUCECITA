onload = () => {
  document.body.classList.remove("container");
  var bgMusicURL = 'vamosLejosSinPensar.mp3'; 
  var bgMusicControls = true;
  if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
  <audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} hidden='true' autoplay loop>    
  </audio>
  `;
  }


  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Son para tí Lucecita :3').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 2500);
};

