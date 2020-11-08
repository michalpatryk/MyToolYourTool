import React from 'react';
import axios from 'axios';

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
                                    {name:"test3", link:"https://www.reddit.com/r/kde/comments/f8dud0/how_to_disable_copy_on_select/", count:12}];
                this.setState({categories});
            })
    }

    render() {
        return (
            <ul>
                {this.state.categories.map(category => <li><a href={category.link}>{category.name} ({category.count})</a></li>)}
            </ul>
        )
    }
}