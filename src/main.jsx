import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

//  const element = <h1 className="hello">Hello World</h1>;
//  root.render(element);

//---------------React coding with JS
// const element = React.createElement(
//   "div",
//   { className: "hello" },
//   React.createElement("h1", null, "Hello World"),
//   React.createElement("h1", null, "Hello World Again")
// );
// root.render(element);

//---------------React coding with JSX
// const name = "davy";
// function getName() {
//   return "davy";
// }
const isPrintH1 = true;

// const element = (
//   <div class="hello">
//     <h1>Hello World {name}</h1>
//     <h1>Hello World {getName()}</h1>
//     <h1>Hello World Again </h1>
//     <h1>{2 * 2}</h1>

//Note: for you next bootcamp do research on conditional syntax of jsx

// the code below is conditional print
// {
//   isPrintH1 && <h1>Hello World</h1>;
// }

// the code below is ternary operator
// {
//   isPrintH1 ? <h1>Hello World</h1> : "";
// }

//   </div>
// );

// root.render(element);

//---------------Class Component
// class Employee extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//     //Notes props are read only this will produce error
//     //this.props.firstName = "James";
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Profile</h2>
//         <p>
//           <label>
//             Employee ID: <b>{this.props.id}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee First Name: <b>{this.props.firstName}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Last Name: <b>{this.props.lastName}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Age: <b>{this.props.age}</b>
//           </label>
//         </p>
//         <Department
//           Id={this.props.departmentId}
//           name={this.props.departmentName}
//         ></Department>
//       </div>
//     );
//   }
// }

// class Department extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Department Information</h2>
//         <p>
//           <label>
//             Department ID: <b>{this.props.id}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Department Name: <b>{this.props.name}</b>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// const classElement = (
//   <Employee
//     id="007"
//     firstName="James"
//     lastName="Bond"
//     age="20"
//     departmentId="1"
//     departmentName="CIA"
//   ></Employee>
// );

// root.render(classElement);

//---------------function Component
// const Employee = (employee) => {
//   return (
//     <>
//       <h2>Employee Information</h2>
//       <p>
//         <label>
//           Employee ID: <b>{employee.id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee First Name: <b>{employee.firstName}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Last Name: <b>{employee.lastName}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Age: <b>{employee.age}</b>
//         </label>
//       </p>
//       <p>
//          <Department
//            Id={employee.departmentId}
//            name={employee.departmentName}
//          ></Department>
//        </p>
//     </>
//   );
// };

// const Department = (department) => {
//   return (
//     <>
//     <h2>Department Information</h2>
//     <div>
//       <p>
//         <label>
//           Department ID: <b>{department.id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Department Name: <b>{department.name}</b>
//         </label>
//       </p>
//     </div>
//     </>
//   );
// };

// const functionElement = (
//   <Employee
//     id="007"
//     firstName="James"
//     lastName="Bond"
//     age="20"
//     departmentId="1"
//     departmentName="CIA"
//   ></Employee>
// );

// root.render(functionElement);
