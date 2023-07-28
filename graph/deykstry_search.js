/*
  Алгоритм дейкстры для поиска кратчайшего пути
     B._____7_______.F
    2/             2/|\1
  А./            D./ | \.G
   1\            5/  |2
     \.C___2___H./__1|.E

    Нам надо дойти от точки А в точку G. С минимальным прохожденным путем. Если мы пойдем (A, B, F, G), мы пройдем минимальный вершин, но пройдем 10 строчек (это как с одного города на другой, через 3 города на пройти 10км), если мы пройдем (A, C, H, E, F, G), мы проходим больше вершин, но меньше строк (это как через 4 города но проходить 7км)

    Мы берем начальную точку A и все точки до точки назначение.
    |   | B - 2
    |   | C - 1
    | A | D - ? (100000) За сколько мы можем дойти до этих точек - 8
    |   | E - ? (100000) - 4
    |   | F - ? (100000) - 9 (оптимальный вариант - 6)
    |   | G - ? (100000) - 10 (оптимальный вариант - 7)
    Мы имеем путь от точки А до точки B, C и знаем сколько шагов до них. До остальных точек мы не знаем сколько шагов, Поэтому мы их помечаем с знаком бесконечности или прикрепляем большое число. Наша задача найти и применить самый ближайший шаг до пункта значений.
*/
const graph = {};                     // Создаем объект граф
graph.a = {b: 2, c: 1};               // И на него ставим все вершины, с ихними путьями и шагами, добавляя в отдельный объект (Например: А имеет путь в B: 2, C: 1)
graph.b = {f: 7};
graph.c = {h: 2};
graph.f = {g: 1};
graph.h = {d: 5, e: 1};
graph.d = {f: 2};
graph.e = {f: 2};
graph.g = {};

function shortPath(graph, start, end) {                     // Создаем функцию, принимаем туда граф, начальную точку и конечную точку

  const steps = {} ;                                        // Создаем объект, который будем хранить кратчайший шаги
  const processed = [];                                     // Создаем массив, который мы будем хранить пути, которые мы уже проверили
  let neighbors = {};                                       // Создаем объект, который будем хранить соседные вершини, проверяемого вершин

  Object.keys(graph).forEach(node => {                      // Получаем список ключей (вершини)
    if(node !== start) {                                    // Если нынешний ключ не равно стартовой вершини (Стартовая вершина сюда не относится)
      let value = graph[start][node];                       // graph[start] = {b: 2, c: 1}, node это каждый из этих ключей, тогда у нас получается, если node равно b, значение будет 2, если с значение будет 1
      // console.log(value);
      steps[node] = value || 100000;                        // Если с вершини А есть путь к нынешниму значению, тогда мы добавляем этот value, если нет то добавляем бесконечное число
    }
  })
  // console.log(steps);

  // Нам нужно найти вершину, который можно дойти с точки А, и путь который самый ближайший
  let node = findNodeLowestStep(steps, processed);          // Для этого создаем функцию, принимаем в него, все пути с шагами, и массив проверенных пути

  // И так мы получаем вершину, с минимальным шагом, который имеет доступ нынешний вершина
  while(node) {                                             // Начинаем цикл пока вершини не звкончутся
    const step = steps[node];                               // Прикрепляем к переменной, значению полученного вершини (Первом случае значение С 1)
    // console.log(step)
    neighbors = graph[node];                                // Прикрепляем к переменной, вершину с значением, куда имеет доступ полученный вершини (Первом случае {h: 2}, С имеет доступ к нему)
    // console.log(neighbors)
    Object.keys(neighbors).forEach(neighbor => {            // Получаем значение neighbors (Первом случае это h)
      // console.log(neighbor)
      let newStep = step + neighbors[neighbor];             // добавляем 2 значений двух вершин (Первом случае это c: 1; h: 2)
      // console.log(newStep)
      // console.log(steps[neighbor])
      // И проверяем значений newStep с нынешнего вершини из графа (Первом случае это newStep = 3; steps[neighbor] это h, и как помните мы в переменном steps всем вершинам который не имеет доступ А добавляли число 100000) Получается newStep = 3 steps[neighbor] = 100000
      if(newStep < steps[neighbor]) {
        steps[neighbor] = newStep;                          // Если условие совподают тогда меняем значение steps[neighbor] (Первом случае, место h: 100000, будет h: 3)
      }
    })
    processed.push(node);                                   // То что проверяли добавляем в массив проверонных (Первом случае это c)
    node = findNodeLowestStep(steps, processed);            // И с помощью рекурсий вызываем функцию, с новымы значениями steps
  }
  return steps;
}

function findNodeLowestStep(steps, processed) {
  let lowestStep = 100000;                                  // Создаем переменную для минимального шага, по умолчанию добавляем большое число
  let lowestNode;                                           // Вершина который возвращаем

  Object.keys(steps).forEach(node => {                      // Получаем список ключей (вершини)
    let step = steps[node]                                  // И получаем все их значений (то есть шаги) (Первом случае это b: 2, получается 2)
    // console.log(step)
    if(step < lowestStep && !processed.includes(node)) {    // Если этот проверяемый шаг меньше чем тот который мы наверху создали, и этот шаг нет внутри проверенных шагов
      lowestStep = step;                                    // Мы нашли новый шаг, и меняем значение 
      lowestNode = node;                                    // И добавляем вершину который будем возвращать
    }
  })
  // console.log(lowestNode)                                // Возвращаем вершину с минимальным шагом (Первом случае это с: 1)
  return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));      // { b: 2, c: 1, f: 6, h: 3, d: 8, e: 4, g: 7 } Результат полностью совподает с тем что нам нужно
