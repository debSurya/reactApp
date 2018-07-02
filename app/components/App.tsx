import * as React from 'react';

import './app.less';
import Constants from '../constants';
import { Activity } from './activity/activity.component';
import { Navigation } from './navigation/navigation.component';

export class App extends React.Component {

    title: string = 'Grammar: Common and proper nouns';
    questionSets: any[] = Constants.questionSets;
    state: {
        currentPageIdx: number;
    };

    constructor(render: any) {
        super(render);

        this.state = {
            currentPageIdx: 0
        };

        this.setNavIdx = this.setNavIdx.bind(this);
    }

    setNavIdx(direction: string) {
        this.setState({
            currentPageIdx: direction === 'prev' ? this.state.currentPageIdx - 1 : this.state.currentPageIdx + 1
        });
    }

    render() {
        return (
            <div className="master-container">
                <div className="title-container">
                    <h2 className="title">{this.title}</h2>
                    <div className="buttons-container">
                        <button className="help">Help</button>
                        <button className="close">Close</button>
                    </div>
                </div>
                <Activity currentPageIdx={this.state.currentPageIdx} questionSets={this.questionSets} />
                <Navigation setNavIdx={this.setNavIdx} currentPageIdx={this.state.currentPageIdx} lastIdx={this.questionSets.length - 1} />
            </div>
        );
    }
}