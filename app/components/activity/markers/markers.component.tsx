import * as React from 'react';

import './markers.component.less';

export class Markers extends React.Component {

    state: {
        selectedOption: string
    };
    props: {
        setSelectedOption: Function,
        clearMarkers: Function,
        validateMarkers: Function,
        activityDone: boolean
    };

    constructor(props: any) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleMarkerClearance = this.handleMarkerClearance.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    componentWillMount() {
        this.setState({
            selectedOption: 'word-highlight',
            activityDone: false
        });
    }

    handleOptionChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            selectedOption: (event.target as HTMLInputElement).value
        });
        this.props.setSelectedOption((event.target as HTMLInputElement).value);
    }

    handleMarkerClearance() {
        this.props.clearMarkers();
    }

    handleValidation() {
        this.props.validateMarkers();
    }

    render() {
        return (
            <div className="master-marker-container">
                <div className="markers-container">
                    <label htmlFor="word-highlight">
                        <input type="radio" className="marker" value="word-highlight" id="word-highlight" checked={this.state.selectedOption === 'word-highlight'} onChange={this.handleOptionChange} disabled={this.props.activityDone}/>
                        Word Highlight
                </label>
                    <label htmlFor="word-underline">
                        <input type="radio" className="marker" value="word-underline" id="word-underline" checked={this.state.selectedOption === 'word-underline'} onChange={this.handleOptionChange} disabled={this.props.activityDone}/>
                        Word Underline
                </label>
                    <label htmlFor="letter-highlight">
                        <input type="radio" className="marker" value="letter-highlight" id="letter-highlight" checked={this.state.selectedOption === 'letter-highlight'} onChange={this.handleOptionChange} disabled={this.props.activityDone}/>
                        Letter Highlight
                </label>
                    <label htmlFor="letter-divide">
                        <input type="radio" className="marker" value="letter-divide" id="letter-divide" checked={this.state.selectedOption === 'letter-divide'} onChange={this.handleOptionChange} disabled={this.props.activityDone}/>
                        Letter Divide
                </label>
                    <label htmlFor="eraser">
                        <input type="radio" className="marker" value="eraser" id="eraser" checked={this.state.selectedOption === 'eraser'} onChange={this.handleOptionChange} disabled={this.props.activityDone}/>
                        Eraser
                </label>
                </div>
                <div className="validators-container">
                    <button className="reset" onClick={this.handleMarkerClearance} disabled={this.props.activityDone}>Reset</button>
                    <button className="ok" onClick={this.handleValidation} disabled={this.props.activityDone}>OK</button>
                </div>
            </div>
        );
    }
}