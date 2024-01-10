interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'San Francisco'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'Miami'
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const trHead: HTMLTableRowElement = document.createElement('tr');
const thFirstName: HTMLTableHeaderCellElement = document.createElement('th');
const thLastName: HTMLTableHeaderCellElement = document.createElement('th');
const thAge: HTMLTableHeaderCellElement = document.createElement('th');
const thLocation: HTMLTableHeaderCellElement = document.createElement('th');

thFirstName.innerHTML = 'First name';
thLastName.innerHTML = 'Last name';
thAge.innerHTML = 'Age';
thLocation.innerHTML = 'Location';

trHead.appendChild(thFirstName);
trHead.appendChild(thLastName);
trHead.appendChild(thAge);
trHead.appendChild(thLocation);
thead.appendChild(trHead);
table.appendChild(thead);

studentsList.forEach((student: Student) => {
    const trBody: HTMLTableRowElement = document.createElement('tr');
    const tdFirstName: HTMLTableDataCellElement = document.createElement('td');
    const tdLastName: HTMLTableDataCellElement = document.createElement('td');
    const tdAge: HTMLTableDataCellElement = document.createElement('td');
    const tdLocation: HTMLTableDataCellElement = document.createElement('td');

    tdFirstName.innerHTML = student.firstName;
    tdLastName.innerHTML = student.lastName;
    tdAge.innerHTML = student.age.toString();
    tdLocation.innerHTML = student.location;

    trBody.appendChild(tdFirstName);
    trBody.appendChild(tdLastName);
    trBody.appendChild(tdAge);
    trBody.appendChild(tdLocation);
    tbody.appendChild(trBody);
});
