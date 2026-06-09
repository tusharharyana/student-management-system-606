package com.example.sms.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;


@Service
public class StudentService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String getStudentInfo(){
        return "Service is working!";
    }

    public Integer getStudentCount() {

        String sql = "SELECT COUNT(*) FROM student";

        return jdbcTemplate.queryForObject(sql,Integer.class);

    }
}