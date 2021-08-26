class student{
    static count = 0;
    constructor(name,age,phone_no,board_marks){
        this.name = name
        this.age = age
        this.phone_no = phone_no
        this.board_marks = board_marks
        student.studentcount();
    }
    static studentcount(){
        return (student.count++);
    }
    check_eligibility = () => {
        if(this.board_marks >= 40 && this.age >= 13){
            console.log(`${this.name} of ${this.age} is eligible for placements`);
        }
    }
}

const Arjun = new student('Arjun',15,21335,90);
const sahana = new student('sahana',14,21335,30);
const Ashwini = new student('Ashwini',13,31653,45);
const Arun = new student('Arun',12,21335,35);
const sam = new student('sam',11,21335,40);

console.log(student.studentcount());

Arjun.check_eligibility.call(Arjun,);
sahana.check_eligibility.call(sahana,);
Ashwini.check_eligibility.call(Ashwini,);
Arun.check_eligibility.call(Arun,);
sam.check_eligibility.call(sam,);
