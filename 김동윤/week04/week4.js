// 1번 문제
const PI = 3.14;
let Radius = Number(prompt("반지름을 입력해주세요."));
let Area = 2 * PI * Radius;
alert(`원의 넓이는 ${Area}입니다.`);

//2번 문제
const iceCream = ["치즈", "요구르트", "우유"];
iceCream.push("아이스크림");

//3번 문제
iceCream.splice(2, 0, "빵");

//4번 문제
const num = Number(prompt("숫자를 입력하세요."));
if (num > 0) {
  console.log("양수입니다.");
} else if (num == 0) {
  console.log("0입니다.");
} else {
  console.log("음수입니다.");
}

//5번 문제
const num = Number(prompt("숫자를 입력하세요"));
if (num % 2 == 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}

//6번 문제
let num = 0;
for (let i = 1; i <= 10; i++) {
  num += i;
}

//7번 문제
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//8번 문제
let a = Number(prompt("a를 입력해주세요"));
let b = Number(prompt("b를 입력해주세요"));

let sum = 0;

const num = (a, b) => {
  if (a < b) {
    for (; a <= b; a++) {
      sum += a;
    }
    return sum;
  } else if (b < a) {
    for (; b <= a; b++) {
      sum += b;
    }
    return sum;
  }
};

console.log(num(a, b));

//9번 문제
console.log(
  `${student.name}, ${student.isGraduated}, ${student.subjects[1]}, ${student.address.city}`,
);

//10번 문제
//홍길동은(는) 20세이고, 서울에 살고 있습니다.

//11번 문제
const greeting = (name) => {
    return `안녕하세요, ${name}님!`
} 