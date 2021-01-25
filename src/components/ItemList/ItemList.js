import React from 'react';
import axios from 'axios';

import Tile1 from '../../components/headers/Tile1';
import Grid from '@material-ui/core/Grid';

export default class ItemList extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        const requestUrl = '/getitems?category='+this.props.category;
        axios.get(requestUrl)
            .then(res => {
                const items = res.data;
                this.setState({items});
            },
            () => {
                const items = [{link:"https://db.zmitac.aei.polsl.pl", user:'dadada', userscore:2}, 
                                    {link:"https://www.youtube.com/watch?v=GGUF0gqQnek", user:'bobo', userscore:50}, 
                                    {link:"https://www.reddit.com/r/kde/comments/f8dud0/how_to_disable_copy_on_select/", user:'dsffs', userscore:66},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'xddd', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'pipo', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10},
                                    {link:"https://db.zmitac.aei.polsl.pl", user:'lol', userscore:10}];
                this.setState({items});
            })
    }

    render() {
        return (
            <Grid container spacing={0.2} justify="center">
            {this.state.items.map(item => 
                <Grid item xs={2} >
                    <a href={item.link}>
                        <Tile1 content={ { 'name':item.user, 'amount':item.userscore } } />
                    </a>
                </Grid>
                )}
            </Grid>
        )
    }
}