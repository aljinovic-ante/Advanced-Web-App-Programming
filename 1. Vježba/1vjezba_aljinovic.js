// 1. Napisati funkciju vecina() koja kao argument prima niz i callback funkciju. Callback funkcija će
// vratiti true ili false. Funkcija vecina() će iterirati kroz niz i pozivati callback funkciju nad svakim
// elementom dokle god se ne može odrediti je li većina elemenata true . Ako je broj true povratnih
// vrijednosti, manji ili jednak broju false povratnih vrijednosti, funkcija vecina() vraća false. U
// protivnom vraća true.

// function vecina(niz,callback){
//     let truecnt=0;
//     let falsecnt=0;

//     for(let elem of niz){
//         if(callback(elem)){
//             truecnt++;
//         }
//         else{
//             falsecnt++;
//         }
//         if(truecnt>niz.length/2){
//             console.log("true", truecnt);
//             console.log("falsecnt", falsecnt);
//             return true;
//         }
//         if(falsecnt>=niz.length/2){
//             console.log("true", truecnt);
//             console.log("falsecnt", falsecnt);
//             return false;
//         }
//     }
//     return truecnt>falsecnt;
// }
// let niz=[1,0,true,false,1==2];
// const callback=n=>Boolean(n);
// console.log(vecina(niz,callback));

// 2. Napisati funkciju prioritiziraj() koja prima niz i callback. Callback funkcija će vratiti true ili false.
// Funkcija prioritiziraj() će iterirati kroz niz i pozvati callback funkciju nad svakim elementom.
// Funkcija prioritiziraj() će vratiti novi niz u kojem su u prvom dijelu niza svi oni elementi za koje je
// callback vratila true, a u drugom dijelu svi oni elementi za koje je callback funkcija vratila false.
// Proučiti funkciju Array.unshift().

// function prioriziziraj(niz,callback){
//     let noviniz=[];
//     for(let elem of niz){
//         if(callback(elem)){
//             noviniz.unshift(elem);
//         }
//         else if(!callback(elem)){
//             noviniz.push(elem);
//         }
//         console.log(noviniz);
//     }
//     return noviniz;
// }
// let niz=[1,0,true,false,-3.14,Array.isArray(3),1==2];
// const callback=n=>Boolean(n);
// let noviniz=prioriziziraj(niz,callback);
// console.log(noviniz);


// 3. Kreirati funkciju grupiraj() koja prima niz i callback te vraća objekt. Funkcija grupiraj() će
// iterirati kroz niz i izvršiti callback funkciju nad svakim članom. Svaki return funkcije će postati
// ključ u objektu. Vrijednost na svakom ključu će biti niz čiji elementi su rezultat callback obrade.
// Npr. Za niz {1, 2, 3, 4, 5} i cb(input){if (input % 2 == 0) return true;} povratna vrijednost funkcije
// gupiraj() je {true:[2, 4], false:[1, 3, 5]}.

// function grupiraj(niz,cb){
//     let map={};
//     for(let elem of niz){
//         let key=cb(elem);
//         if(map[key]===undefined){
//             map[key]=[];
//         }
//         map[key].push(elem);
//     }
//     return map;
// }

// const cb=n=>n%2==0;
// let niz=[1,2,3,353,51,2141,5,44];
// let obj=grupiraj(niz,cb);
// console.log(obj);


// 4. Kreirati funkciju komutativnost() koja prima dvije callback funkcije i vrijednost. Funkcija
// komutativnost() će vratiti true ako prosljeđivanje vrijednosti u prvu callback funkciju i onda
// prenošenje rezultirajuće vrijednost u drugu funkciju, daje isti rezultat kao prenošenje vrijednosti u
// drugu funkciju i prosljeđivanje rezultirajuće vrijednosti u prvu funkciju.

// function komutativnost(cb1,cb2,n){
//     let rez1=cb1(cb2(n));
//     let rez2=cb2(cb1(n));

//     console.log("rez1 ", rez1);
//     console.log("rez2 ", rez2);
//     return rez1===rez2;
// }
// const cb1=n=>n*n;
// const cb2=n=>n*2;
// console.log(komutativnost(cb1,cb2,3));

// 5. Kreirati funkciju pipe() koja prima niz (i to niz funkcija) i jednu vrijednost. Funkcija pipe()
// vrijednost ubacuje u prvu funkciju u nizu, te njen rezultat ubacuje u drugu funkciju u nizu, pa njen
// rezultat u treću i tako do zadnje funkcije u nizu. Funkcija pipe() vraća konačni rezultat.

// function pipe(niz,n){
//     let rez=n;
//     for(let func of niz){
//         rez=func(rez);
//         console.log("result: ",rez);
//     }
//     return rez;
// }
// const cb1=n=>n*n;
// const cb2=n=>n*2;
// const cb3=n=>n/4;
// let niz=[cb1,cb2,cb3];
// console.log(pipe(niz,3))

// 6. Napisati svoju verziju JS funkcije reduce(). Funkcija prima 3 argumenta:- Niz- Callback funkciju
// koja će se primjeniti na svaki član niza- Akumulator koji će se vratiti, kao rezultat pozivanja
// callback funkcije na sve članove niza. Za razliku od funkcije map, reduce ne vraća niz rezultata (za
// svaki element), već jedan zajednički rezultat (akumulator).
// Primjerice za niz [1, 2, 3, 4, 5] i callback funkciju zbroji(), rezultat funkcije reduce je 15.
// reduce([1, 2, 3, 4, 5], (acc, elem)=>acc+elem, 0);

// let niz=[1,2,3,4,5];
// let rez=niz.reduce((acc,elem)=>acc+elem,0)
// console.log(rez)

// function reduce(niz,cb,acc){
//     for(let elem of niz){
//         acc=cb(elem,acc);
//     }
//     return acc;
// }
// let niz=[1, 2, 3, 4, 5];
// const cb=(n,acc)=>n+acc;
// console.log(reduce(niz,cb,0));

// 7. Napisati svoju izvedbu funkcije filter(). Funkcija prima dva argumenta:- Ulazni Niz- Callback
// funkciju koja će se primjeniti na svaki element ulaznog niza, te će vratiti true ili false, na osnovu
// čega će se element odati u povratni niz (odnosno neće). Funkcija vraca povratni niz sa elementima
// koji su prosli filtriranje.

// let niz=[1,2,3,4,5];
// let parni=niz.filter(n=>n%2==0)
// console.log(parni)

// function filter(niz,cb){
//     let noviniz=[];
//     for(let elem of niz){
//         if(cb(elem)){
//             noviniz.push(elem);
//         }
//     }
//     return noviniz;
// }

// const cb=n=>n%2==0;
// let niz=[1,2,3,4,5];
// console.log(filter(niz,cb));