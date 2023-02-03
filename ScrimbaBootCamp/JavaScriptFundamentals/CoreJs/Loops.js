for (i = 0; i < 5; i++)
    console.log('write again and again : ' + i);

console.log('-------------------');


var a = 134;

if (a < 150)
    console.log('less than 150');
else if (a > 150)
    console.log('greater than 150');
else
    console.log('they are equal');

console.log('-------------------');


var x = 1000;
while (x > 1) {
    console.log(x);
    x /= 10;
}
console.log('-------------------');
const words = ['already', 'cydeo', 'java', 'apple','java'];
for (i = 0; i < words.length; i++) {
	var count=0;
for ( j = 0; j < words.length; j++) {
if(words.at(i)===words.at(j))
count++;
}
if (count>1) {
	console.log(words.at(i));
}

}
