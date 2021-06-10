/**
 * 1/ input:
 * - lập 1 array = ""
 * - lấy giá trị array nhập vào
 * - hiển thị array ra màn hình
 * 2/ process:
 *
 */

//1. tính Total Positive Integer
function countTotalPositiveNum(integerList) {
  var total = 0;
  integerList.forEach(function (integer, i) {
    if (integer > 0) {
      total += integer;
    }
  });
  return total;
}

//2. tính Amount Positive Number có trong mảng
function countAmountPositiveNum(integerList) {
  var total = 0;
  integerList.forEach(function (integer) {
    if (integer > 0) {
      total++;
    }
  });
  return total;
}
//3. lấy số dương nhỏ nhất

function getMinPositiveNum(integerList) {
  var positiveIntegerList = [];
  integerList.forEach(function (integer) {
    if (integer > 0) {
      positiveIntegerList.push(integer);
    }
  });
}

var integerList = [];
function handleClick() {
  var integer = document.getElementById("inputInteger").value;
  //vì integer là chuỗi value, k hiển thị trực tiếp ra màn hình đc nên phải chuyển chuỗi ra số bằng mothod parseInt.
  integer = parseInt(integer);
  //để ô input trống mỗi lần click
  document.getElementById("inputInteger").value = "";
  //push thêm số vào array integerList
  integerList.push(integer);
  //lấy total đã tính hiện ra màn hình
  var totalPositiveNum = countTotalPositiveNum(integerList);
  //lấy amount đã tính hiện ra màn hình
  var amountPositiveNum = countAmountPositiveNum(integerList);
  //lấy số nhỏ nhất
  integerList.sort();
  var minNum = integerList[0];

  //lay so duong nho nhat
  var positiveIntegerList = getMinPositiveNum(integerList);
  positiveIntegerList.sort();
  var minPositiveNum = positiveIntegerList[0];

  /* render ra man hinh */
  //array:
  document.getElementById("spanArrayInteger").innerHTML =
    JSON.stringify(integerList);
  //1/ total:
  document.getElementById("spanTotalPositiveNum").innerHTML = totalPositiveNum;
  //2/ amount:
  document.getElementById("spanAmountPositiveNum").innerHTML =
    amountPositiveNum;
  //3/
  document.getElementById("spanMinNum").innerHTML = minNum;
  // //4/
  document.getElementById("spanMinPositiveNum").innerHTML = minPositiveNum;
  //7/
}
