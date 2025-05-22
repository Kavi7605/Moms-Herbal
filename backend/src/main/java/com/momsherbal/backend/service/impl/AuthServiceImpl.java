package com.momsherbal.backend.service.impl;

import com.momsherbal.backend.model.Role;
import com.momsherbal.backend.model.User;
import com.momsherbal.backend.payload.LoginRequest;
import com.momsherbal.backend.payload.SignupRequest;
import com.momsherbal.backend.repository.RoleRepository;
import com.momsherbal.backend.repository.UserRepository;
import com.momsherbal.backend.security.JwtTokenProvider;
import com.momsherbal.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public String login(LoginRequest loginRequest) {
        var authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );
        return jwtTokenProvider.generateToken(authentication);
    }

    @Override
    public String register(SignupRequest signupRequest) {
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            throw new RuntimeException("Username is already taken");
        }

        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new RuntimeException("Email is already taken");
        }

        User user = new User();
        user.setName(signupRequest.getName());
        user.setUsername(signupRequest.getUsername());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));

        Role role = roleRepository.findByName("ROLE_USER").orElseThrow(
                () -> new RuntimeException("Default role not found"));

        user.setRoles(Collections.singleton(role));
        userRepository.save(user);

        return "User registered successfully!";
    }
}
