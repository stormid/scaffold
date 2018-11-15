import { h } from '../../../../tools/dom';

export const Card = ({ src, title, summary, loading,  }) => <div class="card">
    <div class="card__bd">
    { title && <h1 class="card__title">{title}</h1> }
    { summary && <div class="card__summary">{summary}</div> }
    </div>
</div>;

export const Ghost = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export default Card; 