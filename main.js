//1. Map () concatenate string

document.write('<br>');
document.write('<br>');

document.write("1. Concatenate String");

document.write('<br>');

const users = [
    {
        first_name: 'Mike',
        last_name: 'Sheridan'
    },
    {
        first_name: 'Tim',
        last_name: 'Lee'
    },
    {
        first_name: 'John',
        last_name: 'Carte'
    }
];

const fullNames = users.map(users => users.first_name + " " + users.last_name);

console.log(fullNames);
document.write(fullNames);

document.write('<br>');
document.write('<br>');

//2. Last Name show used Map ()

document.write('<br>');
document.write('<br>');

document.write("2. Last Name show used Map ()");

document.write('<br>');

const lastN = [
    {
        first_name: 'Mike',
        last_name: 'Sheridan',
        age: 30
    },
    {
        first_name: 'Tim',
        last_name: 'Lee',
        age: 45
    },
    {
        first_name: 'John',
        last_name: 'Carte',
        age: 25
    }
];

const lastNames = lastN.map(lastN => lastN.last_name);

console.log(lastNames);
document.write(lastNames);

document.write('<br>');
document.write('<br>');

//3. Map () concatenate then join text

document.write('<br>');
document.write('<br>');

document.write("3. concatenate then join text");

document.write('<br>');

const lives = [
    {
        first_name: 'Mike',
        location: 'London'
    },
    {
        first_name: 'Tim',
        location: 'US'
    },
    {
        first_name: 'John',
        location: 'Australia'
    }
];

const textName = lives.map(lives => lives.first_name + " lives in " + lives.location);

const textFullNames = textName.join(", ");

console.log(textFullNames);
document.write(textFullNames);

document.write('<br>');
document.write('<br>');