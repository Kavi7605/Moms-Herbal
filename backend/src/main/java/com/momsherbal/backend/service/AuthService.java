package com.momsherbal.backend.service;

import com.momsherbal.backend.payload.LoginRequest;
import com.momsherbal.backend.payload.SignupRequest;

public interface AuthService {
    String login(LoginRequest loginRequest);
    String register(SignupRequest signupRequest);
}
