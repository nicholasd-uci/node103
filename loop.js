// Array filtered with for loop

let numbers = [1, 2, 3, 4, 5]

let odds = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    odds.push(numbers[i])
  }
}

console.log(odds)

// ------------------------------------

// Array filtered with iterator

let numbers = [1, 2, 3, 4, 5]

let odds = numbers.filter(number => {
  return number % 2 !== 0
})

console.log(odds)

// ------------------------------------

// Map with For Loop

let letters = ['a', 'b', 'c', 'd', 'e']

let letterObjs = []

for (let i = 0; i < letters.length; i++) {
  letterObjs.push({
    letter: letters[i]
  })
}

console.log(letterObjs)

// ------------------------------------

// Map with array iterator

let letters = ['a', 'b', 'c', 'd', 'e']

let letterObjs = letters.map(letter => {
  return { letter }
})

console.log(letterObjs)

// ------------------------------------

// Array loop

let letters = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i])
}

// ------------------------------------

// Array loop with iterator

let letters = ['a', 'b', 'c', 'd', 'e']

letters.forEach((letter, i) => {
  console.log(i, letter)
})