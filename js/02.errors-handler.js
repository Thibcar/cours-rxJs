let Observable = Rx.Observable;
// creation Observable
let values = Observable.create((observer) => {
    try {
        observer.next('salut');
        observer.next('les Kékés');
        observer.complete()
    } catch(e) {
        observer.error(e);
    }
});

// souscription
values.subscribe(
    // 1er handler qui récupère les données émises
    (data) => console.log(data),
    // 2ème handler qui récupère les erreurs
    (error) => console.log(error),
    // 3ème handler pour informer le completed
    () => console.log('completed')
);
