import chokidar from 'chokidar'
import {create} from 'browser-sync'
import {exec} from 'child_process'

let browserSync = create();
let build = (callback) => {
    exec('npm run build', (error, stdout, stderr) => {
        error && console.log(error);
        stdout && console.log(stdout);
        stderr && console.log(stderr);
        if(callback) {
            callback(error, stdout, stderr);
        }
    } )
}
browserSync.init({
    server: './public'
})

let refreshBrowser = (error, stdout, stderr) => {
    if(!error || !stderr) {
        browserSync.reload()
    }
}

build();
try {
chokidar.watch(['src', 'toast.js', 'tailwind-config/tailwind.config.js']).on('all', () => {
    try {
    build(refreshBrowser);
    } catch (e) {
        console.log('inner-exception', e);
    }
})
}catch (e) {
    console.log(e);
}