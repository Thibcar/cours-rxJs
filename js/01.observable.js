let Observable = Rx.Observable;

// Observable est un objet qui prend un callback en argument. On peut notamment appeler la méthode next();

// création observable
let values = Observable.create((observer) => {
    observer.next('Hello');
    observer.next('World');
    setTimeout(() => console.log('Coucou'), 2000);
});

// pour s'abonner ou souscrire à cet observable
// appel de la méthode subscribe. 
values.subscribe((data) => console.log(data));