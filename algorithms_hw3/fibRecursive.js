function fibRecursive(n) {
  if (n <= 1) return n
  return fibRecursive(n - 1) + fibRecursive(n - 2)
}

console.log(fibRecursive(3))