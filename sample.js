import { createTracing, getEnabledCategories } from 'node:trace_events';
const t1 = createTracing({ categories: ['node', 'v8'] });
const t2 = createTracing({ categories: ['node.perf', 'node'] });
t1.enable();
t2.enable();

// Prints 'node,node.perf,v8'
console.log(getEnabledCategories());

t2.disable(); // Will only disable emission of the 'node.perf' category

// Prints 'node,v8'
console.log(getEnabledCategories());