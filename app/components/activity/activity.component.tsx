import * as React from 'react';

import './activity.component.less';
import Constants from '../../constants';
import { Markers } from './markers/markers.component';

export class Activity extends React.Component {

    state: {
        sentences: string[],
        selectedOption: string,
        markerStates: any[],
        correctMarkers: {
            type: string,
            idx: any[]
        }[]
    };
    props: {
        questionSets: {
            sentences: string[],
            correctMarkers: {
                type: string,
                idx: any[]
            }[]
        }[],
        currentPageIdx: number
    };
    question: string = 'Highlight the proper nouns';

    constructor(props: any) {
        super(props);
        this.state = {
            sentences: this.props.questionSets[this.props.currentPageIdx].sentences,
            selectedOption: 'word-highlight',
            markerStates: this.resetMarkers(this.props.questionSets[this.props.currentPageIdx].sentences),
            correctMarkers: this.props.questionSets[this.props.currentPageIdx].correctMarkers
        };
        this.setSelectedOption = this.setSelectedOption.bind(this);
        this.markWord = this.markWord.bind(this);
        this.markChar = this.markChar.bind(this);
        this.validateMarkers = this.validateMarkers.bind(this);
    }

    componentWillReceiveProps(newProps: {
        currentPageIdx: number,
        questionSets: {
            sentences: string[]
        }[]
    }) {
        this.setState({
            sentences: newProps.questionSets[newProps.currentPageIdx].sentences,
            markerStates: this.resetMarkers(newProps.questionSets[newProps.currentPageIdx].sentences)
        });
    }

    resetMarkers(sentences: string[]) {
        let structure: any[][] = [];
        sentences.map((item: string) => {
            structure.push([]);
        });
        return structure;
    }

    setSelectedOption(value: string) {
        this.setState({
            selectedOption: value
        });
    }

    findExistingMarker(currentStatementStates: any, currentDOM: HTMLSpanElement, markerToSet?: string) {
        return currentStatementStates.findIndex((obj: {
            wordIdx: string,
            charIdx: string,
            type: string
        }) => {
            if (typeof obj.charIdx !== 'undefined') {
                return (obj.wordIdx === currentDOM.parentElement.getAttribute('word-index') && obj.charIdx === currentDOM.getAttribute('char-index') && (typeof markerToSet !== 'undefined' ? obj.type === markerToSet : true));
            } else {
                return (obj.wordIdx === currentDOM.getAttribute('word-index') && (typeof markerToSet !== 'undefined' ? obj.type === markerToSet : true));
            }
        });
    }

    markWord(currentDOM: HTMLSpanElement) {
        let markerToSet = '';
        if (this.state.selectedOption === 'word-highlight') {
            markerToSet = 'highlighted';
        } else if (this.state.selectedOption === 'word-underline') {
            markerToSet = 'underlined';
        }
        this.setState((state: any) => {
            let currentStamentStates = state.markerStates[parseInt(currentDOM.parentElement.getAttribute('statement-index'))];
            if (this.findExistingMarker(currentStamentStates, currentDOM, markerToSet) === -1) {
                currentStamentStates.push({
                    type: markerToSet,
                    wordIdx: currentDOM.getAttribute('word-index')
                });
                return {
                    markerStates: state.markerStates
                };
            }
        });
    }

    markChar(event: React.MouseEvent<HTMLSpanElement>) {
        event.stopPropagation();
        let markerToSet = '',
            currentDOM = event.target as HTMLSpanElement;
        if (this.state.selectedOption === 'eraser') {
            this.eraseMark(currentDOM, this.state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))]);
            return;
        } else if (this.state.selectedOption === 'letter-highlight') {
            markerToSet = 'colored';
        } else if (this.state.selectedOption === 'letter-divide') {
            markerToSet = 'divider';
        }
        markerToSet ? this.setState((state: any) => {
            let currentStamentStates = state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))];
            if (this.findExistingMarker(currentStamentStates, currentDOM, markerToSet) === -1) {
                currentStamentStates.push({
                    type: markerToSet,
                    wordIdx: currentDOM.parentElement.getAttribute('word-index'),
                    charIdx: currentDOM.getAttribute('char-index')
                });
                return {
                    markerStates: state.markerStates
                };
            }
        }) : this.markWord(currentDOM.parentElement);
    }

    eraseMark(currentDOM: HTMLSpanElement, currentElementStates: any[]) {
        this.setState((state: any) => {
            let isFound = false;
            const currentElementStates = state.markerStates[parseInt(currentDOM.parentElement.parentElement.getAttribute('statement-index'))];
            currentElementStates.map((obj: any, idx: number) => {
                if (typeof obj.charIdx !== 'undefined') {
                    if (obj.charIdx === currentDOM.getAttribute('char-index') && obj.wordIdx === currentDOM.parentElement.getAttribute('word-index')) {
                        currentElementStates.splice(idx, 1);
                        isFound = true;
                    }
                } else if (obj.wordIdx === currentDOM.parentElement.getAttribute('word-index')) {
                    currentElementStates.splice(idx, 1);
                    isFound = true;
                }
            });
            if (isFound) {
                return {
                    markerStates: state.markerStates
                };
            }
        });
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

    validateMarkers() {
        let incorrect = () => {
            console.log('incorrect');
        };

        this.state.markerStates.map((sentence: {}[], idx: number) => {
            let markerCount = sentence.length;
            sentence.map((obj: {
                type: string,
                wordIdx: string,
                charIdx: string
            }) => {
                debugger;
                if (typeof obj.charIdx === 'undefined') {
                    if (obj.type === 'highlighted') {
                        if (this.state.correctMarkers[0].idx[idx].indexOf(parseInt(obj.wordIdx)) === -1) {
                            incorrect();
                        }
                    } else if (obj.type === 'underlined') {
                        if (this.state.correctMarkers[1].idx[idx].indexOf(parseInt(obj.wordIdx)) === -1) {
                            incorrect();
                        }
                    }
                } else {
                    if (obj.type === 'divider') {
                        console.log(this.state.correctMarkers[2].idx[idx]);
                        if (this.state.correctMarkers[2].idx[idx].findIndex((item: {
                            wordIdx: number,
                            charIdx: number
                        }) => {
                            return (item.wordIdx === parseInt(obj.wordIdx) && (item.charIdx === parseInt(obj.charIdx)));
                        }) === -1) {
                            incorrect();
                        }
                    } else if (obj.type === 'colored') {
                        if (this.state.correctMarkers[3].idx[idx].indexOf(parseInt(obj.wordIdx)) === -1) {
                            incorrect();
                        }
                    }
                }
            });
        });
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
                                        let classNames = `${item !== ' ' ? 'character' : ''}${this.state.selectedOption === 'letter-highlight' ? ' highlight' : this.state.selectedOption === 'letter-divide' ? ' divide' : ''}${idx3 === letterCount - 1 ? ' last' : ''}${this.setMarker(idx1, idx2, idx3)}`;
                                        return <span className={classNames} key={'moon' + idx3} onClick={this.markChar} char-index={idx3}>{item}</span>;
                                    })}</span>
                                    {idx2 !== wordCount - 1 ? <span>&nbsp;</span> : ''}
                                </React.Fragment>;
                            })}</p>;
                        })
                    }
                </div>
                <Markers validateMarkers={this.validateMarkers} setSelectedOption={this.setSelectedOption} clearMarkers={(() => {
                    this.setState({
                        markerStates: this.resetMarkers(this.props.questionSets[this.props.currentPageIdx].sentences)
                    });
                })} />
            </div>
        );
    }
}