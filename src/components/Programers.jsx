function Programers(props) {
  let backGroundColorT = props.company == 'Tuwaiq Academy' ? 'purple' : 'white';

  return (
    <div
      style={{
        backgroundColor: backGroundColorT,
        color: 'black',
        textAlign: 'center',
        width: '20rem',
      }}
    >
      <h1> {props.empName}</h1>
      <p>language: {props.languages}</p>
      <p>years of Work: {props.yearOfWorks}</p>
      <p>company: {props.company}</p>
    </div>
  );
}

export default Programers;
