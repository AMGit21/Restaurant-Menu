import Category from "../components/Category";
import ListOfItems from "../components/ListOfItems";
import data from "../assets/data.js";

const CategoryComponent = (props) => {
  return (
    <div>
      {data
        .filter((item) => !props.categoryName || item.categoryName === props.categoryName)
        .map((item) => (
          <Category key={item.categoryId} categoryName={item.categoryName}>
            <ListOfItems categoryName={item.categoryName} itemName={item.itemsList} />
          </Category>
        ))}
    </div>
  );
};

export default CategoryComponent;
