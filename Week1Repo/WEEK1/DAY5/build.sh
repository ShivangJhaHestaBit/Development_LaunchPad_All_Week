#!/bin/bash

cd "$(dirname "$0")" || exit 1

TIMESTAMP=$(date +%Y%m%d%H%M%S)
SOURCE_DIR="./src"
LOG_DIR="./.husky"
OUTPUT_DIR="./build"

mkdir -p "$OUTPUT_DIR"

BUILD_ARTIFACT="build-${TIMESTAMP}.tgz"

echo "Creating build artifact: $BUILD_ARTIFACT"

tar -czvf "$OUTPUT_DIR/$BUILD_ARTIFACT" "$SOURCE_DIR" "$LOG_DIR" 2>&1 | tee -a "$OUTPUT_DIR/build.log"

SHA256_CHECKSUM=$(sha256sum "$OUTPUT_DIR/$BUILD_ARTIFACT" | awk '{print $1}')

echo "SHA256 Checksum for $BUILD_ARTIFACT: $SHA256_CHECKSUM" | tee -a "$OUTPUT_DIR/build.log" > "$OUTPUT_DIR/${BUILD_ARTIFACT}.sha256"

echo "Checksum for $BUILD_ARTIFACT: $SHA256_CHECKSUM"
echo "Build artifact and checksum generated successfully."