import React from 'react';
import axiosAPI from '../../API/ourAPI/API'
import {Link} from 'react-router-dom';

import Tile1 from '../../components/headers/Tile1';
import Grid from '@material-ui/core/Grid';

export default class ItemList extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        const requestUrl = 'https://my-tool-your-tool-dev.herokuapp.com/categories/'+this.props.category;
        axiosAPI.get(requestUrl)
            .then(res => {
                const items = res.data;
                this.setState({items});
            },
            () => {
                const items = [{id:0, toolName:'dadada', toolQuality:2}, 
                                    {id:1, toolName:'bobo', toolQuality:50}, 
                                    {id:2, toolName:'dsffs', toolQuality:66},
                                    {id:3, toolName:'lol', toolQuality:10},
                                    {id:4, toolName:'xddd', toolQuality:10},
                                    {id:5, toolName:'pipo', toolQuality:10},
                                    {id:6, toolName:'lol', toolQuality:10},
                                    {id:7, toolName:'lol', toolQuality:10},
                                    {id:8, toolName:'lol', toolQuality:10},
                                    {id:9, toolName:'lol', toolQuality:10},
                                    {id:10, toolName:'lol', toolQuality:10},
                                    {id:11, toolName:'lol', toolQuality:10},
                                    {id:12, toolName:'lol', toolQuality:10},
                                    {id:13, toolName:'lol', toolQuality:10}];
                this.setState({items});
            })
    }

    render() {
        return (
            <Grid container spacing={0.2} justify="center">
            {this.state.items.map(item => 
                <Grid item xs={2} >
                    <Link to={'/offer?id='+item.id}>
                        <Tile1 content={ { 'name':item.toolName, 'amount':item.toolQuality } }/>
                    </Link>
                </Grid>
                )}
            </Grid>
        )
    }
}