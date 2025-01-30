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

    modifier duplicateRollno(uint _rollno){
        for (uint i =0;i<students.length;i++){
            if(students[i].rollno ==_rollno){
            revert("Duplicate entry of this roll no");
        }
    }
        _;
    }
    modifier alreadyRegisteredStudent(string memory _name, uint _rollno){
        for (uint i =0;i<students.length;i++){
            if((students[i].rollno ==_rollno) && (keccak256(abi.encodePacked(students[i].name))==keccak256(abi.encodePacked(_name)))){
                revert("Student with this name and rollno is already registered");
            }
        }
        _;
    }
    function registerStudent(string memory _name, uint _rollno, bool _isMale, uint _class) duplicateRollno(_rollno) alreadyRegisteredStudent(  _name,_rollno) public {

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