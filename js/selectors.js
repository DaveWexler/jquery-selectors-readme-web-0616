// // declare your functions here...
// Write a function paragraphSelector that does not accept any parameters. The function should use an element selector to select the p tags in index.html and return those element. (Note that we're using the plural because the selector will always return an array when used with tags, even if there's only one!)
// Write a function lastImageSelector which does not accept any parameters. The function should use the last jQuery selector to return the last image in index.html.
// Write a function ninjaBabySelector which does not accept any parameters. The function should use an ID selector to return the ninja baby image.
// Write a function divSelector which does not accept any parameters. The function should use a class selector to return the two divs on the page.
// Write a function firstListItem which does not accept any parameters. The function should use a first-child selector to return the first list item in the ul with the ID pic-list.

function paragraphSelector() {
  return $('p')
}

function lastImageSelector () {
  return $('img:last')
}

function ninjaBabySelector () {
  return $('#baby-ninja')
}

function divSelector () {
  return $('.pics')
}

function firstListItem () {
  return $('#pic-list li:first-child')
}
