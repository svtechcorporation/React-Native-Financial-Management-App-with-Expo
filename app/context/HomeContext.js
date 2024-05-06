
import React, { Component, createContext } from 'react'


export const HomeContext = createContext();


export class  HomeProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                name: "Ferguson"
            },
        }
    }

    render(){
        const {user} = this.state;
        return (
            <HomeContext.Provider value={{user}} >
                {this.props.children}
            </HomeContext.Provider>
        )
    }
}