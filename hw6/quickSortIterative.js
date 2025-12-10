// Быстрая сортировка без рекурсии:
// Создаем стек, что бы знать какие части массива надо сортировать
// берем из стека часть массива и выьираем средний элемент pivot
// слева ищем элементы больше pivot, справа ищем элементы меньше pivot
// меняет их местами, чтобы маленькие были слева, а большие справа
// после разделения добавляем в стек левую и правую часть для сортировки
// повторяем, пока все в стеке не обработаем - тогда массив отсортирован

function quickSortIterative(arr) {
  const stack = [[0, arr.length - 1]]

  while (stack.length > 0) {
    const [start, end] = stack.pop()

    if (start >= end) continue

    const pivot = arr[Math.floor((start + end) / 2)]
    let left = start
    let right = end

    while (left <= right) {
      while (arr[left] < pivot) left++
      while (arr[right] > pivot) right--

        if (left <= right) {
          [arr[left], arr[right]] = [arr[right], arr[left]]
          left++
          right--
        }
    }
    stack.push([start, right])
    stack.push([left, end])
  }
  return arr
}

console.log(quickSortIterative([7, 3, 13, 1, 9, 4, 5]))