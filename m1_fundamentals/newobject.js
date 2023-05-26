// Use this object for questions 1 - 3

let user = {
    username:'GormuWormu',
    password:'123abc',
    email:'Gormu@wormu.ca',
    last_login: 'Sat May 20 2023 00:00:00 GMT-0400'
}

//1. console.log() the username and email of the user
console.log("username:",user.username);
console.log("password:",user.password);
//2. Check if the passInput variable matches the password in the object
const passInput = 'abcd1234'

    
//3. The user has just logged in, Set the last_login to the current date

//4. Create a single object for a student with an id, name, a nested object named address that has (country, province and city), email, phone number, and an array of marks.
let user2={
    id:'F062873',
    name:'Taha, Hakim, O',
    address:{
        country:'Canada',
        province:'Ontario',
        city:'Ottawa',
    },
    email:'hakim.taha@hotmail.com',
    phoneNumber:'343-777-3739',
    marks:[80]
}
console.log(user2);
//5. After you have created an object console log a sentence that displays the students name, id and address.
console.log('Name:',user2.name);
console.log('ID:',user2.id);
console.log('Address:',user2.address);
// 6. The Recipe Card
let favRecipe={
    recipe:'Chocolate Pistachio Cheesecake',
    servings:8,
    ingredients:{
        one:'three oz chocolate wafer cookies',
        two:'¾ cup raw unsalted pistachios, divided, plus more for garnish',
        three:'two tablespoons granulated sugar',
        four:'two tablespoons butter, melted',
        five:'two (8 oz) packages reduced-fat cream cheese (Neufchâtel), softened',
        six:'1 avocado, peeled, seeded, and mashed until smooth (1/2 cup)',
        seven:'2 cups fat-free plain Greek-style yogurt',
        eight:'2 tablespoons cornstarch',
        nine:'¾ cup granulated sugar',
        ten:'2 large egg whites',
        eleven:'1 teaspoon almond extract',
        twelve:'⅛ teaspoon salt',
        thirteen:'¼ cup whipping cream',
        fourteen:'2 tablespoons powdered sugar',
        fifteen:'1 teaspoon vanilla extract',
        sixteen:'one (16 oz) container frozen nondairy low-fat whipped topping, thawed, plus more for garnish'
    },
};

console.log(favRecipe);
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa



// 7. The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".