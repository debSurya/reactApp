import * as React from 'react';

import './activity.component.less';
import Constants from '../../constants';

export class Activity extends React.Component {

    state: {
        currentPageIdx: number,
        sentences: string[]
    };
    question: string = 'Highlight the proper nouns';
    questionSets: {}[] = Constants.questionSets;

    constructor(props: any) {
        super(props);

        this.state = {
            currentPageIdx: 0,
            sentences: []
        };
    }

    componentWillMount() {
        this.setState((state: {
            currentPageIdx: number
        }) => {
            sentences: this.questionSets[state.currentPageIdx]
        });
    }

    render() {
        return (
            <div className="activity-container">
                <h3 className="question">
                    {this.question}
                </h3>
                <div className="statements-container">
                    {
                        this.state.sentences.map((item, index) => {
                            return <p className="sentence" key={"moon" + index}>{item}</p>
                        })
                    }
                </div>
            </div>
        )
    }
}