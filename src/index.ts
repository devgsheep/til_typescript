let neverVar: never = 100;
neverVar1: never = 100;
neverVar2: never = true;
neverVar3: never = undefined;
neverVar4: never = null;

// 전달 시 unknown은 타입오류 발생
let testNum: number = neverVar;
