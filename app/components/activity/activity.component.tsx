import * as React from 'react';

import './activity.component.less';
import Constants from '../../constants';
import { Markers } from './markers/markers.component';

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
        currentPageIdx: number,
        questionSets: {
            sentences: string[]
        }[]
    }) {
        console.log('moon');
        this.setState({
            sentences: newProps.questionSets[newProps.currentPageIdx].sentences
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
                        this.state.sentences.map((item: string, idx: number) => {
                            let wordCount = item.split(' ').length;
                            return <p className="sentence" key={'moon' + idx}>{item.split(' ').map((item, idx) => {
                                let letterCount = item.split('').length;
                                return <React.Fragment key={'moon2' + idx}>
                                    <span className="word" key={'moon' + idx}>{item.split('').map((item, idx) => {
                                        let classNames = `${item !== ' ' ? 'character divide' : ''}${idx === letterCount - 1 ? ' last' : ''}`;
                                        return <span className={classNames} key={'moon' + idx}>{item}</span>;
                                    })}</span>
                                    {idx !== wordCount - 1 ? <span>&nbsp;</span> : ''}
                                </React.Fragment>;
                            })}</p>;
                        })
                    }
                </div>
                <Markers />
            </div>
        )
    }
}