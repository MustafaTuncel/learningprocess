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