const anagrams = [
    'oz bilal tochberer',
    "it's razorbill beachcomber",
    'och robe tilblazer',
    'bib chorizo cellarmaster',
    'thor bble carizole',
    'zll borcht aberoie',
    'brzl orche atobile',
    'dame shelburne characterizing',
    'uber englishman characterized',
    'agnes rhumbline characterized',
    'rehab scrutinized charlemagne',
    'dreams zurich interchangeable',
    'bam hamster technocratic',
    'mechatronic masterbatch',
    'bam ratchet mechatronics',
];

function isAnagramInArray(anagram, arr) {
    const anagramLetters = anagram.toLowerCase().split('').sort().join('');
    const anagramArray = [];
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        const wordLetters = word.toLowerCase().split('').sort().join('');
        if (wordLetters === anagramLetters && word.length === anagram.length) {
            anagramArray.push(word);
        }
    }
    return anagramArray;
}

console.log(isAnagramInArray('Bob Ziroll Teacher', anagrams));
console.log(
    isAnagramInArray('treat', [
        'tater',
        'tree',
        'teart',
        'tetra',
        'heart',
        'hamster',
    ])
);