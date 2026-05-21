function showProducts() {
  console.log("=== DUKON MAHSULOTLARI ===");
  console.log("1. Non - 3000 so'm");
  console.log("2. Sut - 8000 so'm");
  console.log("3. Shakar - 12000 so'm");
}

function getPrice(productNumber) {
  if (productNumber == 1) {
    return 3000;
  } else if (productNumber == 2) {
    return 8000;
  } else if (productNumber == 3) {
    return 12000;
  } else {
    return 0;
  }
}

function getProductName(productNumber) {
  if (productNumber == 1) {
    return "Non";
  } else if (productNumber == 2) {
    return "Sut";
  } else if (productNumber == 3) {
    return "Shakar";
  } else {
    return "Noma'lum mahsulot";
  }
}

function calculateTotal(price, count) {
  return price * count;
}

function printCheck(productName, price, count, total) {
  console.log("=== CHEK ===");
  console.log("Mahsulot: " + productName);
  console.log("Narxi: " + price + " so'm");
  console.log("Soni: " + count);
  console.log("Jami: " + total + " so'm");
  console.log("Xaridingiz uchun rahmat!");
}

showProducts();

let productNumber = prompt("Mahsulot raqamini kiriting: 1, 2 yoki 3");
let count = prompt("Nechta olmoqchisiz?");

productNumber = Number(productNumber);
count = Number(count);

let price = getPrice(productNumber);
let productName = getProductName(productNumber);

if (price == 0) {
  console.log("Bunday mahsulot yo'q");
} else {
  let total = calculateTotal(price, count);
  printCheck(productName, price, count, total);
}