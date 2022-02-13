console.log("JavaScript is running!");

document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");

  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 350);
  }
});

//read more (thrash)

// let blogBtn = document.getElementsByClassName('.blogbtn');
// document.querySelector('.readMore').style.display = 'none';
// console.log(document.querySelector('.readMore'));

// document.querySelectorAll(".blogbtn").forEach((item) => {
//   item.addEventListener("click", (event) => {
//     console.log("Read More Clicked!");
//     document.querySelector(".readMore").classList.toggle("readMoreGo");

//     if (document.querySelector(".readMore").classList.contains("readMoreGo")) {
//       document.querySelector(".readMore").style.display = "none";
//     } else {
//       document.querySelector(".readMore").style.display = "inline";
//     }
//   });
// });

// document.querySelectorAll('.blogbtn').addEventListener('click', () => {
//   console.log('Read More Clicked!');
//   document.querySelector(".readMore").classList.toggle("readMoreGo");

//   if (document.querySelector(".readMore").classList.contains("readMoreGo")) {
//     document.querySelector(".readMore").style.display = "none";
//   } else {
//     document.querySelector(".readMore").style.display = "inline";
//   }
// });

// document.querySelectorAll('.some-class').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })


// console.log("Read More Clicked!");
// document.querySelector(".readMore").classList.toggle("readMoreGo");

// if (document.querySelector(".readMore").classList.contains("readMoreGo")) {
//   document.querySelector(".readMore").style.display = "none";
// } else {
//   document.querySelector(".readMore").style.display = "inline";
// }


