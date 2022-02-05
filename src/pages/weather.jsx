import React from 'react'
import { connect } from 'react-redux'
import { AutoComplete } from '../cmps/autoComplete.jsx'
import { Test } from '../cmps/test'
import useForecast from '../hooks/use.forecast'
function _Weather() {



    const { isErr, isLoading, forecast, submitReq } = useForecast()
    const onSubmit = (value) => {
        submitReq(value)
    }

    return (
        <section>
            <h2>Weather page</h2>
            <div>
                <Test submitSearch={onSubmit} />
                {isErr && 'error'}
                {isLoading && 'loading'}
            </div>
            {forecast && 'forcast'}
        </section>
    )


}



function mapStateToProps(state) {
    return {
        // count: state.toyModule.count,
        // user: state.userModule.user,
    }
}
const mapDispatchToProps = {

}


export const Weather = connect(mapStateToProps, mapDispatchToProps)(_Weather)


