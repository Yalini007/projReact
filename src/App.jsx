import Student from './components/card';

import student1 from './assets/student1.webp';
import student2 from './assets/student2.webp';
import student3 from './assets/student3.webp';

function App() {
  return (
    <>
      <h1 className="heading">Student Details Portal</h1>

      <Student
        photo={student1}
        name="Alya"
        dept="EIE"
        year="II"
        cgpa="8.5"
      />

      <Student
        photo={student2}
        name="Yadhav"
        dept="ECE"
        year="IV"
        cgpa="9.1"
      />

      <Student
        photo={student3}
        name="Arya"
        dept="MECH"
        year="I"
        cgpa="8.0"
      />
    </>
  );
}

export default App;