let Observable = Rx.Observable;
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-of

let values = Observable.of('Hello', 'World', 2017);

// souscription 
values.subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log("Operation Completed du of()")
);

// l'opérateur of() appelle automatiquement la méthode completed

// OPERATEUR FROM
// opérateur from() pour créer un observable à partir d'un tableau,
// d'un objet, d'une promise ou d'un autre observable.

let fruitsArray = ['pommes', 'bananes', 'fraises'];

let fruitObservable = Observable.from(fruitsArray);

fruitObservable.subscribe(
    (data) => console.log(data),
    (errors) => console.log(errors),
    () => console.log("Operation Completed du from()")
);

// créer un Observable à partir d'une promise avec l'opérateur from
// on va utiliser l'API github pour récupérer les emojis.
// on va utilsier également la méthode $.getJSON de jQuery qui retourne
// une promise pour la transformer en Observable.

let url = 'https://api.github.com/emojis';
let emojisObservable = Observable.from($.getJSON(url));

emojisObservable.subscribe(
    (emojis) => console.log(emojis),
    (error) => console.log(error),
    () => console.log('Mission Complete')
);