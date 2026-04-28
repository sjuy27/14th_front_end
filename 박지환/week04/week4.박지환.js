//1. 반지름을 입력 받아 원의 넓이를 구하는 코드
const PI = 3.14;
let radius = Number(prompt(`반지름을 입력하세요`));
let area = PI * radius * radius;
alert(area);

//2. ‘치즈’, ‘요구르트’, ‘우유’를 포함하는 배열을 작성하고, ‘아이스크림’을 배열 맨 뒤에 추가하는 코드 작성
const foods = [`치즈`, `요구르트`, `우유`];
foods.push(`아이스크림`);
console.log(foods);

//3. 2에서 만든 배열의 [2]에 ‘빵’ 추가하는 코드 작성
foods.splice(2, 0, `빵`);
console.log(foods);

//4. 숫자를 입력 받아 양수, 0, 음수를 구분하는 코드 작성
const num = Number(prompt(`숫자를 입력하세요`));
if (num > 0) {
  console.log(`양수`);
} else if (num === 0) {
  console.log(`0`);
} else {
  console.log(`음수`);
}

//5. 숫자를 입력 받아 짝수인지 홀수인지 판단하는 코드 작성
const num = Number(prompt(`숫자를 입력하세요`));
if (num % 2 === 0) {
  console.log(`짝수`);
} else {
  console.log(`홀수`);
}

//6. 1~10까지 더하는 코드 작성
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

//7. 5층 짜리 별 찍기 코드 작성
for (let i = 1; i <= 5; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }  console.log(stars);
}

//8. a와 b를 입력 받아 a~b까지 더하는 함수를 만드는 코드 작성 
let a = Number(prompt(`a를 입력해주세요`));
let b = Number(prompt(`b를 입력해주세요`));
function sumRange(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumRange(a, b));

//9. student 객체에서 학생의 이름, 졸업 여부, 두 번째 과목, 사는 도시의 값을 출력하는 코드를 작성하세요. 
console.log(student.name);
console.log(student.isGraduated);
console.log(student.subjects[1]);
console.log(student.address.city);

//10. student 객체의 getStudentInfo() 메서드를 호출하면 어떤 문자열이 출력될까요?
//홍길동은(는) 20세이고, 서울에 살고 있습니다.

//11. 주어진 함수를 function 키워드 대신 화살표 함수를 사용해 다시 작성해주세요. 
const myName = (name) => {
  console.log(`${name}님, 안녕하세요!`);
}
console.log(myName("김미미"));