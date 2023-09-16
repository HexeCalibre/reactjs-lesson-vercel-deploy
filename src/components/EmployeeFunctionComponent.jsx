import React from 'react'
import Department from './DepartmentFunctionComponent';

const Employee = (employee) => {
    return (
      <>
        <h2>Employee Information</h2>      
        <p>
          <label>
            Employee ID: <b>{employee.id}</b>
          </label>
        </p>
        <p>
          <label>
            Employee First Name: <b>{employee.firstName}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Last Name: <b>{employee.lastName}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Age: <b>{employee.age}</b>
          </label>
        </p>
        <p>
           <Department
             Id={employee.departmentId}
             name={employee.departmentName}
           ></Department>
         </p>
      </>
    );
  };

  export default Employee;