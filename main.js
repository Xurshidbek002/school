// let headerList = document.querySelector(".header__button");
// let headerBtn = document.querySelector(".header-menu");

// headerBtn.addEventListener("click", function () {
//   headerList.classList.toggle("show");
// });

let sentMessage = document.querySelector(".row__form-input");
let sentBtn = document.querySelector(".row__form-btn");

sentBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let token = "7751088445:AAGS7YMGMzTtmCLMJSUUtvlIdnjsI-ETSDU";
  let chatId = 6873538625;
  let url = `https://api.telegram.org/bot${token}/sendMessage`;
  let text = sentMessage.value;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: sentMessage.value,
    }),
  })
    .then(() => {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    })
    .catch(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
});

let headerbtn = document.querySelector(".header__block-btn");
headerbtn.addEventListener("click", function (e) {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "error",
  });
});
let asideleftbtn = document.querySelector(".aside__row-leftbtn");
asideleftbtn.addEventListener("click", function () {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
});

let asiderightbtn = document.querySelector(".aside__row-rightbtn");
asiderightbtn.addEventListener("click", function () {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
});
