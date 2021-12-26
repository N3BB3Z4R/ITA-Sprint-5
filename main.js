var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// variables declaration
// const reportJokes: {
//   joke: string; score: number; date: string; }[] |
//   { reportAcudits: { score: number; };
// }[] = [];
var reportJokes = [];
var isListenerReady = false; // Vote button EventListeners checker
// to get visible the joke area and the buttons
var showJokeArea = function () {
    var jokeVoteArea = document.querySelector('#joke-vote');
    if (jokeVoteArea) {
        jokeVoteArea.style.opacity = '1';
    }
};
var changeBlobBackground = function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var contr = document.querySelector('.container');
    if (contr) {
        contr.style.backgroundImage = "url(./images/blob".concat(randomNumber, ".svg)");
        contr.style.backgroundSize = 'cover';
        contr.style.backgroundRepeat = 'no-repeat';
        contr.style.backgroundPosition = 'center';
    }
};
changeBlobBackground(); // load random bg on site loading
// FETCHS TO APIs
function getDadJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var res, res_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://icanhazdadjoke.com/', {
                            headers: {
                                Accept: 'application/json'
                            }
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    res_1 = _a.sent();
                    return [2 /*return*/, res_1.joke];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getChuckJokeAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://api.chucknorris.io/jokes/random')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.value];
                case 3:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getIpsumJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var res, res_1, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://baconipsum.com/api/?type=joke', {
                            headers: {
                                Accept: 'application/json'
                            }
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    res_1 = _a.sent();
                    return [2 /*return*/, res_1[0]];
                case 3:
                    err_3 = _a.sent();
                    console.log(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getRandomJoke() {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var jokeVoteResultReset, randomNumber, randomJoke, _d, jokeTarget, date, reportAcudits, putScore;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    changeBlobBackground();
                    showJokeArea();
                    jokeVoteResultReset = document.querySelector('#joke-vote-result');
                    if (jokeVoteResultReset) {
                        jokeVoteResultReset.innerHTML = '';
                    }
                    randomNumber = Math.floor(Math.random() * 3);
                    console.log('random API Source', randomNumber);
                    randomJoke = '';
                    _d = randomNumber;
                    switch (_d) {
                        case 0: return [3 /*break*/, 1];
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, getDadJoke()];
                case 2:
                    randomJoke = _e.sent();
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, getChuckJokeAsync()];
                case 4:
                    randomJoke = _e.sent();
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, getIpsumJoke()];
                case 6:
                    randomJoke = _e.sent();
                    return [3 /*break*/, 8];
                case 7:
                    randomJoke = 'error';
                    _e.label = 8;
                case 8:
                    jokeTarget = document.querySelector('#joke-text');
                    if (jokeTarget) {
                        jokeTarget.innerHTML = randomJoke;
                    }
                    date = new Date();
                    reportAcudits = {
                        'joke': randomJoke,
                        'score': 9999,
                        'date': date.toISOString()
                    };
                    putScore = function (score) {
                        // toFIX: por que hace un loop donde muestra el array de objetos
                        // por cada chiste en el array reportjokes al pasar el score?
                        reportJokes[reportJokes.length - 1]["score"] = score;
                        console.log('reportJokes Update Joke Vote', reportJokes);
                        var jokeVoteResult = document.querySelector('#joke-vote-result');
                        if (jokeVoteResult) {
                            jokeVoteResult.innerHTML = "<p>Your voted ".concat(score, " succesfully!</p>");
                        }
                    };
                    if (isListenerReady === false) {
                        (_a = document.querySelector('#joke-vote-1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { putScore(1); });
                        (_b = document.querySelector('#joke-vote-2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { putScore(2); });
                        (_c = document.querySelector('#joke-vote-3')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { putScore(3); });
                        isListenerReady = true;
                    }
                    reportJokes.push(reportAcudits);
                    console.log('reportJokes Get New Joke', reportJokes);
                    return [2 /*return*/];
            }
        });
    });
}
// Barcelona - Weather free API weatherstack.com - api access key: ab2d339df0a52aefc72cf5c695d5680f
// returns the moment of the day
function getMoment() {
    var time = new Date();
    var hour = time.getHours();
    var moment = '';
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
        .then(function (res) { return res.json(); })
        .then(function (res) {
        var weather = document.querySelector('#weather');
        // weather.innerHTML = `Enjoy this ${getMoment()} in Barcelona, the weather is ${res.current.temperature}ºC and ${res.current.weather_descriptions[0]}`;
        if (weather) {
            weather.innerHTML = "".concat(res.current.weather_descriptions, " ").concat(getMoment(), "<img src=\"").concat(res.current.weather_icons[0], "\" />").concat(res.current.temperature, " \u00BAC");
        }
        // console.log(res.current.temperature);
    })["catch"](function (err) {
        console.log(err);
    });
}
// get weather on the load
getWeather();
