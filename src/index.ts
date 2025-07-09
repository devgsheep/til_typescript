interface Animal {
  name: string;
}
const ani: Animal = {
  name: "홍길동",
};

interface Dog extends Animal {
  bork(): void;
}
const dog: Dog = {
  name: "댕댕이",
  bork: () => console.log("멍멍"),
};

interface Cat extends Animal {
  cry(): void;
}
const cat: Cat = {
  name: "야옹이",
  cry: () => console.log("야옹"),
};

interface Person extends Animal {
  say(): void;
}

const iu: Person = {
  name: "아이유",
  say: () => console.log("안녕"),
};
