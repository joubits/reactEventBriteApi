import React, { Component } from 'react';
import axios from 'axios'; 

// Create the context
const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
    token = 'XU6RSLPKAQTELVZNGYVK';

    componentDidMount() {
        this.getCategories();
    }
    // Fetch categories and set in the state
    getCategories = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
        let categories = await axios.get(url);

        //console.log(categories.data.categories);
        this.setState({
            categories: categories.data.categories
        });
    }

    state = {
        categories: []
    }
    render() {
        return (
            // Send the context through Provider
            <CategoriesContext.Provider
                value={{
                    categories: this.state.categories
                }}>

                { this.props.children }
            </CategoriesContext.Provider>
        );
    }
}

export default CategoriesProvider;
