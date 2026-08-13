package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HelloController {
	@GetMapping("/api/hello")
	public Map<String, String> helloWorld() {
		return Map.of("message", "Hello World from Spring Boot Backend!");
	}
}