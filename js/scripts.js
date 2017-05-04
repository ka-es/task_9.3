var text = ('Papugi kosza trawe, unoszac sie nad ziemia 15 centymetrow, na czerwonych dywanach.');
var animal = ('Zielone slonie');
var animal = animal.toUpperCase();
console.log (animal); 

var textCharsAfter = text.replace('Papugi', animal);
console.log(textCharsAfter);

var partOfTextCharsAfter = textCharsAfter.slice(0,textCharsAfter.length/2);

console.log(partOfTextCharsAfter);
