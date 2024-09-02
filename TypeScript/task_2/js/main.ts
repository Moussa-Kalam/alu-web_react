interface BaseInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
}

interface DirectorInterface extends BaseInterface{
    workDirectorTasks(): string;
}

interface TeacherInterface extends BaseInterface{
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{
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

class Teacher implements TeacherInterface {
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

const createEmployee = (salary: number | string): DirectorInterface | TeacherInterface => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }

    return new Director();
}