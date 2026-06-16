import './SquareIcon.scss'

type SquareIconProps = {
    src: string
    className?: string;
}

export const SquareIcon: React.FC<SquareIconProps> = ( {className = '', src} ) => {
    return (
      <div className="square-icon">
        <img
          src={src}
          alt=""
          className={className}
        />
      </div>
    );
}