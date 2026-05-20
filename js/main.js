const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
const billingToggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll("[data-monthly]");
const dealsRange = document.getElementById("dealsRange");
const dealCount = document.getElementById("dealCount");
const roiValue = document.getElementById("roiValue");
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  const icon = menuToggle.querySelector("i");
  icon.className = navMenu.classList.contains("show")
    ? "ri-close-line"
    : "ri-menu-3-line";
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuToggle.querySelector("i").className = "ri-menu-3-line";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.querySelector("i").className = isDark
    ? "ri-sun-line"
    : "ri-moon-clear-line";

  localStorage.setItem("pipelineiq-theme", isDark ? "dark" : "light");
});

if (localStorage.getItem("pipelineiq-theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.querySelector("i").className = "ri-sun-line";
}

billingToggle.addEventListener("click", () => {
  billingToggle.classList.toggle("yearly");
  const yearly = billingToggle.classList.contains("yearly");

  prices.forEach((price) => {
    price.textContent = yearly
      ? price.dataset.yearly
      : price.dataset.monthly;
  });
});

function updateRoi() {
  const deals = Number(dealsRange.value);
  const recovered = deals * 300;

  dealCount.textContent = deals;
  roiValue.textContent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(recovered);
}

dealsRange.addEventListener("input", updateRoi);
updateRoi();

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Success! Your demo request has been saved.";
  signupForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3500);
});
