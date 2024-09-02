export interface BaseInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
}

export interface DirectorInterface extends BaseInterface{
    workDirectorTasks(): string;
}

export interface TeacherInterface extends BaseInterface{
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface{
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting a coffee break';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

export const createEmployee = (salary: number | string): DirectorInterface | TeacherInterface => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }

    return new Director();
}

export const isDirector = (employee: DirectorInterface | TeacherInterface): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

export const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }

    return employee.workTeacherTasks();
}

export type Subjects = "Math" | "History";

export const teachClass = (todayClass: Subjects): string => {
    if (todayClass === "Math") {
        return "Teaching Math";
    }

    return "Teaching History";
}