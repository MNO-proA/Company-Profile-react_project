import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import "./index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  let showEmployee = true;
  let [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Michael",
      role: "CEO",
      img: "https://images.pexels.com/photos/16153000/pexels-photo-16153000/free-photo-of-portrait-of-a-handsome-man-wearing-sunglasses.jpeg",
    },
    {
      id: 2,
      name: "Jehoshaphat",
      role: "Marketing Manager",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 3,
      name: "James",
      role: "Product Designs Manager",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 4,
      name: "Sammy",
      role: "Facility Manager",
      img: "https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg",
    },
    {
      id: 5,
      name: "Godwin",
      role: "Senior Software Enginner",
      img: "https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg",
    },
    {
      id: 6,
      name: "Emerald",
      role: "Intern",
      img: "https://images.pexels.com/photos/3886347/pexels-photo-3886347.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(myName, myRole, myImg) {
    const newData = {
      id: uuidv4(),
      name: myName,
      role: myRole,
      img: myImg,
    };
    setEmployees([...employees, newData]);
  }

  return (
    <div className="App">
      {showEmployee ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>

          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        "There are no employees"
      )}
    </div>
  );
}

export default App;
