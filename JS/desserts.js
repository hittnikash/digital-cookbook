const meals = [
    {
      food: "Pumpkin Pie",
      image: "ASSETS/pumpkinPie.png",
      ingredients: "",
      recipe: "",
      
    },
    {
        food: "Choco-cream Pie",
        image: "ASSETS/chocolateCreamPie.png",
        ingredients: "<ul class='ingredients'><li>1 box of Chocolate pudding</li><li>1 graham cracker pie crust</li><li>1 can whipped cream</li></ul>",
        recipe: "First follow directions on pudding box to make the chocolate filling. Then cool the pudding before scooping into your graham cracker crust. Next top with whipped cream.  ", 
    },
    {
        food: "Blueberry Muffins",
        image: "ASSETS/blueberryMuffin.png",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "Cherry Salad",
        image: "ASSETS/cherrySalad.png",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "Bananna Bread",
        image: "ASSETS/banannaBread.png",
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