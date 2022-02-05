import { useState } from "react"

const useForecast = () => {

    const [isErr, setErr] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)
    const submitReq = (loc) => {
        console.log('loc:', loc);

    }

    return {
        isErr, isLoading, forecast, submitReq
    }

}
export default useForecast