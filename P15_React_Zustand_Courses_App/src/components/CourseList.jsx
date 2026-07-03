import React from 'react';
import useCourseStore from '../stores/courseStore';

const CourseList = () => {
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore();

    return (
        <>
            <ul>
                {
                    courses.map((course) => {
                        return (
                            <React.Fragment key={course.id}>
                                <li
                                    className='course-item'
                                    style={{
                                        backgroundColor: course.completed ? '#00FF0044' : '#fff'
                                    }}>
                                    <span className='course-item-col-1'>
                                        <input
                                            type='checkbox'
                                            checked={course.completed}
                                            onChange={(e) => {
                                                toggleCourseStatus(course.id);
                                            }}
                                        />
                                    </span>
                                    <span style={{
                                        color: '#000'
                                    }}>{course?.title}</span>
                                    <button
                                        className='delete-btn'
                                        onClick={(e) => {
                                            removeCourse(course.id);
                                        }}>
                                        Delete
                                    </button>
                                </li>
                            </React.Fragment>
                        );
                    })
                }
            </ul>
        </>
    );
};

export default CourseList;
