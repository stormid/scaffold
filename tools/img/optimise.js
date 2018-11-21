import imagemin from 'imagemin-keep-folder'; //until imagemin can support subdirectories - https://github.com/imagemin/imagemin/issues/191#issuecomment-434868105
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from'imagemin-pngquant';
import imageminSvgo from'imagemin-svgo';
import { paths } from '../../config';

export default async (src = `${paths.src.img}/**/*.{jpg,jpeg,png,svg}`) => {
    const files = await imagemin([src], {
        plugins: [
            imageminMozjpeg({quality: 70}),
            imageminPngquant({quality: '65-80'}),
            imageminSvgo({
				plugins: [
					{removeViewBox: false}
				]
			})
        ],
        replaceOutputDir: output => output.replace(/src\//, 'build/static/')
    });
};