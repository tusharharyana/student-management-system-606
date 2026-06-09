package com.example.sms.controller;

import com.example.sms.model.Student;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.sms.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping
    public ArrayList<Student> getStudents() {

    ArrayList<Student> students = new ArrayList<>();

        students.add(new Student(1, "John Doe", "Mca"));
        students.add(new Student(2, "Jane Smith", "Bca"));
        students.add(new Student(3, "Alice Johnson", "Mca"));

        return students;
    
    }

    @GetMapping("/bca")
    public List<Student> getBcaStudents(){
        return getStudents().stream()
                .filter(student -> "Bca".equals(student.getCourse()))
                .collect(Collectors.toList());
    }


    @GetMapping("/count")
    public int countStudents(){
        return service.getStudentCount();
    }

    @GetMapping("/message")
    public String getMessage(){
        return service.getStudentInfo();
    }

}