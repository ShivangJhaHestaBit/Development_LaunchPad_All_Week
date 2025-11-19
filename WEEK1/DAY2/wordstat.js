#!/usr/bin/env node

const fs = require('fs');
const _ = require('lodash');

// Parse command-line arguments manually
const args = process.argv;
const filePath = args.includes('--file') ? args[args.indexOf('--file') + 1] : './corpus.txt';
const topN = args.includes('--top') ? parseInt(args[args.indexOf('--top') + 1]) : 10;
const minLen = args.includes('--minLen') ? parseInt(args[args.indexOf('--minLen') + 1]) : 1;
const unique = args.includes('--unique');

// Read the file
const text = fs.readFileSync(filePath, 'utf-8');
const words = text.replace(/[^a-zA-Z\s]/g, '').toLowerCase().split(/\s+/).filter(word => word.length >= minLen);

const processedWords = unique ? _.uniq(words) : words;

// Get word statistics
const wordCount = processedWords.length;
const uniqueWords = _.uniq(processedWords).length;
const wordFrequency = _.countBy(processedWords);
const sortedWords = _.toPairs(wordFrequency).sort((a, b) => b[1] - a[1]);

const longestWord = _.maxBy(processedWords, 'length');
const shortestWord = _.minBy(processedWords, 'length');

// Output the results
console.log(`Total words: ${wordCount}`);
console.log(`Unique words: ${uniqueWords}`);
console.log(`Longest word: ${longestWord}`);
console.log(`Shortest word: ${shortestWord}`);
console.log(`Top ${topN} most repeated words:`);
sortedWords.slice(0, topN).forEach(([word, count]) => {
  console.log(`${word}: ${count}`);
});