const fs = require('fs');

// Define the file path
const filePath = './largefile.txt';

// Read the existing JSON data from data.json
const data = fs.readFileSync('./data.json');
const jsonData = [];

// Function to log memory usage
function logMemoryUsage() {
  const memoryUsage = process.memoryUsage();
  return `${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`;  // Return memory usage as a string
}

// Read file using fs.readFile (Buffer method)
function readFileWithBuffer() {
  console.time('BufferRead');  // Start the timer
  const startMemoryUsage = logMemoryUsage();  // Record memory before reading

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('Error reading file with Buffer:', err);
      return;
    }

    const timeTaken = console.timeEnd('BufferRead');  // End the timer and log the result
    const endMemoryUsage = logMemoryUsage();  // Record memory after reading

    // Push the results to jsonData
    jsonData.push({
      method: 'Buffer',
      timeTaken: timeTaken,  // This will be `undefined` since timeLog doesn't return time
      startMemoryUsage,
      endMemoryUsage
    });

    // Write the updated jsonData back to the file
    try {
      fs.writeFileSync('./data.json', JSON.stringify(jsonData, null, 2), 'utf-8');
      console.log(`Buffer method result saved to data.json`);
    } catch (error) {
      console.error('Error writing results to file:', error);
    }
  });
}

// Read file using fs.createReadStream (Stream method)
function readFileWithStream() {
  console.time('StreamRead');  // Start the timer
  const startMemoryUsage = logMemoryUsage();  // Record memory before reading

  const stream = fs.createReadStream(filePath);
  
  stream.on('data', () => {
    // You can process chunks here, but we don't need to store them for this benchmark
  });

  stream.on('end', () => {
    const timeTaken = console.timeEnd('StreamRead');  // End the timer and log the result
    const endMemoryUsage = logMemoryUsage();  // Record memory after reading

    // Push the results to jsonData
    jsonData.push({
      method: 'Stream',
      timeTaken: timeTaken,  // This will be `undefined` since timeLog doesn't return time
      startMemoryUsage,
      endMemoryUsage
    });

    // Write the updated jsonData back to the file
    try {
      fs.writeFileSync('./data.json', JSON.stringify(jsonData, null, 2), 'utf-8');
      console.log(`Stream method result saved to data.json`);
    } catch (error) {
      console.error('Error writing results to file:', error);
    }
  });

  stream.on('error', (err) => {
    console.error('Error reading file with Stream:', err);
  });
}

// Start benchmarking the methods
console.log('Starting Benchmark...\n');

// Benchmark with Buffer
readFileWithBuffer();

// Benchmark with Stream
readFileWithStream();