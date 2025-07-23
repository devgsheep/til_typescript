class Animal {
  public name: string; // 모든 접근가능
  private age: number; // 모든 접근불가
  protected breeze: string; // 상속시 접근가능
  test() {
    this.name;
    this.age;
    this.breeze;
  }
}

class Cat extends Animal {
  show() {
    this.name;
    this.age; // Error 접근 불가, private
    this.breeze;
  }
}

const c = new Cat();
c.name; // 접근가능
c.age; // Error 접근불가, private
c.breeze; // Error 접근불가, protected
