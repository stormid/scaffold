import { h } from '../../../../tools/dom';

export const Card = ({ img, title, summary, loading,  }) => <div class="card__container">
    { img && <img class="card__img" src={img.src} alt={img.alt} />}
    <div class="card__bd">
    { title && <h1 class="card__title">{title}</h1> }
    { summary && <div class="card__summary">{summary}</div> }
    </div>
</div>;

export const Ghost = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export default Card; 