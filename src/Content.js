import React from 'react'
import CoffeeCard from './CoffeeCard'
import { Grid } from '@material-ui/core'
import coffeeMakerList from './constants'

const Content = () => {

    const getCoffeMakerCard = (coffeeMakerObj) => {
        // const { title, price, description } = coffeeMakerObj    
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCard { ...coffeeMakerObj } />
            </Grid>

        )
    }
    return (
        <Grid container spacing={4}>
               {coffeeMakerList.map(c => getCoffeMakerCard(c))}
        </Grid>
    )
}

export default Content
