import * as React from 'react';

import './activity.component.less';
import Constants from '../../constants';
import { Markers } from './markers/markers.component';

export class Activity extends React.Component {

    state: {
        sentences: string[],
        selectedOption: string,
        markerStates: any[]
    };
    props: {
        questionSets: {
            sentences: string[]
        }[],
        currentPageIdx: number
    };
    question: string = 'Highlight the proper nouns';

    constructor(props: any) {
        super(props);
        this.state = {
            sentences: this.props.questionSets[this.props.currentPageIdx].sentences,
            selectedOption: 'word-highlight',
            markerStates: (() => {
                let structure: any[][] = [];
                this.props.questionSets[this.props.currentPageIdx].sentences.map((item: string) => {
                    structure.push([]);
                });
                return structure;
            })()
        };
        this.setSelectedOption = this.setSelectedOption.bind(this);
        this.markWord = this.markWord.bind(this);
        this.markChar = this.markChar.bind(this);
    }

    componentWillReceiveProps(newProps: {
        currentPageIdx: number,
        questionSets: {
            sentences: string[]
        }[]
    }) {
        this.setState({
            sentences: newProps.questionSets[newProps.currentPageIdx].sentences
        });
    }

    setSelectedOption(value: string) {
        this.setState({
            selectedOption: value
        });
    }

    markWord(element: HTMLSpanElement) {
        let markerToSet = '';
        if (this.state.selectedOption === 'word-highlight') {
            markerToSet = 'highlighted';
        } else if (this.state.selectedOption === 'word-underline') {
            markerToSet = 'underlined';
        }
        this.setState((state: any) => {
            state.markerStates[parseInt(element.parentElement.getAttribute('statement-index'))].push({
                type: markerToSet,
                wordIdx: element.getAttribute('word-index')
            });
            return {
                markerStates: state.markerStates
            };
        });
    }

    markChar(event: React.MouseEvent<HTMLSpanElement>) {
        event.stopPropagation();
        let markerToSet = '';
        if (this.state.selectedOption === 'letter-highlight') {
            markerToSet = 'colored';
        } else if (this.state.selectedOption === 'letter-divide') {
            markerToSet = 'divider';
        }
        let currentDOM = event.target as HTMLSpanElement;
        markerToSet ? this.setState((state: any) => {
            state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))].push({
                type: markerToSet,
                wordIdx: currentDOM.parentElement.getAttribute('word-index'),
                charIdx: currentDOM.getAttribute('char-index')
            });
            return {
                markerStates: state.markerStates
            };
        }) : this.markWord(currentDOM.parentElement);
    }

    setMarker(statementIdx: number, wordIdx: number, charIdx?: number) {
        let classToAdd = '',
            sentenceMarkers = this.state.markerStates[statementIdx];
        if (sentenceMarkers.length) {
            if (typeof charIdx === 'undefined') {
                sentenceMarkers.find((obj: any) => {
                    classToAdd += parseInt(obj.wordIdx) === wordIdx ? ' ' + obj.type : '';
                });
            } else {
                sentenceMarkers.find((obj: any) => {
                    classToAdd += (parseInt(obj.wordIdx) === wordIdx && parseInt(obj.charIdx) === charIdx) ? ' ' + obj.type : '';
                });
            }
        }
        return classToAdd;
    }

    render() {
        console.log(this.state.markerStates);
        return (
            <div className="activity-container">
                <h2 className="question">
                    {this.question}
                </h2>
                <div className="statements-container">
                    {
                        this.state.sentences.map((item: string, idx1: number) => {
                            let wordCount = item.split(' ').length;
                            return <p className="sentence" key={'moon' + idx1} statement-index={idx1}>{item.split(' ').map((item, idx2) => {
                                let letterCount = item.split('').length,
                                    selectedOptionClass = `word${this.state.selectedOption === 'word-highlight' ? ' highlight' : this.state.selectedOption === 'word-underline' ? ' underline' : ''}${this.setMarker(idx1, idx2)}`;
                                return <React.Fragment key={'moon2' + idx2}>
                                    <span className={selectedOptionClass} word-index={idx2}>{item.split('').map((item, idx3) => {
                                        let classNames = `${item !== ' ' ? 'character' : ''}${this.state.selectedOption === 'letter-highlight' ? ' highlight' : this.state.selectedOption === 'letter-divide' ? ' divide' : (this.state.selectedOption === 'word-highlight' || this.state.selectedOption === 'word-underline') ? ' block-events' : ''}${idx3 === letterCount - 1 ? ' last' : ''}${this.setMarker(idx1, idx2, idx3)}`;
                                        return <span className={classNames} key={'moon' + idx3} onClick={this.markChar} char-index={idx3}>{item}</span>;
                                    })}</span>
                                    {idx2 !== wordCount - 1 ? <span>&nbsp;</span> : ''}
                                </React.Fragment>;
                            })}</p>;
                        })
                    }
                </div>
                <Markers setSelectedOption={this.setSelectedOption} />
            </div>
        );
    }
}