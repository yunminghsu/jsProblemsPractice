let a = document.querySelector(".a");
let b = document.querySelector(".b");
a.addEventListener("click", () => {
  alert("紅色框框的事件監聽器正在被執行");
});
b.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("藍色框框的事件監聽器正在被執行");
});
