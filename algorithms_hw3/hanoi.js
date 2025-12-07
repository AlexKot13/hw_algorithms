function hanoi(n, from, to,aux) {
  if (n === 1) {
    console.log(`Переместить диск 1 с ${from} на ${to}`)
    return
  }

  hanoi(n - 1, from, aux, to)

  console.log(`Переместить диск ${n} с ${from} на ${to}`)

  hanoi(n - 1, aux, to, from)
}

hanoi(3, 'левый', 'правый', 'средний')

