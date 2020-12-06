
// const elementsArray = document.querySelectorAll(".clickable");
//   elementsArray.forEach(element) => {
//     addEventListener("click", (event) => {
//       element.classList.toggle("active");

//   }
const elements = document.querySelectorAll(".clickable");

elements.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    console.log(event.currentTarget);
  });
});

// sports.forEach((sport) => {
//  sport.addEventListener(“click”, (event) => {
//    event.currentTarget.classList.toggle(“active”);
//    console.log(event.currentTarget);
//  });
