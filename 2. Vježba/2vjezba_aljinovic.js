// Vježba2 (closure-iterators-generators-promises)
// 1. Napisati funkciju koja vraca funkciju after i prima dva argumenta. Prvi argument je broj koji
// predstavlja koliko puta funkcija after treba biti pozvana prije nego se izvrsi callback funkcija, a
// drugi argument je callback funkcija koja ce se izvrsiti. (hint closure)
// function closure(broj){
//     return function after(broj2){
//         return
//     }
// }


// 2. Napisati funkciju movieSelector koja prima niz objekata koji sadrze informacije o filmovima (id,
// title i score). Iskoristiti funkcije filter i map kako bi povrat funkcije movieSelector bio niz koji
// sadrzi samo imena filmova sa score-om vecim od pet i to uppercase-ane. Primjer za objekt
// movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 },
// { id: 37, title: "Gentelman", score: 6 },
// { id: 11, title: "Batman", score: 5 },
// { id: 44, title: "Birds of Pray", score: 1 },];
// ocekivani rezultat je: [ "PAN'S LABYRINTH", "GENTELMAN" ]

// movies = [ 
// { id: 1, title: "Pan's Labyrinth", score: 9 },
// { id: 37, title: "Gentelman", score: 6 },
// { id: 11, title: "Batman", score: 5 },
// { id: 44, title: "Birds of Pray", score: 1 }
// ];
// function movieSelector(movies){
//     return movies.filter((movie)=>movie.score>5).map((movie)=>movie.title.toUpperCase());
// }
// console.log(movieSelector(movies))

// 3. Napisati funkciju numSelectString koja prima niz brojeva i vraca string. U ovoj funkciji treba
// iskoristiti funkcije filter, sort i reduce kako bi se kao povrat dobio string koji sadrzi samo neparne
// brojeve iz niza, odvojene zarezom koji su poredani uzlazno. Npr za niz [17, 34, 3, 12, 23] povrat
// je string „3, 17, 23”.

// function numSelectString(niz){
//     return niz.filter(n=>n%2!=0).sort((a,b)=>a-b).reduce((acc,elem)=>acc+ ', '+elem);
// }
// let niz=[17, 34, 3, 12, 23];
// console.log(numSelectString(niz));


// 4. Napisati funkciju koja prima niz i u njoj kreirati for petlju koja iterira kroz elemente niza i vraća
// sumu elemenata.

// function cetvrta(niz){
//     let suma=0;
//     for(let elem of niz){
//         suma+=elem;
//     }
//     return suma;
// }
// let niz=[42,2,14,1,-4,0];
// console.log(cetvrta(niz));


// 5. Napisati „iterator funkciju“ koja kao argument prima niz elemenata, te vraća funkciju koja pri
// svakom pozivu vraća sljedeći član niza sa konkateniranim stringom „je n-ti element niza“. (hint.
// closure).

// function iterator(niz){
//     let cnt=0;
//     let size=niz.length;
//     return function cb(){
//         if(cnt===size){
//             return "Vise nema elemenata niza";
//         }
//         let string= niz[cnt]+ ` je ${cnt+1}. element niza`;
//         cnt++;
//         return string;
//     }
// }
// let niz=[42,2,14,1,-4,0];
// const a=iterator(niz);
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// 6. Kreirati funkciju russianRoulette koja prima jedan argument (broj, nazovimo ga n), i vraca
// funkciju. Vracena funkcija ne prima argumente, a vraca stirng „click!” prvih n – 1 poziva. Prilikom
// n-tog poziva, funkcija ce vratiti string „bang”. Svakim sljedecim pozivom funkcije, povratna
// vrijednost ce biti string „reload to play again”. (hint „closure”)

// function russianRoulette(n){
//     let poziv=0;
//     return function cb(){
//         poziv++;
//         if(poziv<n){
//             return "click";
//         }
//         else if(poziv>n){
//             return "reload to play again";
//         }
//         return "bang";
//     }
// }
// const a=russianRoulette(5);
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());


// 7. Kreirati funkciju blackJack koja prima niz (brojevi od 1 do 11) i vraca funkciju (nazovimo je
// dealer). Funkcija dealer prima dva argumenta (dva broja) i vraca funkciju (nazovimo je player).
// Ako je funkcija player pozvana PRVI PUT, vraca sumu brojeva koji su argumenti funkcije dealer.
// Ako je funkcija player pozvana DRUGI PUT, vratiti ce sumu ranija dva argumenta i prvog clana
// niza, ukoliko je suma manja ili jednaka 21. Ako je veca od 21, funkcija player vraca string „bust!”.
// Ukoliko prethodna suma nije veca od 21, tada ce se svakim sljedecim pozivom funkcije player
// vratiti nova suma - zbroj posljednje sume i sljedeceg broja u nizu koji je prosljedjen funkciji
// blackJack. Ukoliko je nova suma veca od 21, povrat funkcije player je „bust!”. Ako je funkcija
// player vratila string „bust!”, tada ce svaki sljedeci poziv funcije player vratiti string „You are
// done!”. Ideja ovog zadatka je koristenje i shvacanje koncepta closure, te ga je obavezno korisiti.

// function blackJack(niz=[7,2,5,9,1,2,11,6,9,4,2,7,4,9,6,4,2,5,10,10,2]){
//     return function dealer(a,b){
//         let poziv=0;
//         let i=0;
//         let globalFlag=true;
//         return function player(){
//             if(!globalFlag){
//                 return "You are done!";
//             }
//             poziv++;
//             if(poziv===1){
//                 return a+b;
//             }
//             let suma=a+b+niz[i];
//             i++;
//             if(poziv===2){
//                 if(suma<=21)
//                     return suma;
//                 if(suma>21)
//                     globalFlag=false;
//                     return "Bust!";
//             }
//             if(suma<=21){
//                 suma=suma+niz[i];
//             }
//             if(suma>21){
//                 globalFlag=false;
//                 return "Bust!";
//             }
//             return suma;
//         }
//     }
// }
// const a=blackJack();
// const dealer=a(10,5);
// console.log(dealer());
// console.log(dealer());
// console.log(dealer());
// console.log(dealer());


// 8. Kreirati „iterator funkciju“ koja prima niz i vraća objekt koji sadrži next metodu. Svaki poziv next
// metode vraća sljedeći element niza i njegov index u nizu (metoda next vraća niz koji se sastoji od
// dva člana).


// 9. Nadopuniti zadatak 3 na nacin da next() funkcija vraca objekt sa vrijednostima value i done
// {value: vrijednost, done: false}. Property value sadrzi vrijednost trenutnog elementa niza, a
// property done ima vrijednost false sve dok se ne dodje do posljednjeg clana niza (tada mu se
// vrijednost mijenja u true). Ukoliko se next() funkcija poziva dalje, treba vratiti objekt koji sadrzi
// samo property done postavljen na true {done: true}.


// 10. Napisati „iterator funkciju“ koja prima string riječi odvojenih razmakom, te vraća objekt koji na
// sebi ima metodu next. Svakim pozivom metode next, vraća se jedna po jedna riječ.


// 11. Riješiti prethodni zadatak koristeći generator funkciju.


// 12. Napisati funkciju simulacijaRazgovora koja će vratiti „hej“ ili „besmislica“ svako tri sekunde, u
// ovisnosti o tome je li riječ koja je prosljeđena u funkciju glasi „generator“. Nije dozvoljeno
// koristiti petlje, a funkcija simulacijaRazgovora će se pozvati samo jednom. (Pojašnjenje. koristiti
// generator funkciju. U funkciju simulacijaRazgovora se šalje niz stringova. Funkcija
// simulacijaRazgovora završava kada se za svaku riječ iz niza ispiše „besmislica“ ili „hej“. HintclearInterval() se poziva kada je povrat iz next-a {value:undefined, done:true} ).


// 13. Koristeći async await pattern, ispisati rečenicu koja se sastoji od imenice i glagola. Pozvati async
// funkciju i prosljediti joj imenicu. Unutar async funkcije koristiti ključnu riječ await kako bi se
// dobio povrat iz ne-async-funkcije koja prima imenicu i konkatenira hardkodirani glagol i to vraća.
// Povrat ispisati nakon tri sekunde.


// 14. Kreirati promise koji će se nakon 1000 ms resolve-ati u string „Resolved“, koristeći metodu
// setTimeout(). Funkcija koja je zadužena za printanje resolved promisa, se prosljeđuje u promise
// preko then() metode. (https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/
// Global_Objects/Promise )


// 15. Kreirati promise koji će se odmah reject-ati. Iz funkcije koja se pozvala kada je promise reject-an
// printati „Error“(hint. nad promise objektom pozvati metodu catch).


// 16. Promisi su asinhroni i sada ćemo to i dokazati. Kreirati promise koji će se resolve-ati sa
// vrijednošću „Promise has been resolved!“. Nakon toga ubaciti sljedeći kod:
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");
// Koji redosljed ispisa očekujete? Zašto?


// 17. Niže je naveden objekt fakePeople koji imitira podatke izvučene iz baze podataka. Napisati
// funkciju fakeAPICall(i) koja vraća promise koji će se resolve-ati u podatke osobe na i-tom mjestu.
// Promise resolve-ati nakon random broja milisekundi između 1000 i 3000. Napisati funkciju
// getAllData, koja koristi Promise.all kako bi se 3 API poziva fakeAPICall(i) izvršila istovremeno.
// Argument i odabrati proizvoljno. U slučaju da je i veći od 3, reject-ati promise.
// Promise.all
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// const fakePeople = [
//  { name: 'Ivo', hasPets: false},
//  { name: 'Eva', hasPets: true},
//  { name: 'Marko', hasPets: true}
// ]