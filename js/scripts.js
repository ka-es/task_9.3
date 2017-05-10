var text = ('Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.');
var animal = ('Zielone słonie');
var animal = animal.toUpperCase();
console.log (animal); 

var textCharsAfter = text.replace('Papugi', animal);
console.log(textCharsAfter);

var partOfTextCharsAfter = textCharsAfter.slice(0,textCharsAfter.length/2);

console.log(partOfTextCharsAfter);
