import { useState } from "react"

const useGauge = (initial) => {
    const [data, setData] = useState(initial)

    const suma = () => {
        if (data[1][1] < 100) {
            const newstate = data.map((obj1, i) => obj1.map((obj2, j) => i && j === 1 ? obj2 + 1 : obj2))
            setData(newstate)
        }
    }

    const resta = () => {
        if (data[1][1] > 0) {
            const newstate = data.map((obj1, i) => obj1.map((obj2, j) => i && j === 1 ? obj2 - 1 : obj2))
            setData(newstate)
        }
    }

    const reset = () => {
        setData(initial)
    }

    const set = (valor) => {
        if (valor >= 0 && valor <= 100) {
            const newstate = data.map((obj1, i) => obj1.map((obj2, j) => i && j === 1 ? valor : obj2))
            setData(newstate)
        }
    }

    return [data, suma, resta, reset, set]

}

export default useGauge