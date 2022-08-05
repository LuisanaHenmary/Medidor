import useGauge from "./hooks/contador";
import { Chart } from "react-google-charts";


const App = () => {

  const [data, suma, resta, reset, set] = useGauge([
    ['Label', 'Value'],
    ['Cº', 0],
  ]) //el array de la pos

  const options = {
    width: 400, height: 120, //ancho, alto
    greenFrom: 30, greenTo: 50,//medida donde comienza la zona verde, medida donde termina la zona verde
    yellowFrom: 50, yellowTo: 80,//medida donde comienza la zona amarrilla, medida donde termina la zona amarrilla
    redFrom: 80, redTo: 100,//medida donde comienza la zona roja, medida donde termina la zona roja
    minorTicks: 5//numero de espacios que hay entra las rayitas grandes
  }

  return (
    <>
      <Chart
        chartType="Gauge"
        data={data}
        options={options}
      />
      <button onClick={()=>suma()} >Aumentar</button>
      <button onClick={()=>resta()} >Reducir</button>
      <button onClick={()=>reset()} >Resetiar</button>
      <button onClick={()=>set(50)} >Daler 50</button>
    </>

  )
}

export default App
