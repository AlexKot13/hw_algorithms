// быстрая сортировка
// техника раздиляй и властвуй
// 1 выбираем опорный элемент (pivot)
// 2 разделяем массив на три части
// - элементы меньше\равные\больше pivot
// 3 рекурсивно сортируем левую и правую части
// 4 обьединяем три части в один отсортированный массив
// определяем базовый случай
// если в массиве 0 или 1 элемент - он уже отсортирован
// выбираем опорный элемент (pivot)
// создаем три массива
// разделяем элементы относительно pivot
// помещаем значение элементов в соответствующие массивы
// рекурсивно сортируем левую и правую часть

function quickSort(arr) {

  if(arr.length <= 1) {
    return arr
  }

  const pivot = arr[Math.floor(arr.length / 2)]

  const less = []
  const equal = []
  const greater = []

  for(let i = 0; i < arr.length; i++) {
    const value = arr[i]
    if(value < pivot) {
      less.push(value)
    } else if (value < pivot) {
      greater.push(value)
    } else {
      equal.push(value)
    }
  }
  return [...quickSort(less, ...equal, ...quickSort(greater))]
}
console.log(quickSort([5, 3, 8, 4, 2, 7, 1]))