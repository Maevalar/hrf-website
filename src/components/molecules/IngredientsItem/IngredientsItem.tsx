import './IngredientsItem.scss'

type IngredientsItemProps = {
    name: string;
    measure: string;
}

export const IngredientsItem: React.FC<IngredientsItemProps> = ({name, measure}) => {
    return (
      <div className="ingredientsItem-block">
        <img
          src={`https://www.themealdb.com/images/ingredients/${name.replaceAll(' ','_')}.png`}
          alt=""
          className="ingredientsItem-block__icon"
        />
        <div className="ingredientsItem-block__info">
          <p className="ingredientsItem-block__name">{name}</p>
          <p className="ingredientsItem-block__measure">{measure}</p>
        </div>
      </div>
    );
}