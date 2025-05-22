package com.momsherbal.backend.service;

import com.momsherbal.backend.model.User;
import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    void deleteUser(Long userId);
}
