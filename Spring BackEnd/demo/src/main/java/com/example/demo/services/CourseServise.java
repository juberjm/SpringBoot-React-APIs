package com.example.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Course;


public interface CourseServise {

	public List<Course> getCources();
	
	public Course getCourse(long courseId);
	
	public Course addCourse (Course course);
	
	public Course updateCourse (Course course);
	
	public String deleteCourse (Long parseLong);


}
