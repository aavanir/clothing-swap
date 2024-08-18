package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody Users user) {
        Users registeredUser = userService.registerUser(user);
        return ResponseEntityok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<Users> login(@RequestBody Map<String, String> loginData) {
        Users authenticatedUser = userService.authenticateUser(
                loginData.get("username"), loginData.get("password"));

        if (authenticatedUser != null) {
            return ResponseEntity.ok(authenticatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
