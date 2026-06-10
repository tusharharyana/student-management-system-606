package com.example.sms.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import com.example.sms.repository.StudentRepository;
import com.example.sms.model.Student;
import java.util.List;


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
}