const meals = [
    {
      food: "Pot Roast",
      image: "ASSETS/potRoast.png",
      ingredients: "",
      recipe: "",
      
    },
    {
        food: "Turkey",
        image: "ASSETS/turkey.png",
        ingredients: "d",
        recipe: "  ", 
    },
    {
        food: "GB-Casserole",
        image: "ASSETS/greenBeanCassarole.png",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "Yams",
        image: "ASSETS/yams.png",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "Macaroni & Cheese",
        image: "ASSETS/macNcheese.png",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "",
        image: "",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "",
        image: "",
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
      <button class="accordionB"> <h1 class= "brewStyle">${meal.food}</h1></button>
      <div class="panel"><br>
        <ul>
            <li><h2>ingredients:</h2>${meal.ingredients}</li>
          </ul>
          </br>
          <h2>Recipe:</h2>
          <p>${meal.recipe}</p>
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