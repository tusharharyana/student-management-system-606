package com.example.sms.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import com.example.sms.repository.StudentRepository;
import com.example.sms.model.Student;
import java.util.List;

import com.example.sms.exception.StudentNotFindException;
import com.example.sms.dto.StudentRequestDTO;


@Service
public class StudentService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private StudentRepository repository;

    public String getStudentInfo(){
        return "Service is working!";
    }

    public Integer getStudentCount() {

        String sql = "SELECT COUNT(*) FROM student";

        return jdbcTemplate.queryForObject(sql,Integer.class);

    }

    public List<Student> getAllStudents() {
       return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public Student getStudentById(Integer id) {
        return repository
                .findById(id)
                .orElseThrow(() -> new StudentNotFindException("Student not found with id: " + id));
    }

    public Student addStudent(StudentRequestDTO dto) {

        Student student = new Student();

        student.setName(dto.getName());
        student.setCourse(dto.getCourse());

        return repository.save(student);
    }

    public Student updateStudent(Integer id, StudentRequestDTO dto) {
        Student student = repository
                .findById(id)
                .orElseThrow(() -> new StudentNotFindException("Student not found with id: " + id));

        student.setName(dto.getName());
        student.setCourse(dto.getCourse());
        
        return repository.save(student);
    }


    public String deleteStudent(Integer id) {
        repository.deleteById(id);
        return "Student deleted successfully";
    }

}