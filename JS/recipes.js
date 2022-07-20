const meals = [
    {
      food: "Chicken Alfredo",
      image: "ASSETS/chickenAlfredo.png",
      ingredients: "<ul class='ingredients'><li>1 pint heavy whipped topping</li><li>4 oz. cream cheese</li><li>3 chicken breasts</li><li>3 broccoli crowns</li><li>Rana cheese stuffed Tortelloni</li><li>1 cup of shredded cheese (recommended private selection itallian blend: mozzarella, parmesan, asiago)</li><li>To taste: minced garlic</li><li>salt & pepper</li><li>garlic powder & garlic salt</li><li>talian seasonings</li> </ul> ",
      recipe: "Start by steaming the cut & washed broccoli crowns. Next dice the chicken breast an place in skillet with butter and minced garlic. & other seasonings if you desire. Let cook until the chicken has an internal temperature of 165 degrees. While chicken is cooking boil tortelloni noodles until tender. Next add the heavy whipped topping, cream cheese and seasonings to a skillet on med-low heat. Allow the cream cheese to melt down and add seasonings to taste. Once the mixture is no longer clumpy and shredded cheese and stir until mixture is creamy. Add all prepared ingredients to a serving dish. Enjoy! ",
    },
    {
      food: "Chicken Potpie",
      image: "ASSETS/chickenPotpie.png",
      ingredients:"<ul class='ingredients'><li>3 chicken breast</li> <li>2 pie crusts</li><li>1/2 bag of mixed vegitables</li><li>1 can of condensed cream of chicken</li><li>Salt & Pepper</li><li>Chicken Seasoning</li><li>Thyme</li>",
      recipe: "Start by dicing the chicken breast, place in a skillet with butter & seasonings on medium heat. Cook until the chicken reaches an internal temperature of 165 degrees. Drain the juices from the skillet & add the mixed vegitables. Once the vegitables are soft and the can of condensed chicken and other choice seasonings. Next let the mixture cool. Line you pie tin with one pie crust then scoop chicken mixture in pie tin. Place the other pie crust on top of mixture and crimp around the edges with a fork. Make for slits in the center of the pie crust to allow steam to escape. Put in the oven at 425 degrees & bake for about 35 minutes or until golden brown. ",
    },
    {
        food: "Buffalo Eggrolls",
        image: "ASSETS/eggRoll.png",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "Bens Mom's Chili",
        image: "ASSETS/chili.png",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "Spaggetti",
        image: "ASSETS/spaggetti.png",
        ingredients: "",
        recipe: "",
        
      },
      {
        food: "Potato Soup",
        image: "ASSETS/potatoSoup.png",
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