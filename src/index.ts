// 클래스 만들기
class SampleClass {}
// 클래스로 인스턴스 변수 만들기(타입추론 잘됨)
const ins = new SampleClass();
// 클래스는 속성과 메서드 존재함.
class Game {
  name: string;
  country: string;
  download: number;
  // new를 붙여서 실행하면 인스턴스 생성자
  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  // 메소드
  introduce() {
    return `${this.name}게임은 ${this.country}에서 개발했고, ${this.download}만큼 다운로드가 되었습니다.`;
  }
}

/**
 * {
 * name:string
 * country:string
 * introduce():void
 * }
 */
const game = new Game("포트리스", "한국", 100);
console.log(game.name);
console.log(game.country);
console.log(game.download);
