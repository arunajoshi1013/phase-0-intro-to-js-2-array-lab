// Write your solution here!
const cats = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendCat(cat)
{
   cats.push(cat)
}

function destructivelyPrependCat(cat)
{
   cats.unshift(cat)
}

function destructivelyRemoveLastCat()
{
   cats.pop()
}

function destructivelyRemoveFirstCat()
{
   cats.shift()
}

function appendCat(cat)
{
   const copycat = [...cats]
   copycat.push(cat)

   return copycat
}

function prependCat(cat)
{
   const copycat = [...cats]
   copycat.unshift(cat)

   return copycat
}

function removeLastCat()
{
   const copycat = [...cats]
   copycat.pop()

   return copycat
}

function removeFirstCat()
{
   const copycat = [...cats]
   copycat.shift()

   return copycat
}
