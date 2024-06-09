import Services from './Services';
import Programers from './Programers';

function Companies(props) {
  return (
    <>
      <h1>Company Name: {props.CompanyName}</h1>
      <p>worker Number: {props.WorkerNumber}</p>
      <p>year of Founded: {props.yearOfFounded}</p>
      <Services Services={props.Services} WorkPrice={props.WorkPrice} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Programers
          empName={props.empName1}
          languages={props.languages1}
          yearOfWorks={props.yearOfWorks1}
          company={props.CompanyName}
        />
        <Programers
          empName={props.empName2}
          languages={props.languages2}
          yearOfWorks={props.yearOfWorks2}
          company={props.CompanyName}
        />
        <Programers
          empName={props.empName3}
          languages={props.languages3}
          yearOfWorks={props.yearOfWorks3}
          company={props.CompanyName}
        />
      </div>
    </>
  );
}

export default Companies;
