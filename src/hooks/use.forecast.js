import { useState } from "react"
import axios from "axios"

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQ_URL = `${CROSS_DOMAIN}/${BASE_URL}`


const useForecast = () => {

    const [isErr, setErr] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)
    const submitReq = async (loc) => {
        console.log('loc:', loc);
        const { data } = await axios(`${REQ_URL}/search`, { params: { query: loc } })
        console.log('res:', data);



    }

    return {
        isErr, isLoading, forecast, submitReq
    }

}
export default useForecast