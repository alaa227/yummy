function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("nav").style = "left :250px";
  document.getElementById(
    "openebtn"
  ).innerHTML = `<i class="fa-solid fa-x"onclick="closeNav()"></i>`;

  // console.log("bj");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("nav").style = "left :0px";
  document.getElementById(
    "openebtn"
  ).innerHTML = `<i class="fa-solid fa-bars" onclick="openNav()"></i>`;
}
async function startApp() {
  let meals = await getPaginatedMeals(1, 20);

  displayPaginatedMeals(meals);
}
//&startApp();
// async function getData() {
//   let response = await fetch(
//     `https://themealdb.com/api/json/v1/1/search.php?s=all`
//   );
//   let data = await response.json();
//   // console.log(data);
// }

async function getPaginatedMeals(offset, limit) {
  let response = await fetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=a&offset=${offset}&limit=${limit}`
  );
  let data = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.ok}`);
  }
  let meals = data.meals;
  return meals;
}
//  function p() {
//    console.log("fun p");
//  }

function displayPaginatedMeals(meals) {
  const mealsContainer = document.querySelector(".meals-container");
  mealsContainer.innerHTML = ""; // This removes any existing content

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const mealName = meal.strMeal;
    const mealImage = meal.strMealThumb;

    let cartona = `<div class=" c">
        <div class="cont rounded-4">
          <img src="${mealImage}" onclick="p" class="meal-image" alt="...">

          <div class="t">
            <h2 class="my-5 p-2">${mealName}</h2>
          </div>
        </div>
      </div>`;
    mealsContainer.innerHTML += cartona;

    //console.log("ll");
    const mealImageElement = document.querySelector(".c");
    mealImageElement.addEventListener("click", function () {
      // Handle click event here (open new page with meal details)
      // openMealDetailsPage(meal); // Assuming you have this function
      // console.log("p");
    });
  }
  //!=================================================================================
}

async function getCategoriesData() {
  let response = await fetch(
    `https://themealdb.com/api/json/v1/1/categories.php`
  );
  let data = await response.json();
  let categ = data.categories;
  // console.log(data);
  displayCategoriesMeals(categ);
  return categ;
}

function displayCategoriesMeals(meals) {
  const mealsContainer = document.querySelector(".meals-container");
  mealsContainer.innerHTML = ""; // This removes any existing content

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const mealName = meal.strCategory;
    const mealImage = meal.strCategoryThumb;
    const mealDis = meal.strCategoryDescription;

    let cartona = `<div class=" c">
        <div class="cont rounded-4">
          <img src="${mealImage}" onclick="p" class="meal-image" alt="...">

          <div class="t">
            <h2 class="mt-5 p-2">${mealName}</h2>
            <p class="my-5 p-2">${mealDis}</p>
          </div>
        </div>
      </div>`;
    mealsContainer.innerHTML += cartona;

    // console.log("cat");
    const mealImageElement = document.querySelector(".c");
    mealImageElement.addEventListener("click", function () {
      // Handle click event here (open new page with meal details)
      // openMealDetailsPage(meal); // Assuming you have this function
      // console.log("p");
    });
  }
}
//!=====================================================================================

async function getAreasData() {
  let response = await fetch(
    `https://themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let data = await response.json();
  let area = data.meals;
  //console.log(data.meals);
  displayAreaMeals(area);
  return area;
}

function displayAreaMeals(meals) {
  const mealsContainer = document.querySelector(".meals-container");
  mealsContainer.innerHTML = ""; // This removes any existing content

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const mealName = meal.strArea;

    let cartona = `<div class=" c">
        <div class="cont rounded-4">
          <i class="fa-solid fa-house-laptop fn-50"></i>>

          
            <h3 class="mt-5 p-2 text-white">${mealName}</h3>

        </div>
      </div>`;
    mealsContainer.innerHTML += cartona;

    // console.log("cat");
    // const mealImageElement = document.querySelector(".c");
    // mealImageElement.addEventListener("click", function () {
    //   // Handle click event here (open new page with meal details)
    // openMealDetailsPage(meal); // Assuming you have this function
    // console.log("p");
    //   });
  }
}
// !=============================================================================

async function getingredientData() {
  let response = await fetch(
    `https://themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let data = await response.json();
  let area = data.meals;
  console.log(data.meals);
  displayingredientMeals(area);
  return area;
}

function displayingredientMeals(meals) {
  const mealsContainer = document.querySelector(".meals-container");
  mealsContainer.innerHTML = ""; // This removes any existing content

  for (let i = 0; i < 20; i++) {
    const meal = meals[i];
    const mealName = meal.strIngredient;
    const mealdis = meal.strDescription.slice(0, 202).split(" ").join(" ");

    let cartona = `<div class=" c">
        <div class="cont rounded-4">
          <i class="fa-solid fa-drumstick-bite fn-50"></i>>
            <h3 class="mt-5 p-1 text-white">${mealName}</h3>
            <p class=" p-2 text-white">${mealdis}</p>

        </div>
      </div>`;
    mealsContainer.innerHTML += cartona;

    // console.log("cat");
    // const mealImageElement = document.querySelector(".c");
    // mealImageElement.addEventListener("click", function () {
    //   // Handle click event here (open new page with meal details)
    // openMealDetailsPage(meal); // Assuming you have this function
    // console.log("p");
    //   });
  }
}
//^===========================
let submit = document.getElementById("submit");
let namee = document.getElementById("na");
let enamee = document.getElementById("eNa");
let flagN = false;
let email = document.getElementById("e");
let eemail = document.getElementById("ee");
let flagG = false;
let phone = document.getElementById("m");
let ephone = document.getElementById("em");
let flagM = false;
let age = document.getElementById("a");
let eage = document.getElementById("ea");
let flagA= false;
let pass = document.getElementById("p");
let epass = document.getElementById("ep");
let flagP = false;
let repass = document.getElementById("rp");
let erepass = document.getElementById("erp");
let flagR = false;

namee.addEventListener("input", function () {
  const regex = /^[^0-9\W]+$/;
  const isValid = regex.test(namee.value);

  if (isValid) {
    //console.log(" is a valid string.");
    enamee.classList.add("d-none");
    enamee.innerHTML = " ";
    flagN = true;
  } else {
    //   console.log(" contains invalid characters. Please enter only letters and underscores.");
    enamee.innerHTML = " Special characters and numbers not allowed";
  }
  enamee.classList.replace("d-none", "d-block");
  if (flagA && flagN && flagG && flagM && pass.value === repass.value) {
    console.log("truu");
    submit.removeAttribute("disabled");
  }
});
//^=======================================================================
email.addEventListener("input", function () {
  const regex = /^[\w-.]+@[\w-]+(?:\.[a-zA-Z]{2,})+$/;
  const isValid = regex.test(email.value);

  if (isValid) {
    console.log(" is a valid string.");
    eemail.classList.add("d-none");
    eemail.innerHTML = " ";
    flagG = true;
  } else {
    console.log(
      "invalid characters. Please enter only letters and underscores."
    );
    eemail.innerHTML = "Email not valid *exemple@yyy.zzz";
  }
  eemail.classList.replace("d-none", "d-block");
  if (flagA && flagN && flagG && flagM && pass.value === repass.value) {
    console.log("truu");
    submit.removeAttribute("disabled");
  }
});
//^=======================================================================
phone.addEventListener("input", function () {
  const regex = /^\d{11}$/;
  const isValid = regex.test(phone.value);

  if (isValid) {
    console.log(" is a valid string.");
    ephone.classList.add("d-none");
    ephone.innerHTML = " ";
    flagM = true;
  } else {
    console.log(
      "invalid characters. Please enter only letters and underscores."
    );
    ephone.innerHTML = "Enter valid Phone Number";
  }
 ephone.classList.replace("d-none", "d-block");
 if (flagA && flagN && flagG && flagM && pass.value === repass.value) {
   console.log("truu");
   submit.removeAttribute("disabled");
 }
});
//^=======================================================================
age.addEventListener("input", function () {
  const regex = /^\d+$/;
  const isValid = regex.test(age.value);

  if (isValid) {
    console.log(" is a valid string.");
    eage.classList.add("d-none");
    eage.innerHTML = " ";
    flagA = true;
  } else {
    console.log(
      "invalid characters. Please enter only letters and underscores."
    );
    eage.innerHTML = "Enter valid Phone Number";
  }
  eage.classList.replace("d-none", "d-block");
  if (flagA && flagN && flagG && flagM && pass.value === repass.value) {
    console.log("truu");
    submit.removeAttribute("disabled");
  }
});
//^=======================================================================
phone.addEventListener("input", function () {
  const regex = /^\d{11}$/;
  const isValid = regex.test(phone.value);

  if (isValid) {
    console.log(" is a valid string.");
    ephone.classList.add("d-none");
    ephone.innerHTML = " ";
    flagM = true;
  } else {
    console.log(
      "invalid characters. Please enter only letters and underscores."
    );
    ephone.innerHTML = "Enter valid Phone Number";
  }
 ephone.classList.replace("d-none", "d-block");
});
pass.addEventListener("input",function(){
  valPass(pass,epass,flagP)
})
repass.addEventListener("input", function () {
  valPass(repass, erepass, flagR);
  if (flagA && flagN && flagG && flagM && pass.value === repass.value) {
    console.log("truu");
    submit.removeAttribute("disabled");
  }
});
//*=======================================================================
function valPass(input ,einput ,flagI){
const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const isValid = regex.test(input.value);

  if (isValid) {
    console.log(" is a valid string.");
    einput.classList.add("d-none");
    einput.innerHTML = " ";
    flagI = true;
  } else {
    console.log("invalid characters. Please enter only letters and underscores." );
    einput.innerHTML = "Enter valid password *Minimum eight characters, at least one letter and one number:*";
  }
 einput.classList.replace("d-none", "d-block");
 if (flagA && flagN && flagG && flagM && pass.value === repass.value) {
   console.log("truu");
   submit.removeAttribute("disabled");
 }
}//*=======================================================================
submit.addEventListener("click",function(){
 
   
})


