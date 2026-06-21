import type { ItemList } from '../../../types/ItemList'
import { ListItem } from '../../molecules/ListItem/ListItem';
import './MainList.scss'

type MainListProps = {
    title: string
    items: ItemList[];
    className?: string;
}

export const MainList: React.FC<MainListProps> = ({title, items, className = '' }) => {

    return (
      <section className={`mainList-block ${className}`}>
        <h2 className="mainList-block__title title">{title}</h2>
        <div className="mainList-block__items">
          {items.map((item) => (
            <ListItem item={item} />
          ))}
        </div>
      </section>
    );
}