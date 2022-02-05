

import React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const API = 'yQdQ6vhYlcGgDHKkCHVzHbIKguqkZiZK'
const URL = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'

export class AutoComplete extends React.Component {

    state = {
        search: {
            txt: ''
        },
        compulsions: {

        }

    }

    componentDidMount() {
        this.getAutoCompeteOps()
        console.log('start');
        console.log('this.state:', this.state);



    }

    async componentDidUpdate() {
        console.log('update');
        console.log('this.state:', this.state);

        // console.log(await this.getLoc());

        // const res = await this.getLoc()
        // console.log('res:', res);
        // const locations = res.map((city) => {
        //     const location = { city: city.LocalizedName, country: city.Country.LocalizedName }

        //     return location
        // })
        // console.log('locations:', locations);
        // await this.setState({ compulsions: locations }, console.log('this.state:', this.state))




    }

    async getAutoCompeteOps() {
        console.log('start auto');

        const res = await this.getLoc()
        console.log('res:', res);
        const locations = res.map((city) => {
            const location = { label: city.LocalizedName, country: city.Country.LocalizedName }

            return location
        })
        console.log('locations:', locations);
        this.setState({ compulsions: locations }, console.log('this.state:', this.state))

    }

    async getLoc() {
        try {
            const cites = await axios.get(URL, { params: { apikey: API, q: this.state.search.txt } })
            return (cites.data)
        } catch {
            console.log('Couldnt get cities')
        }


    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        console.log('field:', field);
        console.log('value:', value);



        this.setState(
            (prevState) => ({ ...prevState, search: { ...prevState.search, [field]: value } }), this.getAutoCompeteOps

        )
    }



    onSubmit = (e) => {
        e.preventDefault()

        console.log('submit');

    }

    render() {
        const { filterBy } = this.state
        const { compulsions } = this.state
        console.log('compulsions:', compulsions);


        return (
            <section>
                <form >
                    <label htmlFor="txt">
                        <input
                            type="text"
                            id="txt"
                            name="txt"
                            value={filterBy}
                            onChange={this.handleChange}

                        /></label>
                    <button onClick={this.onSubmit} >search</button>

                </form>

                <Autocomplete
                    // type="text"
                    // id="txt"
                    // name="txt"
                    value={filterBy}
                    onChange={() => this.submit(filterBy)}
                    disablePortal
                    // id="combo-box-demo"
                    options={compulsions}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />

            </section>
        )
    }

}