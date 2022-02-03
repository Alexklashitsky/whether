import React from 'react'
import { connect } from 'react-redux'
class _favorites extends React.Component {

    render() {
        return (
            <h2>favorites page</h2>
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

export const favorites = connect(mapStateToProps, mapDispatchToProps)(_favorites)
