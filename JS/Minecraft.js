// Write Code Vanilla JS

// Membuat Toggle asideBar
const navList = document.querySelector(".nav-list");

document.querySelector("#asideBar").onclick = () => {
  navList.classList.toggle("active");
};

const differentPage = document.querySelector("#asideBar");

document.addEventListener("click", function (e) {
  if (!differentPage.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});

// akhir baris fungsi dari Toggle asidebar

// Fungsi untuk button dari section Click Me!
function clickMe() {
  const Object = document.getElementById("object");
  console.log("Click", this.Object);

  const baseUrl = "https://www.minecraft.net/en-us/download";
  location.replace(baseUrl);
}
// akhir baris dari fungsi button

// Akhir baris dari Write Code Vanilla JS

// Write Jquery JS

// Membuat event
$(".scroll").on("click", function () {
  let href = $(this).attr("href");

  // Membuat scrolll yang bersangkutan
  let objectHref = $(href);

  // Membuat animasi scrollnya
  $("html, body").animate(
    {
      scrollTop: objectHref.offset().top,
    },
    1000,
    "swing"
  );
});

// Akhir baris Code Jquery JS
