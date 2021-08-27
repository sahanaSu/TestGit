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
    check_eligibility_placements(marks) {
        return (age) => {
            if(this.board_marks >= marks && this.age >= age){
                return true;
            }else{
                return false;
            }
        }
    }
}

const Arjun = new student('Arjun',15,21335,90);
const sahana = new student('sahana',14,21335,30);
const Ashwini = new student('Ashwini',13,31653,45);
const Arun = new student('Arun',12,21335,35);
const sam = new student('sam',11,21335,40);


console.log(Arjun.check_eligibility_placements(40)(13));
console.log(sahana.check_eligibility_placements(40)(13));
console.log(Ashwini.check_eligibility_placements(40)(13));
console.log(Arun.check_eligibility_placements(40)(13));
console.log(sam.check_eligibility_placements(40)(13));
