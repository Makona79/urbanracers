console.log("кнопка");
const showMore = document.querySelector(".show-more");
const productsLength = document.querySelectorAll(".panel-tabs__box").length;
let items = 5;

showMore.addEventListener("click", () => {
  items += 3;
  const array = Array.from(
    document.querySelector(".panel-tabs__list").children
  );
  const visItems = array.slice(0, items);

  visItems.forEach((el) => el.classList.add("is-visible"));

  if (visItems.length === productsLength) {
    showMore.style.display = "none";
  }
});
