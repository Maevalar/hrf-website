import type { ItemList } from '../../../types/ItemList'
import './ListItem.scss'

type ListItemProps = {
    item: ItemList;
    className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ item, className = '' }) => {
    return (
        <div className={`listItem-block ${className}`}>
            <img src="/icons/arrow_right.svg" alt="" className="listItem-block__icon" />
            <div className="listItem-block__info">
                <h3 className="listItem-block__title title">{item.title}</h3>
                <p className="listItem-block__text text">{item.text}</p>
            </div>
        </div>
    );
}