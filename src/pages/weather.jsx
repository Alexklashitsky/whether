import React from 'react'
import { connect } from 'react-redux'
class _Weather extends React.Component {

    render() {
        return (
            <h2>Weather page</h2>
        )
    }

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


