var exec = require('child_process').exec;
var buildCMD = 'npm run build && npm run push';

exec(buildCMD, function(error, stdout, stderr) {
  if (!error) {
    console.log(stdout);
  }
});
