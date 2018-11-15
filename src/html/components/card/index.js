import { h } from '../../../../tools/dom';

export const Card = ({ href, title, summary, loading,  }) => <a href={href} class="card">
    <div class="card__bd">
    { title && <h1 class="card__title">{title}</h1> }
    { summary && <div class="card__summary">{summary}</div> }
    </div>
</a>;

export const Ghost = () => <div class="card">
    <div class="card__bd">
    <div class="card__title" style={{width: '30%', backgroundColor:'#eee', height: '18px'}}></div>
    <div class="card__summary" style={{backgroundColor:'#eee', height: '14px', marginBottom: '.65rem'}}></div>
    <div class="card__summary" style={{width: '50%', backgroundColor:'#eee', height: '14px'}}></div>
    </div>
</div>;

export const Empty = () => <div class="card" style={{boxShadow: 'none', padding:'var(--baseline)', textAlign: 'center'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path fill={'#999'} d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
</div>;

export default Card; 