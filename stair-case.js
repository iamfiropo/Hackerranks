function staircase(n) {
  const space = ' ';
  const pound = '#';
  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n-i) + pound.repeat(i))
  }
} 