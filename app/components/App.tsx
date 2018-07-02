import * as React from 'react';

import './app.less';
import { Activity } from './activity/activity.component';
import { Navigation } from './navigation/navigation.component';

export class App extends React.Component {

    title: string = 'Grammar: Common and proper nouns';

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
                <Activity />
                <Navigation />
            </div>
        );
    }
}