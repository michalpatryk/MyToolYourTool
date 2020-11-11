import React from 'react';
import axios from 'axios';

import Tile1 from '../../components/headers/Tile1';
import Grid from '@material-ui/core/Grid';

export default class CategoriesList extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        axios.get('/categories')
            .then(res => {
                const categories = res.data;
                this.setState({categories});
            },
            () => {
                const categories = [{name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10}, 
                                    {name:"test2", link:"https://www.youtube.com/watch?v=GGUF0gqQnek", count:11}, 
                                    {name:"test3", link:"https://www.reddit.com/r/kde/comments/f8dud0/how_to_disable_copy_on_select/", count:12},
                                    {name:"test4", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test5", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10},
                                    {name:"test1", link:"https://db.zmitac.aei.polsl.pl", count:10}];
                this.setState({categories});
            })
    }

    render() {
        return (
            <Grid container spacing={0.2} justify="center">
            {this.state.categories.map(category => 
                <Grid item xs={2} >
                    <a href={category.link}>
                        <Tile1 content={ { 'name':category.name,'amount':category.count, } } />
                    </a>
                </Grid>
                )}
            </Grid>
        )
    }
}