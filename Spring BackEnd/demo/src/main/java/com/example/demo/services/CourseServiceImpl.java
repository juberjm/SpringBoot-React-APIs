package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.CourseDao;
import com.example.demo.entities.Course;

@Service
public class CourseServiceImpl implements CourseServise {

	@Autowired
	private CourseDao courseDao;
//	List<Course>list;
	public CourseServiceImpl() {
//		list=new ArrayList<>();
//		
//		list.add(new Course(1,"java","java frameworks"));
//		list.add(new Course(2,"Springboot","rest apis using springboot"));
//		list.add(new Course(3,"dotnet","dotnet frameworks"));
	}
	
	@Override
	public List<Course> getCources() {
		
		return courseDao.findAll();
	}
	

	@Override
	public Course getCourse(long courseId) {

//		Course c = null;
//		
//		for(Course crs : list) {
//			if(crs.getId()==courseId) {
//				c=crs;
//				break;
//			}
//		}
		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
//		 list.add(course);
		courseDao.save(course); 
		return course;
	}

	@Override
	public Course updateCourse(Course course) {

//		list.forEach(e->{
//			if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//				
//		});
		courseDao.save(course);
		return course;	
	}

//	@SuppressWarnings("deprecation")
	@Override
	public String deleteCourse(Long parseLong) {
		
//		list= this.list.stream().filter(e->e.getId()!=Collectors.toList());
		Course entity=courseDao.getOne(parseLong);
		courseDao.delete(entity);
		return "deleted";
	}

}
