$(function() {
    // STORE AGE EACH PERSON
    var persons = [
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

    // FILTER FIRST OPTION
    function filterAge(persons) {
        return (persons.age >= 18) && (persons.age <=40);
    }

    let results = [];
    results = persons.filter(filterAge);
    let $tableBody1 = $('<tbody></tbody>');

    for (let i = 0; i<results.length; i++) {
        let person = results[i];
        let $row = $('<tr></tr>');
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.age));
        $tableBody1.append( $row );                     
    }

    $('#table-1 thead').after($tableBody1);

    // FILTER SECOND OPTION
    results = [];
    persons.forEach(function(person) {
        if(person.age >= 18 && person.age <=41) {
            results.push(person);
        }
    });

    let $tableBody2 = $('<tbody></tbody>');

    for (let i = 0; i<results.length; i++) {
        let person = results[i];
        let $row = $('<tr></tr>');
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.age));
        $tableBody2.append( $row );                     
    }

    $('#table-2 thead').after($tableBody2);

    // FILTER THIRD OPTION
    let rows = [], 
    $min = $('#value-min'),
    $max = $('#value-max'),
    $table = $('#table-3');

    function makeRows() {
        persons.forEach(function(person) {
            let $row = $('<tr></tr>');
            $row.append($('<td></td>').text(person.name));
            $row.append($('<td></td>').text(person.age));
            rows.push({
                person: person,
                $element: $row
            });
        });
    }

    function appendRows() {
        let $tableBody3 = $('<tbody></tbody>');
        rows.forEach(function(row) {
            $tableBody3.append(row.$element);
        });
        $table.append($tableBody3);
    }

    function update(min, max) {
        rows.forEach(function(row) {
            if (row.person.age >= min && row.person.age <= max) {
                row.$element.show();
            } else {
                row.$element.hide();
            }
        });
    }

    function init () {
        $('#slider').noUiSlider({
            range: [16, 65], start: [18, 27], handles: 2, margin: 1, connect: true,
            serialization: {to: [$min, $max],resolution: 1}
        }).change(function() { update($min.val(), $max.val()); });
        makeRows();
        appendRows();
        update($min.val(), $max.val()); 
    }

    $(init);
});