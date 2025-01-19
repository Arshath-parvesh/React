export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL =
  "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const TOKEN =
  "C8vS5jmBU83U2ZGfTFtTkoVCg3nIa8PwcKBPKOPW5ssPxwrdF9XZBrVpTPBGjFAmR9Um8tVQVbUWyqcZHD4SeQUX62B2n4JfRTbv6j2cw95bCj-HzjhnlKGpvigjZ3Yx";
export const MENU_API = "https://api.yelp.com/v3/businesses/";
export const YELP_API =
  "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
export const FOOD_JSON = {
  categories: {
    Salads: [
      {
        name: "Caesar Salad",
        price: 7.99,
        description:
          "Crisp romaine lettuce, croutons, and parmesan cheese tossed in creamy Caesar dressing.",
      },
      {
        name: "Greek Salad",
        price: 8.49,
        description:
          "Mixed greens, cucumbers, tomatoes, red onions, olives, and feta cheese with Greek dressing.",
      },
      {
        name: "Caprese Salad",
        price: 9.99,
        description:
          "Fresh mozzarella, tomatoes, basil, and balsamic glaze over mixed greens.",
      },
    ],
    Coffee: [
      {
        name: "Espresso",
        price: 2.99,
        description:
          "Rich and bold espresso shot served straight or with a dash of foam.",
      },
      {
        name: "Latte",
        price: 4.49,
        description:
          "Creamy steamed milk mixed with a shot of espresso and a light foam topping.",
      },
      {
        name: "Cold Brew",
        price: 3.99,
        description:
          "Smooth and refreshing cold brew coffee, steeped to perfection.",
      },
    ],
    Delis: [
      {
        name: "Roast Beef Sandwich",
        price: 8.99,
        description:
          "Thinly sliced roast beef, horseradish sauce, lettuce, and tomato on rye bread.",
      },
      {
        name: "Italian Sub",
        price: 9.49,
        description:
          "Ham, salami, pepperoni, provolone, lettuce, tomato, and Italian dressing on a fresh sub roll.",
      },
      {
        name: "Pastrami on Rye",
        price: 8.99,
        description:
          "Hot pastrami piled high on rye bread with mustard and pickles.",
      },
    ],
    Wine: [
      {
        name: "Chardonnay",
        price: 15.99,
        description:
          "A medium-bodied white wine with flavors of citrus and oak.",
      },
      {
        name: "Cabernet Sauvignon",
        price: 18.49,
        description:
          "Full-bodied red wine with bold flavors of blackberry and vanilla.",
      },
      {
        name: "Rosé",
        price: 12.99,
        description:
          "Light and refreshing wine with hints of strawberry and melon.",
      },
    ],
    Grocery: [
      {
        name: "Organic Eggs (12-pack)",
        price: 5.99,
        description: "Farm-fresh organic eggs from cage-free chickens.",
      },
      {
        name: "Whole Milk (1 gallon)",
        price: 4.49,
        description:
          "Creamy and fresh whole milk, perfect for drinking or cooking.",
      },
      {
        name: "Sourdough Bread",
        price: 3.99,
        description:
          "Artisan sourdough loaf with a crispy crust and soft interior.",
      },
    ],
    Sandwiches: [
      {
        name: "Classic BLT",
        price: 6.99,
        description:
          "Crispy bacon, fresh lettuce, and juicy tomatoes on toasted white or whole-grain bread.",
      },
      {
        name: "Grilled Chicken Sandwich",
        price: 8.49,
        description:
          "Marinated grilled chicken breast, lettuce, tomato, and mayo on a brioche bun.",
      },
      {
        name: "Turkey Club",
        price: 7.99,
        description:
          "Sliced turkey, crispy bacon, lettuce, tomato, and mayo layered between three slices of toasted bread.",
      },
      {
        name: "Vegetarian Delight",
        price: 6.49,
        description:
          "Grilled vegetables, avocado, hummus, and arugula on whole-grain bread.",
      },
      {
        name: "Philly Cheesesteak",
        price: 9.99,
        description:
          "Thinly sliced steak, melted provolone cheese, sautéed onions, and peppers on a hoagie roll.",
      },
      {
        name: "Italian Sub",
        price: 8.99,
        description:
          "Ham, salami, pepperoni, provolone cheese, lettuce, tomato, onions, and Italian dressing on a sub roll.",
      },
      {
        name: "Egg Salad Sandwich",
        price: 5.49,
        description: "Creamy egg salad served on soft white or wheat bread.",
      },
      {
        name: "Tuna Melt",
        price: 7.49,
        description:
          "Tuna salad topped with melted cheddar cheese on toasted sourdough bread.",
      },
      {
        name: "Spicy Buffalo Chicken Sandwich",
        price: 8.99,
        description:
          "Spicy buffalo chicken tenders, lettuce, tomato, and ranch dressing on a toasted bun.",
      },
      {
        name: "Caprese Sandwich",
        price: 7.99,
        description:
          "Fresh mozzarella, tomatoes, basil, and balsamic glaze on ciabatta bread.",
      },
    ],
    Cafes: [
      {
        name: "Americano",
        price: 2.99,
        description:
          "Espresso diluted with hot water for a smooth and robust flavor.",
      },
      {
        name: "Cappuccino",
        price: 4.49,
        description:
          "A perfect blend of espresso, steamed milk, and frothy foam.",
      },
      {
        name: "Mocha",
        price: 4.99,
        description:
          "Espresso mixed with chocolate syrup and steamed milk, topped with whipped cream.",
      },
      {
        name: "Chai Latte",
        price: 4.49,
        description:
          "Spiced black tea blended with steamed milk and a touch of sweetness.",
      },
      {
        name: "Green Tea",
        price: 3.49,
        description: "Light and refreshing brewed green tea.",
      },
      {
        name: "Earl Grey",
        price: 3.99,
        description:
          "Classic black tea infused with bergamot for a citrusy aroma.",
      },
      {
        name: "Croissant",
        price: 3.49,
        description: "Flaky and buttery classic French pastry.",
      },
      {
        name: "Blueberry Muffin",
        price: 2.99,
        description: "Moist muffin filled with fresh blueberries.",
      },
      {
        name: "Cinnamon Roll",
        price: 4.49,
        description:
          "Soft dough swirled with cinnamon and topped with cream cheese frosting.",
      },
      {
        name: "Ham and Cheese Croissant",
        price: 6.99,
        description:
          "Buttery croissant filled with ham and melted Swiss cheese.",
      },
      {
        name: "Avocado Toast",
        price: 7.49,
        description:
          "Smashed avocado, lemon, and chili flakes on toasted sourdough.",
      },
      {
        name: "Breakfast Sandwich",
        price: 5.99,
        description: "Egg, cheese, and bacon or sausage on an English muffin.",
      },
      {
        name: "Matcha Latte",
        price: 4.99,
        description:
          "Creamy steamed milk blended with finely ground green tea powder.",
      },
      {
        name: "Golden Milk Latte",
        price: 5.49,
        description:
          "Turmeric, ginger, and cinnamon blended with steamed milk for a warming drink.",
      },
      {
        name: "Iced Caramel Macchiato",
        price: 5.99,
        description:
          "Espresso with vanilla, milk, and caramel drizzle over ice.",
      },
    ],
  },
};
