import React from 'react'

export default function AllCourseListRow({course}) {

    return (
        <tr>
        <td>
          {course.courseCode}
        </td>
        <td>{course.courseName}</td>
        <td>{course.category}</td>
        <td>{course.licEmial}</td>
        <td>{course.learningHours}</td>
      

        </tr>
    )
}
