// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract Student{

    struct StudentStruct{
        uint id;
        string name;
        uint rollno;
        bool isMale;
        uint class;

    }

    StudentStruct[] public students;
 

    function registerStudent(string memory _name, uint _rollno, bool _isMale, uint _class) public {

students.push(StudentStruct({
    id:_class*10+_rollno,
    name:_name,
    rollno: _rollno,
    isMale:_isMale,
    class: _class
}));

    }

    function getAllStudent() public view returns(StudentStruct[] memory){
return students;
    }
}