module.exports = {
  apps : [{
    script: '../index.js',
    watch: 'false',
    env: {
      PORT:3002,
      MONGO_URI:"mongodb://localhost:27017/"
    },
    exec_mode: "cluster",
    instances: "5"
  }
],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
