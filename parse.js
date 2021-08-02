// eagerly-parsed
const a = 1;
const b = 2;

// 做个标记, 先不 parse
function add(a,b){  
  return x + y;
}

// 立刻, 回去 parse add
add(a,b)




// eagerly-parsed
const a = 1;
const b = 2;


// 立刻 parse
(function add(a,b){  
  return x + y;
});

add(a,b)