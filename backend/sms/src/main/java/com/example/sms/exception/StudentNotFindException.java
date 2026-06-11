package com.example.sms.exception;

public class StudentNotFindException extends RuntimeException {
    public StudentNotFindException(String message) {
        super(message);
    }
}