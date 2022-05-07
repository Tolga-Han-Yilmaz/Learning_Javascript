/*
and(&) -->  2 lik tabana göre hesaplanıyor

1.değer 2.değer sonuç
1        0       0
1         1       1
0         1       0
0         0       0
*/
var a = 5; // 00000000000000000000000000000101
var b = 3; // 00000000000000000000000000000011
console.log(a & b); // 00000000000000000000000000000001  --> 1

/*
or (|)  -->  2 lik tabana göre hesaplanıyor

1.değer 2.değer sonuç
1        0       1
1         1       1
0         1       1
0         0       0
*/
var a = 5; // 00000000000000000000000000000101
var b = 3; // 00000000000000000000000000000011
console.log(a | b); // 00000000000000000000000000000111  --> 7

/*
not (~)  --> bitleri tersine çeviriyor.1 ler 0,  0 lar 1 oluyor
*/
var a = 5; // 00000000000000000000000000000101
var b = -3; // 11111111111111111111111111111101
console.log(~a); // 11111111111111111111111111111010
// expected output: -6
console.log(~b); // 00000000000000000000000000000010
// expected output: 2

/*
XOR (^)  --> 2 bitten birisi 1 ise değer 1 olur. ikiside 0 veya 1 ise değer 0 olur
*/
var a = 5; // 00000000000000000000000000000101
var b = 3; // 00000000000000000000000000000011
console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 6

/*
Left shift(<<)  --> sola kaydırma operatörüdür. sağa yazılan değer kadar sola yazılanı kaydırır.
*/
var a = 5; // 00000000000000000000000000000101
var b = 2; // 00000000000000000000000000000010
console.log(a << b); // 00000000000000000000000000010100
// expected output: 20

/*
right shift (>>)  --> sağ kaydırma operatörü. left operatörün tam tersi oalrak düşünebiliriz
*/
var a = 5; //  00000000000000000000000000000101
var b = 2; //  00000000000000000000000000000010
var c = -5; // -00000000000000000000000000000101
console.log(a >> b); //  00000000000000000000000000000001
// expected output: 1
console.log(c >> b); // -00000000000000000000000000000010
// expected output: -2
