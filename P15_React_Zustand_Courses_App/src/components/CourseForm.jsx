import { useState } from 'react';
import useCourseStore from '../stores/courseStore';

const CourseForm = () => {
    const [courseTitle, setCourseTitle] = useState('');
    const addCourse = useCourseStore((state) => state.addCourse);

    const handleCourseSubmit = () => {
        if (!courseTitle.trim()) {
            alert('Please enter a course title!');
            return;
        }
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle,
            completed: false
        });
        setCourseTitle('');
    };

    return (
        <div className='form-container'>
            <input
                className='form-input'
                value={courseTitle}
                onChange={(e) => {
                    setCourseTitle(e.target.value);
                }}
            />
            <button className='form-submit-btn' onClick={handleCourseSubmit}>
                Add Course
            </button>
        </div>
    );
};

export default CourseForm;
