package com.example.sms.controller;

import org.springframework.web.bind.annotation.*;
import com.example.sms.dto.LoginRequestDTO;
import com.example.sms.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequestDTO dto) {
        if(dto.getUsername().equals("admin") && dto.getPassword().equals("admin")) {
            return jwtService.generateToken(dto.getUsername());
        }

        return "Invalid credentials";
    }

    @GetMapping("/google-success")
    public String success(@AuthenticationPrincipal OAuth2User user){
        return "Welcome" + user.getAttribute("name");
    }

}