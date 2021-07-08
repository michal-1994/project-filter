$(function() {
    // STORE AGE EACH PERSON
    var person = [
        {
            name: 'Tomasz',
            age: 22
        },
        {
            name: 'Anna',
            age: 17
        },
        {
            name: 'Agata',
            age: 41
        },
        {
            name: 'Michał',
            age: 27
        }
    ];

    // CALCULATE AGE
    function filterAge(person) {
        return (person.age >= 18) && (person.age <=40);
    }

    // FILTER PERSON
    let results = [];
    results = person.filter(filterAge);
    let $tableBody = $('<tbody></tbody>');

    // CREATE TABLE WITH FIT ELEMENTS
    for (let i = 0; i<results.length; i++) {
        let person = results[i];
        let $row = $('<tr></tr>');
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.age));
        $tableBody.append( $row );                     
    }

    $('#table-1 thead').after($tableBody);
});