
const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search',
    params: {
      query: 'burger',
      offset: '0',
      number: '3',
      minCalories: '0',
      maxCalories: '5000',
      minProtein: '0',
      maxProtein: '100',
      minFat: '0',
      maxFat: '100',
      minCarbs: '0',
      maxCarbs: '100'
    },
    headers: {
      'x-rapidapi-key': '7170ed1e66msha356061b19b9ce9p113d70jsn83712692bd17',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };


 
   export default options