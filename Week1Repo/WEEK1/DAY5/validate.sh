#!/bin/bash

LOG_FILE="validation.log"

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_FILE"
}

log "Starting validation"

if [ -d "src" ]; then
  log "src/ directory exists."
else
  log "src/ directory is missing!"
  exit 1
fi

if [ ! -f "config.json" ]; then
  log "config.json not found!"
  exit 1
fi

node -e "JSON.parse(require('fs').readFileSync('config.json'))"
if [ $? -eq 0 ]; then
  log "config.json is valid JSON."
else
  log " config.json is invalid JSON!"
  exit 1
fi

log "All validations passed successfully!"
exit 0
