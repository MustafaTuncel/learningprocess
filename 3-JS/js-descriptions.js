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



