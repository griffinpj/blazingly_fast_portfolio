import gulp from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.js';


gulp.task('webpack', () => 
    gulp.src('./index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('../build')));

gulp.task('default', gulp.series('webpack')); // Default build
