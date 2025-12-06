# Deployment Notes

## Overview

The application uses PM2 (Process Manager 2) for production deployment, providing process management, clustering, and automatic restarts. Production configuration is stored in the `prod/` folder.

## PM2 Deployment

PM2 is a production-grade process manager that keeps applications alive, enables zero-downtime reloads, and provides monitoring capabilities.

**Key Features**:
- **Process Management**: Keeps application running in background
- **Auto Restart**: Automatically restarts crashed processes
- **Cluster Mode**: Runs multiple instances for load balancing
- **Log Management**: Centralized logging and monitoring
- **Zero Downtime**: Graceful reloads without service interruption

## Production Folder Structure

The `prod/` folder contains production-specific configuration and resources:

```
prod/
├── ecosystem.config.cjs    # PM2 configuration file
└── src/
    └── logs/               # Production log files
        ├── combined.log
        └── requestlog.log
```

This separation keeps production configuration isolated from development code.

## Ecosystem Configuration File

The `ecosystem.config.cjs` file defines how PM2 should run the application in production.

### Application Configuration

- **script**: Entry point (`../index.js` - relative to prod folder)
- **watch**: File watching disabled (`false`) for production stability
- **exec_mode**: Set to `"cluster"` for load distribution
- **instances**: Runs 5 parallel instances for better performance and fault tolerance

### Environment Variables

Production environment variables are defined in the config:
- **PORT**: 3002 (different from dev port 3001)
- **MONGO_URI**: MongoDB connection string for production database

### Deployment Configuration

The `deploy` section configures automated deployment:
- **user**: SSH username for server access
- **host**: Target server hostname/IP
- **ref**: Git branch to deploy (`origin/master`)
- **repo**: Git repository URL
- **path**: Destination path on server
- **post-deploy**: Commands to run after deployment (install dependencies, reload PM2)

## Deployment Process

1. **Start Application**: `pm2 start prod/ecosystem.config.cjs`
2. **Monitor**: `pm2 status` - View running processes
3. **View Logs**: `pm2 logs` - Monitor application logs
4. **Reload**: `pm2 reload ecosystem.config.cjs` - Zero-downtime restart
5. **Stop**: `pm2 stop ecosystem.config.cjs` - Stop all instances

## Cluster Mode Benefits

Running 5 instances in cluster mode provides:
- **Load Distribution**: Requests distributed across instances
- **High Availability**: If one instance crashes, others continue serving
- **Better Performance**: Utilizes multiple CPU cores
- **Fault Tolerance**: Automatic recovery from failures

## Production Considerations

- Environment variables should be set in `ecosystem.config.cjs` or `.env.prod` file
- Logs are written to `prod/src/logs/` directory
- File watching is disabled to prevent unnecessary resource usage
- Cluster mode requires proper session management if using in-memory sessions

