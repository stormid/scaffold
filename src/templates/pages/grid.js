import { h } from 'preact';

const Grid = () => <body>
    <main id="main">
        <div class="wrap">
            {
                Array.apply(null, Array(12)).map((v, i) => <div class="row">
                    { Array.apply(null, Array(Math.floor(12 / (i + 1)))).map((v, j) => <div class={`col xs-${i + 1} sm-${i + 1} md-${i + 1} lg-${i + 1}`} style={'height:30px;margin-bottom:24px;background: rgba(0,0,0, .1)'}></div>)}
                </div>)
            }
        </div>
    </main>
</body>;

export default Grid;