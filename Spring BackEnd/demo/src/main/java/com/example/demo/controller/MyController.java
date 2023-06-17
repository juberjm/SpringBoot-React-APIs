package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Course;
import com.example.demo.services.CourseServise;

@RestController
public class MyController {
	
	@Autowired
	public CourseServise courseService;
	
	
//	@GetMapping("/hello")
//	public String Home() {
//		return "Hello zubair";
//	}
	
	//get courses
	@GetMapping("/courses")
	public List <Course> GetCourses(){
		
			return this.courseService.getCources();
		}
	
	@GetMapping("/courses/{courseId}")
	public Course GetCourse(@PathVariable String courseId) {
		return this.courseService.getCourse(Long.parseLong(courseId));
		
	}
	
	@PostMapping("/courses")
	public Course addCourse (@RequestBody Course course){
		return this.courseService.addCourse(course);
		
	}
	
	@PutMapping("/courses/{courseId}")
	public Course updateCourse (@RequestBody Course course){
		return this.courseService.updateCourse(course);
		
	}
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
}

