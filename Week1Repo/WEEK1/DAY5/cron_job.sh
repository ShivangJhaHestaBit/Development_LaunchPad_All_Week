#!/bin/bash

cd "$(dirname "$0")" || exit 1

# Log file to store output of the cron runs
LOG_FILE="./cron_job.log"

echo "==== $(date): Starting daily validate & build ====" | tee -a "$LOG_FILE"

if ./validate.sh >> "$LOG_FILE" 2>&1; then
  echo "Validation successful." | tee -a "$LOG_FILE"
else
  echo "Validation failed! Exiting..." | tee -a "$LOG_FILE"
  exit 1
fi

if ./build.sh >> "$LOG_FILE" 2>&1; then
  echo "Build completed successfully." | tee -a "$LOG_FILE"
else
  echo "Build failed!" | tee -a "$LOG_FILE"
  exit 1
fi

echo "==== $(date): Job finished ====" | tee -a "$LOG_FILE"
echo "" >> "$LOG_FILE"