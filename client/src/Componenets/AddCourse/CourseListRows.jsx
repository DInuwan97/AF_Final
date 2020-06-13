import React from 'react'

export default function CourseListRows({course,onChangeHandler}) {

    return (
        <tr>
        <td>
          {course.courseCode}
        </td>
        <td>{course.courseName}</td>
        <td>{course.category}</td>
        <td>{course.licEmial}</td>
        <td>{course.learningHours}</td>
        <td>
              <button class="btn btn-success btn-sm mr-1">Edit</button>
              <button class="btn btn-danger btn-sm">Delete</button>
        </td>

        </tr>
    )
}
