// Ponavljanje 3.
// 1. Napisati funkciju numSelectString koja prima niz brojeva i vraca string. U ovoj funkciji treba
// iskoristiti funkcije filter, sort i reduce kako bi se kao povrat dobio string koji sadrzi samo neparne
// brojeve iz niza, odvojene zarezom koji su poredani uzlazno. Npr za niz [17, 34, 3, 12, 23] povrat je
// string „3, 17, 23”.

// function numSelectString(niz){
//     return niz.filter(n=>n%2!=0).sort((a,b)=>a-b).reduce((acc,elem)=>acc+ ', '+elem);
// }
// let niz=[17, 34, 3, 12, 23];
// console.log(numSelectString(niz));


// 2. Kreirati „iterator funkciju“ koja prima niz i vraća objekt koji sadrži next metodu. Svaki poziv
// next metode vraća sljedeći element niza i njegov index u nizu (metoda next vraća niz koji se sastoji
// od dva člana).


// function iterator(niz){
//     let i=0;
//     return {
//         next: function(){
//             if(i<niz.length){
//                 return [niz[i++],i-1];
//             }
//             else{
//                 return undefined;
//             }
//         }
//     }
// }

// let niz=[1,2,3,4,5,6,7,8];
// const a=iterator(niz);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


// 3. Nadopuniti zadatak 1 na nacin da next() funkcija vraca objekt sa vrijednostima value i done
// {value: vrijednost, done: false}. Property value sadrzi vrijednost trenutnog elementa niza, a
// property done ima vrijednost false sve dok se ne dodje do posljednjeg clana niza (tada mu se
// vrijednost mijenja u true). Ukoliko se next() funkcija poziva dalje, treba vratiti objekt koji sadrzi
// samo property done postavljen na true {done: true}.

// function iterator(niz){
//     let i=0;
//     return {
//         next: function(){
//             if(i<niz.length){
//                 return {
//                     value: niz[i++],
//                     done: false
//                 };
//             }
//             else{
//                 return {
//                     done: true
//                 };
//             }
//         }
//     }
// }

// let niz=[1,2,3,4,5,6,7,8];
// const a=iterator(niz);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


// 4. Napisati „iterator funkciju“ koja prima string riječi odvojenih razmakom, te vraća objekt koji na
// sebi ima metodu next. Svakim pozivom metode next, vraća se jedna po jedna riječ.

// function iterator(string) {
//     const rijeci=string.split(' ');
//     let i=0;
//     return {
//         next: function() {
//             if(i<rijeci.length){
//                 return{
//                     value: rijeci[i++],
//                     done: false
//                 };
//             }
//             else{
//                 return {
//                     value: undefined,
//                     done: true
//                 };
//             }
//         }
//     };
// };

// let rijec=iterator("plavo auto vozi gradom");
// console.log(rijec.next());
// console.log(rijec.next());
// console.log(rijec.next());
// console.log(rijec.next());
// console.log(rijec.next());
// console.log(rijec.next());

// 5. Riješiti prethodni zadatak koristeći generator funkciju.

// function* iterator(string){
//     let niz=string.split(' ');
//     for(const rijec of niz){
//         yield rijec;
//     }
// }

// let rijec=iterator("plavo auto vozi gradom");
// console.log(rijec.next());
// console.log(rijec.next());
// console.log(rijec.next());
// console.log(rijec.next());
// console.log(rijec.next());
// console.log(rijec.next());

// 6. Napisati funkciju simulacijaRazgovora koja će vratiti „hej“ ili „besmislica“ svako tri sekunde, u
// ovisnosti o tome je li riječ koja je prosljeđena u funkciju glasi „generator“. Nije dozvoljeno koristiti
// petlje, a funkcija simulacijaRazgovora će se pozvati samo jednom. (Pojašnjenje. koristiti generator
// funkciju. U funkciju simulacijaRazgovora se šalje niz stringova. Funkcija simulacijaRazgovora
// završava kada se za svaku riječ iz niza ispiše „besmislica“ ili „hej“. Hint clearInterval() se poziva
// kada je povrat iz next-a {value:undefined, done:true} ).

// function* simulacijaRazgovora(rijeci){
//     for(const rijec of rijeci){
//         yield rijec==='generator' ? "hej" : "besmislica";
//     }

// }

// function razgovor(rijeci){
//     let generator=simulacijaRazgovora(rijeci);

//     let interval=setInterval(() => {
//         let result=generator.next();

//         if(result.done){
//             clearInterval(interval);
//         }
//         else{
//             console.log(result.value);
//         }
//     }, 3000);

// }

// let niz=["plavo","auto","generator","vozi","generator","sumon"];
// razgovor(niz);

// 7. Koristeći async await pattern, ispisati rečenicu koja se sastoji od imenice i glagola. Pozvati async
// funkciju i prosljediti joj imenicu. Unutar async funkcije koristiti ključnu riječ await kako bi se dobio
// povrat iz ne-async-funkcije koja prima imenicu i konkatenira hardkodirani glagol i to vraća. Povrat
// ispisati nakon tri sekunde. 

// function spoji(imenica){
//     let glagol=" vozi";
//     return imenica+glagol;
// }

// async function stvoriRecenicu(imenica){
//     const recenica=await spoji(imenica);
//     setTimeout(()=>{
//         console.log(recenica)
//     },3000);
// }

// stvoriRecenicu("Auto");