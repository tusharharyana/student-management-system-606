package com.example.sms.controller;

import org.springframework.web.bind.annotation.*;
import com.example.sms.dto.LoginRequestDTO;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequestDTO dto) {
        if(dto.getUsername().equals("admin") && dto.getPassword().equals("admin")) {
            return "JWT Token";
        }

        return "Invalid credentials";
    }

}