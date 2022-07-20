const meals = [
    {
      food: "Pumpkin Pie",
      image: "ASSETS/pumpkinPie.png",
      ingredients: "",
      recipe: "",
      
    },
    {
        food: "",
        image: "",
        ingredients: "",
        recipe: "", 
    },
  ];
  
  let html = "";
  for (let i = 0; i < meals.length; i++) {
    let meal = meals[i];
  
    html += ` 
  <div class="imgBrew">
  <div><img class= "brewImg" src="${meal.image}" alt="${meal.food}"></img></div>
    <div class="menu"></div>
    <button class="accordionB">${meal.food}</button>
    <div class="panel">
      <ul class= "ingredients">
        <h1 class= "brewStyle">${meal.food}</h1>
          <li>${meal.ingredients}</li>
          <li>${meal.recipe}</li>
      
        
        </ul>
    </div>
  </div>
      `;
  }
  document.querySelector("main").insertAdjacentHTML("beforeEnd", html);
  
  const recipe = document.getElementsByClassName("accordionB");
  var i;
  
  for (i = 0; i < recipe.length; i++) {
    recipe[i].addEventListener("click", function () {
      this.classList.toggle("active");
  
      /* Toggles between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }