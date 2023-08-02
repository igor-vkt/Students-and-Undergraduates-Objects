var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var students = /** @class */ (function () {
    function students(cName, cAge, cGender, cNationality) {
        this.name = cName;
        this.age = cAge;
        this.gender = "famale";
        this.nationality = cNationality;
    }
    students.prototype.getNationality = function () {
        console.log("nationality is ".concat(this.nationality));
    };
    return students;
}());
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(cName, cAge, cGender, cNationality, cBatch, cGPA) {
        var _this = _super.call(this, cName, cAge, cGender, cNationality) || this;
        _this.batch = cBatch;
        _this.GPA = cGPA;
        return _this;
    }
    return UnderGraduates;
}(students));
;
var student1 = new students("Anna", 23, "famale", "Mexican");
var student2 = new students("Jenny", 23, "famale", "USA");
var student3 = new UnderGraduates("Maria", 23, "famale", "Canada", 23, 88);
student1.getNationality();
