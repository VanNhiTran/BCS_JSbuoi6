/**
 * 1/ input:
 * - lập 1 array = ""
 * - lấy giá trị array nhập vào
 * - hiển thị array ra màn hình
 * 2/ process:
 *
 */

//1,2,3,5 tính Total Positive Integer
function countPositiveNum(integerList) {
  var total = 0;
  var amount = 0;
  var even = 0;
  integerList.forEach(function (integer, i) {
    if (integer > 0) {
      total += integer;
      amount++;
    }
    if (integer % 2 == 0) {
      even = integer;
    }
  });
  return { total, amount, even };
}
//4. lấy số dương nhỏ nhất
function getMinPositiveNum(integerList) {
  var positiveIntegerList = integerList.filter(function (integer) {
    return integer > 0;
  });
  var sortPositiveIntegerList = positiveIntegerList.sort();
  var minPositiveNum = sortPositiveIntegerList[0];
  return minPositiveNum;
}

var integerList = [];
document.getElementById("btnAddNum").onclick = function () {
  var integer = document.getElementById("inputInteger").value;
  //vì integer là chuỗi value, k hiển thị trực tiếp ra màn hình đc nên phải chuyển chuỗi ra số bằng mothod parseInt.
  integer = parseInt(integer);
  //để ô input trống mỗi lần click
  document.getElementById("inputInteger").value = "";
  document.getElementById("inputInteger").focus();
  //push thêm số vào array integerList
  integerList.push(integer);

  //lấy total đã tính hiện ra màn hình
  var totalPositiveNum = countPositiveNum(integerList).total;

  //lấy amount đã tính hiện ra màn hình
  var amountPositiveNum = countPositiveNum(integerList).amount;

  //lấy số nhỏ nhất
  var sortIntegerList = integerList.sort(function (a, b) {
    return a - b;
  });
  var minNum = integerList[0];

  //lay so duong nho nhat
  var minPositiveNum = getMinPositiveNum(integerList);

  //lay so chan cuoi cung
  var lastEven = countPositiveNum(integerList).even;
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
  //4/
  document.getElementById("spanMinPositiveNum").innerHTML = minPositiveNum;
  //5/
  document.getElementById("spanLastEven").innerHTML = lastEven;
  //7/
  document.getElementById("spanReOrder").innerHTML =
    JSON.stringify(sortIntegerList);
};
