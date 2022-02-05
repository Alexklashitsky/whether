

import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { submitSearch } from '../pages/weather'
const API = 'yQdQ6vhYlcGgDHKkCHVzHbIKguqkZiZK'
const URL = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete'

export function Test({ submitSearch }) {
    const [loc, setLoc] = useState('')

    const Form = () => {
        const [loc, setLoc] = useState('')
        const onSubmit = (e) => {
            e.preventDefault()
            if (!loc || loc === '') return

            console.log('submit');

        }


    }


    const onSubmit = (e) => {
        e.preventDefault()
        console.log('loc:', loc);
        if (!loc || loc === '') return
        submitSearch(loc)


        console.log('submit');

    }




    return (
        <section>
            <form >
                <label htmlFor="txt">
                    <input
                        type="text"
                        id="txt"
                        name="txt"
                        value={loc}
                        onChange={e => setLoc(e.target.value)}
                    // onChange={this.handleChange}

                    /></label>
                <button onClick={onSubmit} >search</button>

            </form>



        </section>
    )
}


