/**
 * 지정된 주소로 Http 요청을 보내고 결과를 함수로 처리함.
 *
 * @param {string} addr - 요청을 보낼 URL (예: "posts", "albums" )
 * @param {"GET"|"POST"|"PUT"|"DELETE"|"PATCH"} method - HTTP 메소드 종류
 * @param {(responseText:string) => void} callback - 요청 성공시 실행할 콜백함수
 */

function getData(addr, method, callback) {
  const url = `https://jsonplacholder.typicode.com/${addr}`;
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      // 콜백 함수 자리
      callback(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("쿼리 잘못됨. 확인");
    } else if (xhr.status === 505) {
      console.log("서버 오류. 다시 시도");
    }
  };
}

function postParse(_data) {}
function albumsParse(_data) {}
function photosParse(_data) {}
function todosParse(_data) {}
getData("posts", "GET", postParse);
getData("albums", "GET", albumsParse);
getData("photos", "GET", photosParse);
getData("todos", "GET", todosParse);
