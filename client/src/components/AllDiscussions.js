import React, { Component } from 'react';
import DiscussionsContainer from '../containers/DiscussionsContainer';

export default class AllDiscussions extends Component {
    render() {
        return (
            <div className='all-discussions'>
                <div className='all-discussions-title'>
                    <h1>All Discussions</h1>
                    <p>Click on a Discussion to see its comments or to create a new comment!</p>
                </div>
                <DiscussionsContainer />
            </div>
        );
    }
}