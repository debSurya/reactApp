import * as React from 'react';
import './activity.component.less';

export class Activity extends React.Component {

    question: string = 'Highlight the proper nouns';

    render() {
        return (
            <div className="activity-container">
                <h3 className="question">
                    {this.question}
                </h3>
                <div className="statements-container">

                </div>
            </div>
        )
    }
}