const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0]);
    performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

let iterations = 1e7;
const a = 1;
const b = 2;

// SETUP 🏁
const square = (x) => x * x;
const sumOfSquare = (a, b) => square(a) + square(b);

// const sumOfSqure = (a, b) => a * a + b * b;

// 🔚 SETUP
performance.mark('start');

// EXERCISE 💪
while (iterations--) {
    sumOfSquare(a, b);
}

performance.mark('end');
performance.measure('JS compile', 'start', 'end');