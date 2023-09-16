import React from 'react'

const Department = (department) => {
    return (
      <>
      <h2>Department Information</h2>
      <div>
        <p>
          <label>
            Department ID: <b>{department.id}</b>
          </label>
        </p>
        <p>
          <label>
            Department Name: <b>{department.name}</b>
          </label>
        </p>
      </div>
      </>
    );
  };
  
  export default Department;