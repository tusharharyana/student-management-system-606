package com.example.sms.dto;

public class StudentResponseDTO {

    private Integer id;
    private String name;
    private String course;
    private String email;
    private Integer age;

    public StudentResponseDTO(Integer id, String name, String course, String email, Integer age) {
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

     public Integer getAge() {
        return age;
    }

}