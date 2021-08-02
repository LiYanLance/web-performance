const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0]);
    performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

// SETUP 🏁
const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP
performance.mark('start');

// EXERCISE 💪
let iterations = 1e7;
while (iterations--) {
  add(a, b);
}

add(1, "2");

iterations = 1e7;
while (iterations--) {
  add(a, b);
}


performance.mark('end');
performance.measure('JS compile', 'start', 'end');