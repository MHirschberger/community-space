import React, { Component } from 'react';
import DiscussionsContainer from '../containers/DiscussionsContainer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Current Discussions</h1>
                <DiscussionsContainer />
            </div>
        );
    }
}