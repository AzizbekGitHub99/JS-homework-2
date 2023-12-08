// // boolean 1

// let A = +prompt('A butun son kiriting!');

// let res = (A % 2 === 0 && A !== 0);

// console.log(res);

// // boolean 2

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');

// let res = (A >=0 || B < -2);

// console.log(res);

// // boolean 3

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');
// let C = +prompt('C butun son kiriting!');

// let res = (((A > C) && (A > B) && (C < B)) || ((A < C) && (A < B) && (C > B)));

// console.log(res);

// // boolean 4

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');

// let res = ((A % 2 !==0) && (B % 2 !==0));

// console.log(res);

// // boolean 5

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');

// let res = ((A % 2 !==0) || (B % 2 !==0));

// console.log(res);

// // boolean 6

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');

// let res = (((A % 2 !==0) && (B % 2 ===0)) || ((A % 2 ===0) && (B % 2 !==0)));

// console.log(res);

// // boolean 7

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');
// let C = +prompt('C butun son kiriting!');

// let res = ((Math.abs(A) === A && A !==0) && (Math.abs(B) === B && B !==0) && (Math.abs(C) === C && C !==0));

// console.log(res);

// // boolean 8

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');
// let C = +prompt('C butun son kiriting!');

// let res = (
//   (Math.abs(A) === A && A !== 0) && (Math.abs(B) !== B || B === 0) && (Math.abs(C) !== C || C === 0) || 
//   (Math.abs(A) !== A || A === 0) && (Math.abs(B) === B && B !== 0) && (Math.abs(C) !== C || C === 0) ||
//   (Math.abs(A) !== A || A === 0) && (Math.abs(B) !== B || B === 0) && (Math.abs(C) === C && C !== 0)
// );

// console.log(res);

// // boolean 9

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');
// let C = +prompt('C butun son kiriting!');

// let res = (
//   (Math.abs(A) === A && A !== 0) && (Math.abs(B) === B && B !== 0) && (Math.abs(C) !== C || C === 0) || 
//   (Math.abs(A) === A || A !== 0) && (Math.abs(B) !== B && B === 0) && (Math.abs(C) === C || C !== 0) ||
//   (Math.abs(A) !== A || A === 0) && (Math.abs(B) === B || B !== 0) && (Math.abs(C) === C && C !== 0)
// );

// console.log(res);

// // boolean 10

// let A = +prompt('Ikki honali juft va butun son kiriting!');

// let res = ((A / 10 >= 1) && (A % 2 == 0));

// console.log(res);

// // boolean 11

// let A = +prompt('Uch honali toq va butun son kiriting!');

// let res = ((A / 100 >= 1) && (A % 2 !== 0));

// console.log(res);

// // boolean 12

// let A = +prompt('A butun son kiriting!');
// let B = +prompt('B butun son kiriting!');
// let C = +prompt('C butun son kiriting!');

// let res = (
//   (Math.abs(A) === Math.abs(C) && A !== 0 && Math.sign(A) !== Math.sign(C)) || 
//   (Math.abs(A) === Math.abs(B) && A !== 0 && Math.sign(A) !== Math.sign(B)) || 
//   (Math.abs(B) === Math.abs(C) && B !== 0 && Math.sign(B) !== Math.sign(C))
// );

// console.log(res);

// // boolean 13

// let A = +prompt('Uch honali butun son kiriting!');

// let bir = Math.abs(A) % 10;
// let on = (Math.abs(A) % 100 - bir) / 10;
// let yuz = Math.trunc(Math.abs(A) / 100);

// let res = (
//   ((yuz < on) && (on < bir))
// );

// console.log(res);

// // boolean 14

// let A = +prompt('Uch honali butun son kiriting!');

// let bir = Math.abs(A) % 10;
// let on = (Math.abs(A) % 100 - bir) / 10;
// let yuz = Math.trunc(Math.abs(A) / 100);

// let res = (
//   (((yuz < on) && (on < bir)) || ((yuz > on) && (on > bir)))
// );

// console.log(res);

// // boolean 15

// let A = +prompt('Uch honali butun son kiriting!');

// let bir = Math.abs(A) % 10;
// let on = (Math.abs(A) % 100 - bir) / 10;
// let yuz = Math.trunc(Math.abs(A) / 100);

// let res = (
//   (Math.abs(A) === (bir * 100 + on *10 + yuz))
// );

// console.log(res);