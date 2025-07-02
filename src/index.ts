type User = { age: number; nickName: string; isMember: boolean };

const obj: User = {
  age: 10,
  nickName: "hong",
  isMember: true,
};

for (let key in obj) {
  console.log(key); // age, nickName, isMember
  console.log(obj[key as keyof User]); // 10, hong, true
}

