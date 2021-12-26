// variables declaration
// const reportJokes: {
//   joke: string; score: number; date: string; }[] |
//   { reportAcudits: { score: number; };
// }[] = [];
const reportJokes: {
  joke: string;
  score: number;
  date: string;
}[] = [];

let isListenerReady = false; // Vote button EventListeners checker

// to get visible the joke area and the buttons
const showJokeArea = () => {
  const jokeVoteArea = document.querySelector('#joke-vote') as HTMLElement | undefined;
  if (jokeVoteArea) {
    jokeVoteArea.style.opacity = '1';
  }
}

const changeBlobBackground = () => {
  const randomNumber: number = Math.floor(Math.random() * 6) + 1;
  const contr = document.querySelector('.container') as HTMLElement | undefined;
  if (contr) {
    contr.style.backgroundImage = `url(./images/blob${randomNumber}.svg)`;
    contr.style.backgroundSize = 'cover';
    contr.style.backgroundRepeat = 'no-repeat';
    contr.style.backgroundPosition = 'center';
  }
}
changeBlobBackground(); // load random bg on site loading

// FETCHS TO APIs
async function getDadJoke() {
  try {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });
    const res_1 = await res.json();
    return res_1.joke;
  } catch (err) {
    console.log(err);
  }
}

async function getChuckJokeAsync() {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    return data.value;
  } catch (err) {
    console.log(err);
  }
}

async function getIpsumJoke() {
  try {
    const res = await fetch('https://baconipsum.com/api/?type=joke', {
      headers: {
        Accept: 'application/json',
      },
    });
    const res_1 = await res.json();
    return res_1[0];
  } catch (err) {
    console.log(err);
  }
    // return document.querySelector('#joke-text')?.textContent;
}

async function getRandomJoke() {
  
  changeBlobBackground();
  showJokeArea();
  const jokeVoteResultReset = document.querySelector('#joke-vote-result') as HTMLElement | undefined;
  if (jokeVoteResultReset) {
    jokeVoteResultReset.innerHTML = '';
  }

  const randomNumber = Math.floor(Math.random() * 3)
  console.log('random API Source', randomNumber)

  let  randomJoke = '';
  switch (randomNumber) {
    case 0:
      randomJoke = await getDadJoke();
      break;
    case 1:
      randomJoke = await getChuckJokeAsync();
      break;
    case 2:
      randomJoke = await getIpsumJoke();
      break;
    default:
      randomJoke = 'error';
  }

  const jokeTarget = document.querySelector('#joke-text') as HTMLElement | undefined;
  if (jokeTarget) {
    jokeTarget.innerHTML = randomJoke;
  }

  const date = new Date();
  const reportAcudits: {
    joke: string;
    score: number;
    date: string;
  } = {
    'joke': randomJoke,
    'score': 9999,
    'date': date.toISOString()
  };

  // listeners votating buttons
  let putScore = (score: number) => {
    // toFIX: por que hace un loop donde muestra el array de objetos
    // por cada chiste en el array reportjokes al pasar el score?
    reportJokes[reportJokes.length -1]["score"] = score;
    console.log('reportJokes Update Joke Vote', reportJokes);

    const jokeVoteResult = document.querySelector('#joke-vote-result') as HTMLElement | undefined;
    if (jokeVoteResult) {
      jokeVoteResult.innerHTML = `<p>Your voted ${score} succesfully!</p>`;
    }
  }
  
  if (isListenerReady === false) {
    document.querySelector(
      '#joke-vote-1')?.addEventListener('click', function(){putScore(1)});
    document.querySelector(
      '#joke-vote-2')?.addEventListener('click', function(){putScore(2)});
    document.querySelector(
      '#joke-vote-3')?.addEventListener('click', function(){putScore(3)});

    isListenerReady = true
  }
  
  reportJokes.push(reportAcudits);
  console.log('reportJokes Get New Joke', reportJokes);
}

// Barcelona - Weather free API weatherstack.com - api access key: ab2d339df0a52aefc72cf5c695d5680f
// returns the moment of the day
function getMoment() {
  const time = new Date();
  const hour = time.getHours();
  let moment = '';
  switch (true) {
    case hour >= 0 && hour < 5:
      moment = 'night';
      break;
    case hour >= 5 && hour < 7:
      moment = 'early morning';
      break;
    case hour >= 7 && hour < 12:
      moment = 'morning';
      break;
    case hour >= 12 && hour < 13:
      moment = 'noon';
      break;
    case hour >= 13 && hour < 19:
      moment = 'afternoon';
      break;
    case hour >= 19 && hour < 21:
      moment = 'dusk';
      break;
    case hour >= 21 && hour < 24:
      moment = 'early night';
      break;
    default:
      moment = 'error';
  }
  return moment;
}

function getWeather() {
  fetch('http://api.weatherstack.com/current?access_key=ab2d339df0a52aefc72cf5c695d5680f&query=Barcelona')
    .then(res => res.json())
    .then(res => {
      const weather = document.querySelector('#weather') as HTMLElement | undefined;
      // weather.innerHTML = `Enjoy this ${getMoment()} in Barcelona, the weather is ${res.current.temperature}ºC and ${res.current.weather_descriptions[0]}`;
      if (weather) {
        weather.innerHTML = `${res.current.weather_descriptions} ${getMoment()}<img src="${res.current.weather_icons[0]}" />${res.current.temperature} ºC`;
      }
      // console.log(res.current.temperature);
    })
    .catch(err => {
      console.log(err);
    });
}

// get weather on the load
getWeather()