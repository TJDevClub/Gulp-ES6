var gulp = require("gulp");
var babel = require("gulp-babel");

var es6FileLocations = "jsx/**/*.jsx"

gulp.task("translate", function(){
    return gulp.src(es6FileLocations)
        .pipe(babel({
            "presets": ["es2015"]
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", function(){
    gulp.watch(es6FileLocations, function(){
        gulp.run("translate")
    })
})

gulp.task("default",["translate","watch"])