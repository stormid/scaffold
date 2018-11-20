import chokidar from 'chokidar';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from'imagemin-pngquant';
import imageminSvgo from'imagemin-svgo';
 
const optimise = async (src = 'src/img/**/*.{jpg,jpeg,png,svg}') => {
    const files = await imagemin([src], 'build/static/img', {
        plugins: [
            imageminMozjpeg({quality: 70}),
            imageminPngquant({quality: '65-80'}),
            imageminSvgo({
				plugins: [
					{removeViewBox: false}
				]
			})
        ]
    });
 
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
};


export const watch = () => chokidar.watch(`src/img/**/*`)
    .on('add', path => optimise(path))
    .on('change', file => optimise(file));

watch();