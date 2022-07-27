const meals = [
    {
      food: "Pot Roast",
      image: "ASSETS/potRoast.jpg",
      ingredients: "<ul class='ingredients'><li>Roast</li><li>red-skinned potatoes</li><li>carrots</li><li>1 large yellow onion</li><li>beef stock or water</li><li>two bay leaves</li><li>worcestershire sause</li><li>salt & pepper</li><li>can of cream of mushroom</li><li>1 packet of pot roast seasoning</li><li>flour</li><li>butter</li>",
      recipe: "Coat all side of your roast with flour. Next brown on all sides in a skillet. Add the rest of the ingredients to a crock pot and stir. Once the roast has been browned, add the meat to the crock pot. Cook until vegitables are tender and roast reaches an internal temp of 145 degrees.",
    },
    {
        food: "Turkey",
        image: "ASSETS/turkey.jpg",
        ingredients: "N/A",
        recipe: "Ask my mom.", 
    },
    {
        food: "GB-Casserole",
        image: "ASSETS/greenBeanCassarole.jpg",
        ingredients: "<ul class='ingredients'><li>2 cans of green beans</li><li>1 can of cream of mushroom</li><li>onion(opt)</li><li> fried onions</li><li> soy sause</li><li>worcetershire sause</li><li>salt & pepper</li><li>milk</li>",
        recipe: "Empty drained green beans to fresh green beans into a tin. Add cream of mushroom, onion, soy sause, worcetershire sasue, salt, pepper & a splash of milk. Stir the mixture util creamy. Add 1/2 a cup of fried onions and stir ito the mixture. Cook for 40 minutesat 350 degrees. Take out the casserole and add an even layer of fried onions on top. Cook for 15 more minutes.",
      },
      {
        food: "Yams",
        image: "ASSETS/yams.jpg",
        ingredients: "<ul class='ingredients'><li>Yams</li><li>brown sugar</li><li>butter</li><li>crushed pecans (opt)</li><li>marshmellow",
        recipe: "Add ingredients to a tin with a layer of marshmellows on top. Bake at 350 degrees.",
      },
      {
        food: "Macaroni & Cheese",
        image: "ASSETS/macNcheese.jpg",
        ingredients: "<ul class='ingredients'><li>Elbow noodles</li><li>1 pint heavy whipping topping</li><li>4 oz of cream cheese</li><li>1 bag of shredded cheese</li><li>butter</li><li>salt & pepper</li>",
        recipe: "Boil elbow noodles until tender. Drain the water. In a skillet mix your heavy whipped topping, cream cheese, butter, salt & pepper. Once the mixture is smooth add your choice of cheese. Next pour cheese mixture over noodles and stir. You can stop here or you can place macaroni and cheese in a tin and then spread a layer of breadcrumbs and crushed chees-its on top and bake at 350 degrees.",
      },
      {
        food: "Moms Cheesy Dip",
        image: "ASSETS/cheeseDip.jpg",
        ingredients: "<ul class='ingredients'><li>1 block of velveeta cheese</li><li>1 jars of Pace extra hot salsa</li><li>1 can refried beans</li><li>1 can of spicy chili</li>",
        recipe: "Dice the block of velveeta cheese and place in crock pot. Add all other ingredients to the crockpot. stir occasionaly to prevent the cheese from burning and to mix the ingredients. For extra heat you can dice jalapanos and add them in.", 
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