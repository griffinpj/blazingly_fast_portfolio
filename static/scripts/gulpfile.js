const gulp = require('gulp');
const webpack = require('webpack-stream');
const appVersion = require('./package').version;


gulp.task('webpack', () => {
    return gulp.src(__dirname + '/index.js').pipe(webpack(
        require('./webpack.config')
    )).pipe(gulp.dest('../build'));
});

gulp.task('env-check', (cb) => {
    if (['qa', 'dev', 'prod'].includes(process.env.NODE_ENV)) {
        return cb();
    } else {
        return cb(new Error('Missing NODE_ENV variable'));
    }
});

/*
    Removed feed-(migration | rollback | up/down) from tasks since no migrations are needed
*/
gulp.task('default', gulp.series('webpack')); // Default build
