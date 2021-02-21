import React from 'react';
import axiosAPI from '../../API/ourAPI/API'
import {Link} from "react-router-dom";

import Tile1 from '../../components/headers/Tile1';
import Grid from '@material-ui/core/Grid';

export default class CategoriesList extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        axiosAPI.get('https://my-tool-your-tool-dev.herokuapp.com/categories')
        //axiosAPI.get('https://my-tool-your-tool-dev.herokuapp.com/reservations')
            .then(res => {
                //console.log(categories)
                const categories = res.data;
                this.setState({categories});
                
            },
            () => {
                const categories = [{name:"test1", id:0, count:10}, 
                                    {name:"test2", id:1, count:11}, 
                                    {name:"test3", id:2, count:12},
                                    {name:"test4", id:3, count:10},
                                    {name:"test5", id:4, count:10},
                                    {name:"test", id:5, count:10},
                                    {name:"test1", id:6, count:10},
                                    {name:"test1", id:7, count:10},
                                    {name:"test1", id:8, count:10},
                                    {name:"test1", id:9, count:10},
                                    {name:"test1", id:10, count:10},
                                    {name:"test1", id:11, count:10},
                                    {name:"test1", id:12, count:10},
                                    {name:"test1", id:13, count:10}];
                this.setState({categories});
                console.log(categories)
            })
    }

    render() {
        return (
            <Grid container spacing={0.2} justify="center">
            {this.state.categories.map(category => 
                <Grid item xs={2} >
                    <Link to={'/items?category='+category.id}>
                        <Tile1 content={ { 'name':category.name,'amount':category.count } } />
                    </Link>
                </Grid>
                )}
            </Grid>
        )
    }
}