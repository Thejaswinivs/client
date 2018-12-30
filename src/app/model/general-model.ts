export module GeneralModel {
    export class Student {
        _id?: string;
        name: string;
        email: string;
        phone:  string
    }

    export class Course {
        _id?: string;
        name: string;
        duration: string;
        trainer: string;
    }
}