<?php
namespace Deployer;

require 'recipe/statamic.php';

// Config

set('application', 'Statamic Deployment');
set('deploy_path', '~/{{application}}');
set('repository', 'git@github.com:statameet/statameet.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('forge@68.183.75.15');

// Tasks

task('build', function () {
    cd('{{release_path}}');
    run('npm run build');
});

after('deploy:failed', 'deploy:unlock');
