export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}


export const printTeacher = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}



export class StudentClass {
    constructor(public firstName: string, public lastName: string) {
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

export interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

export interface StudentClassInterface {
    displayName(): string;
    workOnHomework(): string;
}