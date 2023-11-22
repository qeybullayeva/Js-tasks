// let a = +prompt();
// let b = Number(prompt());

// console.log(a + b);

// const a = 12

// console.log(a);

// let word = "Zeyneb"; string
// let a = 5; - number
// let b = true; boolean
// let c = null;    primitive data tipleri
// let d undefined
// // bigint
// // symbol

// non primitive

// let arr = [5, "kamran", "12", true, null, " z", , [5,12,"kjij"]]

// let e = arr[arr.length-1][2]
// console.log();

// let arr=[2,3,4,5,"salam",true,null,false]
// let a=arr[arr.length-1]
// let b=arr.at(-1)
// console.log(b);

// let obj = {
//   color: "red",
//   firstName: "Zeyneb",
//   age: 17,
//   status: false,
//   info: [15, "baku"],
// };

// let arr = [
//   {
//     lasName: "Qeybullayeva",
//     firstName: "Zeyneb",
//     age: 17,
//     status: false,
//     info: [15, "baku", {lastname: "test"}],
//   },
//   5,
//   "dfd",
//   2,
// ];

// console.log();

// let a = [5, 45, 4, 78];
// a[1]=3
// a[3]="15"
// a[5]="salam"

// a.push("hello") sonuna elave eliyir
// a.pop() sondan silir
// a.unshift("hello") evveline elave edir
// a.shift() evvelden silir

// console.log(a.indexOf(132)); varsa indexini, yoxdusa -1 qaytarir
// console.log(a.includes(5)); varsa true, yoxdusa false qaytarir

// let a = 75;

// && and operatoru - her ikisi true olduqda sert odenir
// || or operatoru - ikisinden biri de duz olsa sert odenir

// if (a >= 18 || a < 75) {
//   console.log("siz vesiqe ala bilersiz");
// } else {
//   console.log("siz vesiqe ala bilmezsiz");
// }

//  proqlasdirma dillerinde yazilis qaydasi Syntax adlanir.

// let a =119

// switch (true) {
//     case a>18:
//         console.log("siz ala bilersiz");
//         break;

//     default:
//         console.log("siz ala bilmezsiz");
//         break;
// }

// let a=5
// var b=6
// const c=7
// a=8
// b=10
// c=10
// console.log(a);

// let word = "salam1"

// if (word==="salam") {
//     console.log(true);
// }else{
// console.log(false);
// }

// task 1 basladi
// function newArray(array) {
//   for (element of array) {
//     if (array.isarray(element)) {
//       newArray(element);
//     } else {
//       console.log(element);
//     }
//   }
// }

// newArray(tree);

// let object = {
//   adi: "zeyneb",
//   yas: 26,
// };

// function checker(obj) {

//   if (obj.adi) {
//     console.log("adi");
//   } else {
//     console.log("key movcud deyil");
//   }

//   switch (obj.yas) {
//     case 17:
//     console.log("yas key movcuddur");
//         break;
//     case 25:
//         console.log("25dir")
//         break;
//     default:
//         console.log("key movcud deyil");
//         break;
//   }
// }

// checker(object);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let variable = 3;

// console.log('a');

// function checkElement() {
// let variable=3;
// console.log(1+1)

// }
// checkElement()
// let obj = {
// a:5,
// }
// let obj2 = {
// a :5,
// }

// let arr=[1,2,3,4,5];
// let a=6;

// console.log(arr);

// const newFunc=(array,element )=>{

//     if (!array.includes[element]) {
//         array.push(element)
//     }
// }
// newFunc(arr, a);

// console.log(arr);

// let obj = {};

// var getProperty = function (key, value) {
//   obj[key] = value;
// };

// getProperty("ad", "zeyneb");
// getProperty("soyad", "qeybullayeva");
// getProperty("yas", "17");
// getProperty("email", "zeynebqeybullayeva@gmail.com");
// console.log(obj);

// let objj={};
// var getProperty = function (key) {
//       objj[key]
//     };
//     console.log(objj)
// task 1 bitdi
// task 2 basladi
// let num1 = 0;
// while (num1 < 100) {
//   num1++;
//   console.log(num1);
// };

// let d = [1, 2, 3, 4, 5];
// let b = 1;
// function serch() {
//   if (d.includes(b)) {
//     alert(true);
//   } else {
//     alert(false);
//   }
// }
// serch();

// let arr =[1,2,3,4,5,6];
// for (let index = 0; index < arr.length; index++) {

// };

// console.log(arr)

// const fruit = ['alma', 'portagal', 'mandarin', 'sitrus']

// fruit[fruit.length] = "kiwi";
// delete fruit[2];

// fruit[2] = 'meyve';

// console.log(fruit);

// const students = [
//   { name: "Alice", grade: 90 },
//   { name: "Bob", grade: 85 },
//   { name: "Charlie", grade: 92 },
// ];

// console.log(students)
// task 2 bitdi
// task 3 basladi
// let arr=[1,2,3,4,5,6,7,8,9,10];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
// }

// console.log(arr);

// let arr= [1, 2, 3, 4, 5, 6];
// let filterArr= arr.filter(function (num) {
//    if (num< 4) {
//    return true;
//   }});
// console.log(filterArr);
// output [1,2,3]

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr3 = [8, 9, 10, 11];

// function pusO(lan) {
//   for (let i = 0; i < lan.length; i++) {
//     if (arr1[i] !== lan[i]) {
//       arr1.push(lan[i]);
//     }
//   }
//   console.log(arr1);
// }
// pusO(arr3);
// let obj1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "salam"];
// function pusO(lan){
// for (let i = 0; i < lan.lenght; i++) {
//   if (obj1[i] !== lan[i]) {
//     obj1.push(lan[i]);
//   }
// }
// console.log(obj1);
// }
// pusO(obj1);
// task4 basladi
// const tree = [
//   "ulu baba",
//   "ulu nene",
//   ["baba", "nene", ["ogul", "qiz", ["neve", "neve1", ["kotukce", "kotukce1"]]]],
// ];

// console.log(tree);
// task5baslasdi
let str = "Zeyneb Qeybullayeva";
let count = 0;

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// js 1 saatliq yazi
// [8,4,6,2,2,3]=>[4,2,4,2,3] bir birinden cixardaraq ilerleme metodlari

// input [[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]]kac li deger var=>5

// [555,901,899,1276,12] => cift basamakli 2 sayi var:output:2

// input n = 5 =>5 elemani dizi yap ama toplamalari 0 olsun[1,2,0,-2,-1]

// n = 434 => 4*3*4 => 48,4+3+4=11 result => 48-11=3

// nums = [1,2,3,4,4,3,2,1] , n=4

// output = [1,4,2,3,3,2,4,1] => nums in 4 birim ardindaki degeri koyun

// input:[-2,1,-3,4,-1,2,1,-5,4]=>-4[-2,1,-3,4,-1,2,-5]

// input: x = 123
// output: 321
// input: x = -123
// output: -321
// input: x = 120
// output: 21

// solution1 [2,7,11,15], 9 => return[0,1] index numarasina gore

// entries kullanimi ilede yapilabilir...
// input
// let arr=["zeyneb","sudabe"]
// let a="zeyneb";
// let b="sudabe";

// 1.Semantic elementlər nə üçün istifadə olunur? Hansıları tanıyırsız?
// footer,section,nav,header,articile,img ozune aid olan butun contetleri qebul edir
// 2.Meta tag`ləri harda yazılır və nə üçün istifadə olunur?

// mega taglari sadece htmlda yazilir
// 3. HTML Faylına css və javascript qoşmağın üsulları
// link le qosuluruq css  ve JavaScript in qosulmasi ucun her ikisinide  uygun linkini qosuruq linke elave edirik

// 17.11.2023 Frontend imtahan.
// İlerleme durumunu kaydetmek için Google'da oturum açın Daha fazla bilgi
// Adınızı, soyadınızı və qrupunuzu qeyd edin.
// Zeyneb Qeybullayeva F1
// 1.Semantic elementlər nə üçün istifadə olunur? Hansıları tanıyırsız?
// footer,section,nav,header,articile,img ozune aid olan butun contetleri qebul edir
// 2.Meta tag`ləri harda yazılır və nə üçün istifadə olunur?

// mega taglari sadece htmlda yazilir
// 3. HTML Faylına css və javascript qoşmağın üsulları
// link le qosuluruq css  ve JavaScript in qosulmasi ucun her ikisinide  uygun linkini qosuruq linke elave edirik
// 4.CSS specificity nədir? (selectorların üstünlük dərəcələri)
// classla cagirilir ,inline la cagirmaq olur,
// 5.Flex və grid nədir? Hansı propertyləri var? Fərqləri hansılardır?

// flex bir cox propertyleri var meselen .flex direction,displey flex,flex,border,gap
// grid propertyleri meselen. justify content,grid-template colmn,,grid-template row,aligin atims,grid row
// 6.Js`də hansı data tiplərini tanıyırsız?
// 1.primitive Null,Boleean,String,Number,Undifined,Bigint,Symbol
// 2.nan primitive Object,Array
// 7."i++" la "++i" fərqi nədir?
// i++ artirir ++i ise onden artirir
// 8."==" lə "===" fərqi nədir?
// == yanliz tipini yoxluyur === hem tipini hemde deyerini yoxluyur
// 9.Məntiqi operatorlardan hansılarını tanıyırsız?
// 10.Şərt operatorlarından hansılarını tanıyırsız?
// 11.Neçə yolla funksiya yazmaq mümkündür  və fərqləri nədir?
// 3 yolla yazmaq olur
// 12.Hansı dövr operatorlarını tanıyırsız və fərqləri nədir?
// foreach ,if ,else ,if  else, key,value ,for
// 13.Destructring nə üçün istifadə olunur?
// 14.Spread və Rest operatorları haqqında danışın.
// 15.Callback və High Order funksiyaları haqqında danışın.
// 16.Recursive funksiya haqqında danışın.
// 17.Array methodlarından hansıları tanıyırsız və nə üçün istifadə olunur?
// push,unsihft,sihft,pop
// 18.Arrayın hansı high order metodlarını tanıyırsız? Hansı metodları özünü dəyişir, hansılar isə yeni array yaradır?
// 19.Settimeout`la setintervalın fərqi nədir?
// 20.DOM nədir və nə üçün istifadə olunur?
// document,object,manupuleyshin
// 21.Js`də HTML elementini hansı yollarla seçmək olar?
// 22.Js`də event`lər nədir və hansıları tanıyırsız?
// click,input,submit,change
// 23.Array`də ən böyük ədədin tapılmasını yazın:
// [23,4,12,65,1,41,27]-->65
// Metodlardan istifadə etmədən yazın.
// 24.String qəbul edən və bu stringdəki bütün sözlərin ilk hərfini böyük hərflə əvəz edən funksiya yazın:
// `my name is john`-->`My Name İs John`
// const students = [
// //   { name: "Alice", grade: 90 },
// //   { name: "Bob", grade: 85 },
// //   { name: "Charlie", grade: 92 },
// // ];

// // console.log(students)
// 25.Array`də təkrarlanan elementləri konsola çıxaran funksiya yazın.
// [2,2,4,4,2,1,5,3,1,6,2]-->[2,4,1]
// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// // let arr3 = [8, 9, 10, 11];

// // function pusO(lan) {
// //   for (let i = 0; i < lan.length; i++) {
// //     if (arr1[i] !== lan[i]) {
// //       arr1.push(lan[i]);
// //     }
// //   }
// //   console.log(arr1);
// 26.1 input yaradın və bu inputun dəyərini, button`a click olunduqda siyahı formasında alt-alta yığsın.
// 27. Array formasında verilmiş dataları .reduce() metodu ilə sayını tapan alqoritm yazın.
// Input:["test1","test1","test2","test3","test3","test3"]
// Output:{
// test1:2,
// test2:1,
// test3:3
// }
// 28.
// console.log(1)
// setTimeout(()=>{
// console.log(2)
// },0)
// console.log(3)
// kodu run etdikdə konsolda hansı ardıcıllıq görünəcək və səbəbi nədir?
// console.log(1)
// setTimeout(()=>{
// console.log(2)
// },0)
// console.log(3)
// 1,3,2 olaraq gorsenecek consol loga cixardigimiz ucun her birinji ona gore birini coldeki elementleri gosderecek sonra ise icinde olan elemntleri gosderecek ona gorede 1,3,2 olaraq siralanir
// 29. 100-ə qədər sadə ədədləri array-in içinə yığan dövr yazın.

// 30. Müəyyən bir rəqəm qəbul edən və bu rəqəmə qədər olan fibonacci ardıcıllığını arrayın içinə yığan funksiya yazın.
// 0,1,1,2,3,5
// Google Formlar üzerinden asla şifre göndermeyin.
// Bu içerik Google tarafından oluşturulmamış veya onaylanmamıştır. Kötüye Kullanımı Bildirme - Hizmet Şartları - Gizlilik Politikası
// Google Formlar
