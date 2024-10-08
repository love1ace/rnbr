#!/usr/bin/env node
const DEFAULT_LENGTH = 6;
const input = process.argv[2];
const length = input && !isNaN(input) ? parseInt(input) : DEFAULT_LENGTH;
const randomNumber = Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
console.log(`${randomNumber}`);
