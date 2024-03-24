import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import { useState } from "react";
function App() {
  const [role, setRole] = useState('dev');

  const [students, setStudents] = useState([  
                      {id: 1, name: "Kervin", email: "Kervs@gmail.com"},
                      {id: 2, name: "John", email: "Johnny@gmail.com"},
                      {id: 3, name: "Francis", email: "FrancisP@gmail.com"},
                      {id: 4, name: "Raymart", email: "Raymartt@gmail.com"},
                      {id: 5, name: "Lowe", email: "Lowee@gmail.com"}
                    ]);

  return(
      <>
      <Header/>
      
      <div>
        {students.map((student) => {
          return(
          <Card key={student.id} name = {student.name} email={student.email}/>
          );
        })}
      </div>
      <Footer/>
      </>
    );
}

export default App