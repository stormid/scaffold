import { h } from '../../../../tools/dom';

const Card = ({ img, title, summary }) => <div class="card__container">
    { img && <img class="card__img" src={img.src} alt={img.alt} />}
    <div class="card__bd">
    { title && <h1 class="card__title">{title}</h1> }
    { summary && <div class="card__summary">{summary}</div> }
    </div>
</div>;

export default Card; 