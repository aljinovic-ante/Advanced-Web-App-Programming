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