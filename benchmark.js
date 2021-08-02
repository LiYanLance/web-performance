const { PerformanceObserver, performance } = require('perf_hooks');

let iterations = 1e6;

// 🔚 SETUP

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0]);
    performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('start');

// EXERCISE 💪

class Point{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}


while (iterations--) {
  const point = new Point(2,4,6);
  delete point.y
  
  JSON.stringify(point);
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');
