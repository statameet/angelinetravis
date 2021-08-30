<?php
namespace Deployer;

require 'recipe/statamic.php';

// Config

set('application', 'Statamic Deployment');
set('deploy_path', '~/deployment');
set('repository', 'git@github.com:statameet/statameet.git');
set('branch', 'deployment');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('68.183.75.15')->setRemoteUser('forge');

// Tasks

task('build', function () {
    cd('{{release_path}}');
    run('npm run build');
});

after('deploy:failed', 'deploy:unlock');
