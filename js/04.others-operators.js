let Observable = Rx.Observable;

// OPERATEUR INTERVAL
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-interval

const interval = Observable.interval(1000)
                            .map( x => x * 10 ) // ES6 => return implicite
                            .take(10); // stop la fonction après avoir émis 10 évènements

interval.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('Voilààààààà c\'est fini')
)

// le map en js est assez similaire :

var numbers = [0,1,2,3];
console.log(numbers.map( x => x * 10)); // map transforme les données


// OPERATEUR TIMER POUR EMMETTRE TOUTES LES x ms
// exemple, un observable qui emmet toutes les 100ms uen lettre d'un string

let myString = "Aujourd'hui on voit les Observables avec Tonton Chrichri";
const timerObservable = Observable.timer(3000, 100) // 1er argument = attente ; 2nd argument l'interval
                                    .do(x => console.log('avant le map', x))
                                    .map(x => myString[x]) // transforme x en 'A'
                                    .do(x => console.log('avant le map', x))
                                    .take(myString.length);

let container = document.querySelector('.container');
timerObservable.subscribe(
    (data) => container.innerHTML += data,
    (error) => console.log(error),
    () => console.log('Allllllloooooooooooo')
);