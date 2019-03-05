import React, { Component } from 'react';

import Count from './components/basic-hooks';
import { NumberStatus, RandomNumber } from './components/custom-hooks';

class App extends Component {
    //Do stuff

    //Render
    render() {
        return (
            <React.Fragment>
                <Count />
                <NumberStatus />
                <RandomNumber />
            </React.Fragment>
        );
    }
}

export default App;