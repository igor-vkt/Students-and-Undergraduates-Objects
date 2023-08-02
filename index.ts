class students{
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor(cName: string, cAge: number, cGender: string, cNationality: string){
        this.name = cName;
        this.age = cAge;
        this.gender = "famale";
        this.nationality = cNationality;
    }

  getNationality(){
        console.log (`nationality is ${this.nationality}`);
    }
    
}

class UnderGraduates extends students implements Iundergrad{
    batch: number;
    GPA: number;


    constructor(cName: string, cAge: number, cGender: string, cNationality: string, cBatch: number, cGPA: number){
        super(cName, cAge, cGender, cNationality)
        this.batch = cBatch;
        this.GPA = cGPA;
    }


}

interface Iundergrad{
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    GPA: number;
};

let student1 = new students("Anna", 23, "famale", "Mexican");
let student2 = new students("Jenny", 23, "famale", "USA");
let student3 = new UnderGraduates("Maria", 23, "famale", "Canada", 23, 88);
student1.getNationality();