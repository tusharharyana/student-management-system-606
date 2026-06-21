package com.example.sms.controller;

import com.example.sms.model.Student;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.sms.service.StudentService;

import org.springframework.http.ResponseEntity;
import com.example.sms.dto.StudentResponseDTO;
import com.example.sms.dto.StudentRequestDTO;
import java.util.Map;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService service;

/* //SAMPLE LEARNING APIs

    // @GetMapping
    // public ArrayList<Student> getStudents() {

    // ArrayList<Student> students = new ArrayList<>();

    //     students.add(new Student(1, "John Doe", "Mca"));
    //     students.add(new Student(2, "Jane Smith", "Bca"));
    //     students.add(new Student(3, "Alice Johnson", "Mca"));

    //     return students;
    
    // }

    // @GetMapping("/bca")
    // public List<Student> getBcaStudents(){
    //     return getStudents().stream()
    //             .filter(student -> "Bca".equals(student.getCourse()))
    //             .collect(Collectors.toList());
    // }


    // @GetMapping("/count")
    // public int countStudents(){
    //     return service.getStudentCount();
    // }

    // @GetMapping("/message")
    // public String getMessage(){
    //     return service.getStudentInfo();
    // }

    // @GetMapping
    // public List<Student> getStudents(){
    //     return service.getAllStudents();
    // }

    // @PostMapping
    // public Student addStudent(@RequestBody Student student){
    //     return service.saveStudent(student);
    // }

    // @GetMapping("/{id}")
    // public ResponseEntity<?> getStudentById(@PathVariable Integer id){

    //     Student student = service.getStudentById(id);

    //     StudentResponseDTO response = new StudentResponseDTO(
    //             student.getId(),
    //             student.getName(),
    //             student.getCourse()
    //     );

    //     return ResponseEntity.ok(response);
    // }

    // @PostMapping
    // public ResponseEntity<?> addStudent(@RequestBody StudentRequestDTO dto){

    //     Student student = service.addStudent(dto);

    //     return ResponseEntity.ok(student);
    // }

    // @PutMapping("/{id}")
    // public ResponseEntity<?> updateStudent(@PathVariable Integer id, @RequestBody StudentRequestDTO dto){
    //     Student student = service.updateStudent(id, dto);
    //     return ResponseEntity.ok(student);
    // }

    // @DeleteMapping("/{id}")
    // public ResponseEntity<?> deleteStudent(@PathVariable Integer id){
    //     return ResponseEntity.ok(Map.of("message", service.deleteStudent(id)));
    // }

*/

    //CRUD APIs

    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getStudent(@PathVariable Integer id) {

        Student student = service.getStudentById(id);

        StudentResponseDTO response = new StudentResponseDTO(
                        student.getId(),
                        student.getName(),
                        student.getEmail(),
                        student.getCourse(),
                        student.getAge()
                );

        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<?> addStudent(@RequestBody StudentRequestDTO dto) {
        return ResponseEntity.ok(service.addStudent(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable Integer id, @RequestBody StudentRequestDTO dto) {
        return ResponseEntity.ok(service.updateStudent(id,dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Integer id) {
        return ResponseEntity.ok(Map.of( "message", service.deleteStudent(id)));
    }

    @GetMapping("/search")
    public List<Student> searchStudents(@RequestParam String name) {
        return service.searchStudents(name);
    }

    @GetMapping("/count")
    public Long countStudents() {
        return service.getStudentCount();
    }
}