package com.example.sms.model;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String course;
    private String email;
    private Integer age;

    public Student() {
    }

    public Student(Integer id, String name, String course, String email, Integer age
    ) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.email = email;
        this.age = age;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

     public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

     public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}