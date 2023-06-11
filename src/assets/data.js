const data = [
  {
    "categoryId":1,
    "categoryName": "Salads",
    "categoryImgSrc":"Salad9.jpg",
    "itemsList": [
      { "itemId":1, "name": "Salad 1", "price": "1$", "img":"Salad1.jpg", "alt":"Salad 1", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":2, "name": "Salad 2", "price": "1.5$", "img":"Salad2.jpg", "alt":"Salad 2", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii']},
      { "itemId":3, "name": "Salad 3", "price": "1.5$", "img":"Salad3.jpg", "alt":"Salad 3", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":4, "name": "Salad 4", "price": "2$", "img":"Salad4.jpg", "alt":"Salad 4", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":5, "name": "Salad 5", "price": "3$", "img":"Salad5.jpg", "alt":"Salad 5", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":6, "name": "Salad 6", "price": "1$", "img":"Salad6.jpg", "alt":"Salad 6", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":7, "name": "Salad 7", "price": "1.5$", "img":"Salad7.jpg", "alt":"Salad 7", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii']},
      { "itemId":8, "name": "Salad 8", "price": "1.5$", "img":"Salad8.jpg", "alt":"Salad 8", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    ]
  },
{
  "categoryId":2,
  "categoryName": "Desserts",
  "categoryImgSrc":"Dessert5.jpg",
  "itemsList": [
    { "itemId":0, "name": "Dessert1", "price": "3$", "img":"Dessert1.jpg", "alt":"Dessert1", "ingredients":['des1', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":1, "name": "Dessert2", "price": "3$", "img":"Dessert2.jpg", "alt":"Dessert2", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":2, "name": "Dessert3", "price": "5$", "img":"Dessert3.jpg", "alt":"Dessert3", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":3, "name": "Dessert4", "price": "5$", "img":"Dessert4.jpg", "alt":"Dessert4", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":4, "name": "Dessert5", "price": "7$", "img":"Dessert5.jpg", "alt":"Dessert5", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":5, "name": "Dessert6", "price": "10$", "img":"Dessert6.jpg", "alt":"Dessert6", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":6, "name": "Dessert7", "price": "3$", "img":"Dessert7.jpg", "alt":"Dessert7", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":7, "name": "Dessert8", "price": "3$", "img":"Dessert8.jpg", "alt":"Dessert8", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":8, "name": "Dessert9", "price": "5$", "img":"Dessert9.jpg", "alt":"Dessert9", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":9, "name": "Dessert10", "price": "5$", "img":"Dessert10.jpg", "alt":"Dessert10", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":10, "name": "Dessert11", "price": "7$", "img":"Dessert11.jpg", "alt":"Dessert11", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":11, "name": "Dessert12", "price": "10$", "img":"Dessert12.jpg", "alt":"Dessert12", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":12, "name": "Dessert13", "price": "3$", "img":"Dessert13.jpg", "alt":"Dessert13", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":13, "name": "Dessert14", "price": "5$", "img":"Dessert14.jpg", "alt":"Dessert14", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":14, "name": "Dessert15", "price": "5$", "img":"Dessert15.jpg", "alt":"Dessert15", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    { "itemId":15, "name": "Dessert16", "price": "7$", "img":"Dessert16.jpg", "alt":"Dessert16", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    ]
},
  {
    "categoryId":3,
    "categoryName": "Drinks",
    "categoryImgSrc":"Drink5.jpg",
    "itemsList": [
      { "itemId":1, "name": "Drink1", "price": "1$", "img":"Drink1.jpg", "alt":"Drink1", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":2, "name": "Drink2", "price": "1.5$", "img":"Drink2.jpg", "alt":"Drink2", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii']},
      { "itemId":3, "name": "Drink3", "price": "1.5$", "img":"Drink3.jpg", "alt":"Drink3", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":4, "name": "Drink4", "price": "2$", "img":"Drink4.jpg", "alt":"Drink4", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":5, "name": "Drink5", "price": "3$", "img":"Drink5.jpg", "alt":"Drink5", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":6, "name": "Drink6", "price": "1$", "img":"Drink6.jpg", "alt":"Drink6", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":7, "name": "Drink7", "price": "1.5$", "img":"Drink7.jpg", "alt":"Drink7", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii']},
      { "itemId":8, "name": "Drink8", "price": "1.5$", "img":"Drink8.jpg", "alt":"Drink8", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    ]
  },
  {
    "categoryId":4,
    "categoryName": "Food",
    "categoryImgSrc":"0.jpg",
    "itemsList": [
      { "itemId":0, "name": "Food1", "price": "3$", "img":"Food1.jpg", "alt":"Food1", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":1, "name": "Food2", "price": "3$", "img":"Food2.jpg", "alt":"Food2", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":2, "name": "Food3", "price": "5$", "img":"Food3.jpg", "alt":"Food3", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":3, "name": "Food4", "price": "5$", "img":"Food4.jpg", "alt":"Food4", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":4, "name": "Food5", "price": "7$", "img":"Food5.jpg", "alt":"Food5", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":5, "name": "Food6", "price": "10$", "img":"Food6.jpg", "alt":"Food6", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":6, "name": "Food7", "price": "3$", "img":"Food7.jpg", "alt":"Food7", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":7, "name": "Food8", "price": "3$", "img":"Food8.jpg", "alt":"Food8", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":9, "name": "Food9", "price": "5$", "img":"Food9.jpg", "alt":"Food9", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":10, "name": "Food10", "price": "7$", "img":"Food10.jpg", "alt":"Food10", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":11, "name": "Food11", "price": "10$", "img":"Food11.jpg", "alt":"Food11", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":12, "name": "Food12", "price": "3$", "img":"Food12.jpg", "alt":"Food12", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
    ]
  },
  {
    "categoryId":5,
    "categoryName": "Bakery",
    "categoryImgSrc":"0.jpg",
    "itemsList": [
      { "itemId":0, "name": "Bakery1", "price": "3$", "img":"Bakery1.jpg", "alt":"Bakery1", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":1, "name": "Bakery2", "price": "3$", "img":"Bakery2.jpg", "alt":"Bakery2", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":2, "name": "Bakery3", "price": "5$", "img":"Bakery3.jpg", "alt":"Bakery3", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":3, "name": "Bakery4", "price": "5$", "img":"Bakery4.jpg", "alt":"Bakery4", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":4, "name": "Bakery5", "price": "7$", "img":"Bakery5.jpg", "alt":"Bakery5", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":5, "name": "Bakery6", "price": "10$", "img":"Bakery6.jpg", "alt":"Bakery6", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":6, "name": "Bakery7", "price": "3$", "img":"Bakery7.jpg", "alt":"Bakery7", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":7, "name": "Bakery8", "price": "3$", "img":"Bakery8.jpg", "alt":"Bakery8", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":9, "name": "Bakery9", "price": "5$", "img":"Bakery9.jpg", "alt":"Bakery9", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
      { "itemId":10, "name": "Bakery10", "price": "7$", "img":"Bakery10.jpg", "alt":"Bakery10", "ingredients":['abc', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii'] },
     ]
  }
]
export default data;