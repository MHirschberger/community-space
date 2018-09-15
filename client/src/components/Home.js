import React, { Component } from 'react';
import DiscussionsContainer from '../containers/DiscussionsContainer';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home-title'>
                    <h1>All Discussions</h1>
                    <p>Click on a Discussion to see its comments or to create a new comment!</p>
                </div>
                <DiscussionsContainer />
            </div>
        );
    }
}