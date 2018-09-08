var fs = require('fs');
const path = require('path');
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var localDist = path.join(__dirname, 'dist');

if (fs.existsSync(localDist)) {
    var config = {
        user: "mnrcom",                   // NOTE that this was username in 1.x
        password: "",           // optional, prompted if none given
        host: "ftp.mnr2015.com",
        port: 21,
        localRoot: localDist,
        remoteRoot: '/public_html/',
        include: ['*', '**/*'],     // this would upload everything except dot files
        // include: ['*.php', 'dist/*'],
        exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps
        deleteRemote: false              // delete existing files at destination before uploading
    }

    ftpDeploy.on('uploading', function (data) {
        data.totalFilesCount;       // total file count being transferred
        data.transferredFileCount; // number of files transferred
        data.filename;             // partial path with filename being uploaded
    });

    ftpDeploy.on('uploaded', function (data) {
        console.log(data);         // same data as uploading event
    });

    ftpDeploy.deploy(config)
        .then(res => console.log('finished'))
        .catch(err => console.log(err))
} else {
    console.log('Locally published web site did not exist!')
}
