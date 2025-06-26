type memberType = {
  userName: string;
  age: number;
  group: string;
};
const member: memberType = { userName: "뷔", age: 30, group: "BTS" };
// const { username, age, group } = member;

// 사용하지 않은 나머지 속성만 모으는 연산자
const { ...rest }: memberType = member;
console.log(rest);

const { userName, ...who }: memberType = member;
console.log(userName);
console.log(who);
