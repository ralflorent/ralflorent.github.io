const gulp = require('gulp');
const browerSync = require('browser-sync').create();

gulp.task('browser-sync', function() {

    browerSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['./*.html', './css/*.css']).on('change', browerSync.reload);
});