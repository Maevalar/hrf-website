import { MainButton } from '../../atoms/buttons/MainButton/MainButton';
import './CallToAction.scss'

type CallToActionProps = {
    className?: string;
};


export const CallToAction: React.FC<CallToActionProps> = ({ className = '' }) => {
    return (
      <section className={`action-block ${className}`}>
        <h2 className="action-block__title title">Ready to cook smarter?</h2>
        <p className="action-block__text text">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <MainButton text="Browse recipes" className='action-block__button'/>
        <img src="/icons/plug.svg" alt="" className="action-block__plug" />
        <img src="/icons/knife.svg" alt="" className="action-block__knife" />
      </section>
    );
}