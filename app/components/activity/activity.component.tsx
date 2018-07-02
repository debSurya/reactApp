import * as React from 'react';

import './activity.component.less';
import Constants from '../../constants';

export class Activity extends React.Component {

    state: {
        sentences: string[]
    };
    props: {
        questionSets: any[],
        currentPageIdx: number
    };
    question: string = 'Highlight the proper nouns';

    constructor(props: any) {
        super(props);

        this.state = {
            sentences: this.props.questionSets[this.props.currentPageIdx].sentences
        };
    }

    componentWillReceiveProps(newProps: {
        questionSets: {
            sentences: string[]
        }[]
    }) {
        this.setState({
            sentences: newProps.questionSets[this.props.currentPageIdx].sentences
        })
    }

    render() {
        return (
            <div className="activity-container">
                <h2 className="question">
                    {this.question}
                </h2>
                <div className="statements-container">
                    {
                        this.state.sentences.map((item: string, index: number) => {
                            return <p className="sentence" key={"moon" + index}>{item}</p>;
                        })
                    }
                </div>
            </div>
        )
    }
}