// Javascript'e Giriş
let merhaba = "merhaba"
alert("Hoşgeldiniz.");
console.log(merhaba);
console.log(1234);
console.log(true);
console.log([1, 2, 3]);
console.warn("uyarı");
console.error("hata oluştu");

// Değişkenler
var age;
console.log(age); // Undefined (atama yapılmamış) Değişken

age = 20;
console.log(age); // Sayısal değer atanmış değişken

var fullname = "Mustafa Tuncel";
console.log(fullname); // Sözel değer atanmış değişken

// Değişken Tipleri
// a-Primitive Types
// Undefined
let car;
// String
let firstname = "Çınar";
// Number
let age = 20;
// Boolean
let IsActive = true
console.log(IsActive);
// Null
let job = null;

// b-Reference Types - Objects
// Array
let names = ["Ali", "Ahmet", "Can"];
// Object Literals
let address = {
    city: "Tekirdağ",
    country: "Türkiye"
};
// Function
let calculateAge = function () {
    return 0;
};


// ÖRNEKLER
//Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri T.C. no
// ** Müşteri Yaşı
// ** Cinsiyet
// ** Hobiler
// ** Adres bilgisi
// ** Sipariş toplamı

var customerName = "Mustafa";
console.log(customerName);

var customerLastname = "Tuncel";
console.log(customerLastname);

var customerTC = "12341234123";
console.log(customerTC);

var customerAge = "29";
console.log(customerAge);

var customerGender = "Erkek"; // boolean / true - false değeri de tanımlanabilir
console.log(customerGender);

var customerHobbies = "making a picture, music, D&D 5, sport, stand up"; // array / dizi değeri de tanımlanabilir [...]
console.log(customerHobbies);

var customerAddress = "bla mah. bla cad. bla ap. no:85 d:14 Küçükçekmece/İSTANBUL"; // object literal / object değeri de tanımlanabilir {...}
console.log(customerAddress);

var customerOrderTotal = 205.6;
console.log(customerOrderTotal);

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
var order1 = "100";
var order2 = "150";

var order1 = Number("100");
var order2 = Number("150");

var totalOrder = order1+order2;
console.log(totalOrder);

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
// (parseInt = yuvarlama, parseFloat (default) = tam sayı)
var order3 = "100.2";
var order4 = "150.5";

var order3 = Number("100.2");
var order4 = Number("150.5");

var totalOrder2 = order3 + order4;
console.log(totalOrder2);  
// (tam sayı olarak toplandı - default)

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.
// (parseInt = yuvarlama, parseFloat = tam sayı) 
var order3 = "100.2";
var order4 = "150.5";

var order3 = Number("100.2");
var order4 = Number("150.5");

var totalorder3 = order3 + order4;
console.log(parseInt(totalorder3));
// yada 
var order3 = parseInt("100.2");
var order4 = parseInt("150.5");

var totalorder3 = order3 + order4;
console.log(totalorder3);

// (yuvarlayarak toplandı)

// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.
var yearOfBirth = 1993;

console.log(new Date().getFullYear()-yearOfBirth);

// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.
var course = "Front-End Development";

console.log(course.length);



// Operatörler
let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3; // olduğunu varsayarsak...

// 1 Aritmetik Operatörler (Matematiksel İşlemler)
val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b; //mod almak, sayının tek mi çift mi olduğunu kontrol etmek (0 = çift, 1 = tek)
val = d++; // değişkeni konsola yazdırdıktan sonra arttırma işlemi yapar, önceden belirlenmiş değer gözükür
val = ++d; // değişkeni konsola yazdırmadan önce arttırma işlemi yapar, güncel değer gözükür
val = d--;
val = --d;

// 2 Atama Operatörleri (Matematiksel Kısayol İşlemler)
val = a;
val += a; // val = val + a (10+10)
val -= a; // val = val - a (20-10)
val *= a; // val = val * a (10*10)
val /= a; // val = val / a (100/10)
val %= a; // val = val % a (10/2 = 0, val çift sayı)

// 3 Karşılaştırma Operatörleri (Eşitlik, Büyüklük - Küçüklük ve Tip Kontrolleri)
val = a == b; // false
val = b == c; // true
val = a == b + c; // true

val = 5 == "5"; // true, sadece değeri kontrol eder (birisi Number birisi String olmasına rağmen doğru sonuç verir)
val = 5 === "5"; // false, değeri ve tipi kontrol eder (birisi Number Birisi String olduğu için yanlış sonuç verir)

val = a != b; // true, a b'ye eşit değildir
val = a !== b; // true, a b'ye eşit değildir
val = a > b; // true, a b'den büyüktür
val = b < a; // true, b a'dan küçüktür

val = a >= b; // true, a b'ye eşit yada daha büyüktür
val = a <= b; // false, a b'ye eşit yada daha küçük değildir
val = 5 >= 5; // true, 5 5'e eşit yada daha büyüktür
val = 4 >= 5; // false, 4 5'e eşit yada daha büyük değildir

// 4 Mantıksal Operatörler

// && (and, birden fazla değerin sonucunun ayrı ayrı değil tek olarak alınması)
// true  && true  = true
// true  && false = false
// false && false = false
val = a > b // true
val = a > c // true
val = (a > b) && (a > c) // true

// || (or, birden fazla değerden herhangi birisinin sonucunun alınması)
// true  && true  = true
// true  && false = true
// false && false = false
val = a > b // true
val = a > c // true
val = (a > b) || (a > c) // true

// ! (not, ters değer alınması)
// !true = false
// !false = true
val = a > b // true
val = a > c // true
val = !(a > b) // false

console.log(val);
console.log(typeof val);



// ÖRNEKLER (demo: operators)

// 1 - Can ve Ada'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
// (formül : kişinin kilosu / boy uzunluğunun karesi)
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre Can ve Ada hangi gruba giriyor ?

// 0 - 18,4 : zayıf
// 18,5 - 24,9 : Normal
// 25,0 - 29,9 : Fazla Kilolu
// 30,0 - 34,9 : Şişman (Obez)

// 1 -
let IndexKgCan;
let IndexKgAda;

const weightCan = 60;
const weightAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

// 2 -
IndexKgCan = (weightCan) / (heightCan * heightCan);
IndexKgAda = (weightAda) / (heightAda * heightAda);

console.log(IndexKgCan, IndexKgAda);

// 3 -
// Karşılaştırmalar, normal ve açıklamalı boolean değerleri, Ada Can'dan / Can Ada'dan daha mı kilolu ? vb. sorular
let AdaHigherIndex = IndexKgAda > IndexKgCan;

console.log(AdaHigherIndex);

console.log("Ada'nın kilo indeksi, Can'ın kilo indeksinden daha büyüktür. : " + AdaHigherIndex);

let CanHigherIndex = IndexKgCan > IndexKgAda;

console.log(CanHigherIndex);

console.log("Can'ın kilo indeksi, Ada'nın kilo indeksinden daha büyüktür. : " + CanHigherIndex);

// 4 -
let AdaZayıftır = (IndexKgAda >= 0) && (IndexKgAda <= 18.4);

console.log(AdaZayıftır);

console.log("Ada zayıf gruptadır : " + AdaZayıftır);

let CanZayıftır = (IndexKgCan >= 0) && (IndexKgCan <= 18.4);

console.log(CanZayıftır);

console.log("Can zayıf gruptadır : " + CanZayıftır);



// TARİH & SAAT (Date & Time) // Object

// (pzr = 0, pzt = 1, tue = 2, wed = 3, thu = 4, fri = 5, sat = 6)
// (jan = 0, feb = 1, mar = 2, apr = 3, may = 4, jun = 5, jul = 6, aug = 7, sep = 8, oct = 9, nov = 10, dec = 11)

let tarih = new Date();
console.log(tarih);
console.log(typeof tarih);

// Doğum günü hesaplama örneği
let birthday = new Date(1993, 6, 21);
console.log(tarih.getFullYear() - birthday.getFullYear()); // Kaç sene olmuş ? // Güncel yıl - Doğum yılı (2022-1993=29 yıl)
console.log(tarih.getMonth() - birthday.getMonth()); // Kaç ay olmuş ? // Güncel ay - Doğduğun ay (11-6=5 ay, 11=aralık, 6=temmuz)
console.log(tarih.getDate() - birthday.getDate()); // Kaç gün olmuş ? // Güncel gün - Doğduğun gün (27-21=6 gün, bulunduğun ayı sayar)

// 1 - SET METHODS (get metoduyla girilen tarih ve saat bilgilerini el ile değiştirmek)

// (değerler işlem sırası olarak get metodlarından önce girilmelidir)
// (.setDay çalışmaz, .setDate ile zaten otomatik olarak değiştirilir)
tarih.setMilliseconds(10);
tarih.setSeconds(20);
tarih.setMinutes(30);
tarih.setHours(8);
tarih.setDate(20);
tarih.setMonth(5);
tarih.setFullYear(2020);

// 2 - GET METHODS (otomatik tarih ve saat bilgilerini almak)

// Konsolda görünürlük
console.log(tarih); // Tam tarih ve saat bilgisi
console.log(tarih.getMilliseconds()); // Milisaniye kaç ?
console.log(tarih.getSeconds()); // Saniye kaç ?
console.log(tarih.getMinutes()); // Dakika kaç ?
console.log(tarih.getHours()); // Saat kaç ?
console.log(tarih.getDay()); // Hangi gün ?
console.log(tarih.getDate()); // Ayın kaçı ?
console.log(tarih.getMonth()); // Hangi ay ?
console.log(tarih.getFullYear()); // Hangi yıl ?

console.log(tarih.getTime()); // 1 Ocak 1970'den günümüze geçen süreyi milisaniye cinsinden hesaplar
console.log(tarih.getTimezoneOffset()); // UTC saati ile bulunduğun saat arasındaki farkı dakika cinsinden hesaplar
// GMT+03:00 ise, -180 gösterir, 3 saatlik fark ile UTC saatinden ileridesin

// Konsolda UTC görünürlüğü
console.log(tarih.getUTCMilliseconds()); // UTC Milisaniye kaç ?
console.log(tarih.getUTCSeconds()); // UTC Saniye kaç ?
console.log(tarih.getUTCMinutes()); // UTC Dakika kaç ?
console.log(tarih.getUTCHours()); // UTC Saat kaç ?
console.log(tarih.getUTCDay()); // UTC Hangi gün ?
console.log(tarih.getUTCDate()); // UTC Ayın kaçı ?
console.log(tarih.getUTCMonth()); // UTC Hangi ay ?
console.log(tarih.getUTCFullYear()); // UTC Hangi yıl ?



