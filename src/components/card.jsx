function Student(props) {
    return (
      <div className="student">
        <img src={props.photo} alt={props.name} />
  
        <h2>{props.name}</h2>
  
        <p><b>Department:</b> {props.dept}</p>
  
        <p><b>Year:</b> {props.year}</p>
  
        <p><b>CGPA:</b> {props.cgpa}</p>
  
        <button>View Profile</button>
      </div>
    );
  }
  
  export default Student;