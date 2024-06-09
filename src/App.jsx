import './App.css';
import Btn from './components/Btn';
import Companies from './components/Companies';
import Programers from './components/Programers';

function App() {
  return (
    <>
      <Companies
        CompanyName={'Aramco'}
        WorkerNumber={'10293'}
        yearOfFounded={'1978'}
        Services={'Oil-Gas'}
        WorkPrice={'1000$'}
        empName1={['Fahad']}
        languages1={'JS SQL JAVA'}
        yearOfWorks1={'10 years'}
        empName2={['Fahad']}
        languages2={'JS SQL JAVA'}
        yearOfWorks2={'10 years'}
        empName3={['Fahad']}
        languages3={'JS SQL JAVA'}
        yearOfWorks3={'10 years'}
      />

      <Companies
        CompanyName={'Tuwaiq Academy'}
        WorkerNumber={'10293'}
        yearOfFounded={'1978'}
        Services={'Oil-Gas'}
        WorkPrice={'1000$'}
        empName1={['Fahad']}
        languages1={'JS SQL JAVA'}
        yearOfWorks1={'10 years'}
        empName2={['Fahad']}
        languages2={'JS SQL JAVA'}
        yearOfWorks2={'10 years'}
        empName3={['Fahad']}
        languages3={'JS SQL JAVA'}
        yearOfWorks3={'10 years'}
      />

      <Companies
        CompanyName={'Alibaba Cloud'}
        WorkerNumber={'10293'}
        yearOfFounded={'1978'}
        Services={'Oil-Gas'}
        WorkPrice={'1000$'}
        empName1={['Fahad']}
        languages1={'JS SQL JAVA'}
        yearOfWorks1={'10 years'}
        empName2={['Fahad']}
        languages2={'JS SQL JAVA'}
        yearOfWorks2={'10 years'}
        empName3={['Fahad']}
        languages3={'JS SQL JAVA'}
        yearOfWorks3={'10 years'}
      />
    </>
  );
}

export default App;
