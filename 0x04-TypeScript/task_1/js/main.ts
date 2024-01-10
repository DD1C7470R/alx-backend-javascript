interface Teacher {
    readonly  firstName: string;
    readonly  lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number;
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface classInterface {
    workOnHomework(): string;
    displayName(): string;
};

class StudentClass implements classInterface{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}

interface StudentConstructor {
    new (firstName: string, lastName: string): classInterface;
};

const student = new StudentClass('Djo', 'djo');
console.log(student.displayName());
console.log(student.workOnHomework());
