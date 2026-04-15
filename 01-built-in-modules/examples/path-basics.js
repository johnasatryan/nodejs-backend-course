const path = require('path');

// join — combines path segments
console.log(path.join('/users', 'jon', 'documents', 'file.txt'));

// resolve — returns an absolute path
console.log(path.resolve('src', 'index.js'));

// basename — file name from a path
console.log(path.basename('/home/jon/project/app.js')); // 'app.js'

// dirname — directory from a path
console.log(path.dirname('/home/jon/project/app.js')); // '/home/jon/project'

// extname — file extension
console.log(path.extname('server.js'));   // '.js'
console.log(path.extname('data.json'));   // '.json'

// parse — breaks a path into its components
console.log(path.parse('/home/jon/project/app.js'));
// { root: '/', dir: '/home/jon/project', base: 'app.js', ext: '.js', name: 'app' }
