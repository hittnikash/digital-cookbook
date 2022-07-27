const meals = [
    {
      food: "Pumpkin Pie",
      image: "ASSETS/pumpkinPie.jpg",
      ingredients: "(For two pies)<ul class='ingredients'><li>1 30 oz can of pumpkin puree</li><li>3 cups of carnation evaporated milk.</li><li>1-1/2 cup of sugar</li><li>4 large eggs</li><li>2 tsp cinnamon</li><li>1 tsp salt</li><li>1 tsp ginger</li><li>1/2 tsp ground cloves</li><li> 2 unbaked pie crusts</li>",
      recipe: "Mix dry ingredients in bowl, add eggs, pumpkin puree & milk into the mixture. Pour into pie crusts and bake at 425 degrees for 15 minutes then reduce the temp to 350 degrees and bake for 35-45 minutes.",
      
    },
    {
        food: "Choco-cream Pie",
        image: "ASSETS/chocolateCreamPie.jpg",
        ingredients: "<ul class='ingredients'><li>1 box of Chocolate pudding</li><li>1 graham cracker pie crust</li><li>1 can whipped cream</li></ul>",
        recipe: "First follow directions on pudding box to make the chocolate filling. Then cool the pudding before scooping into your graham cracker crust. Next top with whipped cream.", 
    },
    {
        food: "Blueberry Muffins",
        image: "ASSETS/blueberryMuffin.jpg",
        ingredients: "<ul class='ingredients'><li>1/2 cup of softened butter</li><li>1-1/4 cups of sugar</li><li>2 eggs</li><li>1 tsp of vanilla extract</li><li>2 cups of flour</li><li>1/2 tsp salt</li><li>2 tsp baking powder</li><li>1/2 cup of milk</li><li>2 cups of blueberries</li>",
        recipe: "Preheat oven to 375 degrees. Mix all ingredients in a bowl except for the blueberries. In a greased muffin tin add spoonfulls of mixture to each cup. Add blueberries to each cup and push them down into the mixture. Bake for 30-35 minutes.",
        
      },
      {
        food: "Cherry Salad",
        image: "ASSETS/cherrySalad.jpg",
        ingredients: "<ul class='ingredients'><li>1 can crushed pineapple</li><li> 1 tub whipped cream</li><li>walnuts</li><li>1 can cherry pie filling</li><li>sweetened condensed milk.",
        recipe: "Mix ingredients together and serve cold.",
        
      },
      {
        food: "Bananna Bread",
        image: "ASSETS/banannaBread.jpg",
        ingredients: "<ul class='ingredients'><li>3 ripe banannas</li><li>1 cup of sugar</li><li>1 egg</li><li>1/4 cup of melted butter</li><li>1-1/2 cups of all purpose flour</li><li>1 tsp of baking soda</li><li>1 tsp of salt</li> ",
        recipe: "Preheat oven to 325 degrees. Grease a 9x5 inch loaf pan. Combine banannas, sugar, egg and butter together. In a seperate bowl mix flour and baking soda. Then add the flour and baking soda into the bananna mixture until batter is just mixed. Stir salt into batter and pur the batter into a greased loaf pan. Bake in the oven until a toothpick inserted in the center of the bread comes out clean. (About one hout)",
        
      },
      {
        food: "Pumpkin Bread",
        image: "ASSETS/pumpkinBread.jpg",
        ingredients: "<ul class='ingredients'><li>15 oz can of pumpkin puree</li><li>4 eggs</li><li>1 cup of vegitable oil</li><li>2/3 cups of water</li><li>3 cups of sugar</li><li>3-1/2 cups of all-purpose flour</li><li>2 tsp baking soda</li><li>1-1/2 tsp salt</li><li>1 tsp groung cinnamon</li><li>1 tsp ground nutmeg</li><li>1/2 tsp ground cloves</li><li> 1/4 tsp ground ginger ",
        recipe: "Preheat oven to 350 degrees. grease/flour the 9x5 inch loaf pan. Mix all ingredients untill blended. Bake for about 60-80 minutes.",
        
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