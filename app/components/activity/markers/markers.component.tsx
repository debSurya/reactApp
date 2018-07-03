import * as React from 'react';

import './markers.component.less';

export class Markers extends React.Component {

    state: {
        selectedOption: string
    };
    props: {
        setSelectedOption: Function
    };

    constructor(props: any) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentWillMount() {
        this.setState({
            selectedOption: 'word-highlight'
        });
    }

    handleOptionChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            selectedOption: (event.target as HTMLInputElement).value
        });
        this.props.setSelectedOption((event.target as HTMLInputElement).value);
    }

    render() {
        return (
            <div className="markers-container">
                <label htmlFor="word-highlight">
                    <input type="radio" className="marker" value="word-highlight" id="word-highlight" checked={this.state.selectedOption === 'word-highlight'} onChange={this.handleOptionChange} />
                    Word Highlight
                </label>
                <label htmlFor="word-underline">
                    <input type="radio" className="marker" value="word-underline" id="word-underline" checked={this.state.selectedOption === 'word-underline'} onChange={this.handleOptionChange} />
                    Word Underline
                </label>
                <label htmlFor="letter-highlight">
                    <input type="radio" className="marker" value="letter-highlight" id="letter-highlight" checked={this.state.selectedOption === 'letter-highlight'} onChange={this.handleOptionChange} />
                    Letter Highlight
                </label>
                <label htmlFor="letter-divide">
                    <input type="radio" className="marker" value="letter-divide" id="letter-divide" checked={this.state.selectedOption === 'letter-divide'} onChange={this.handleOptionChange} />
                    Letter Divide
                </label>
                <label htmlFor="eraser">
                    <input type="radio" className="marker" value="eraser" id="eraser" checked={this.state.selectedOption === 'eraser'} onChange={this.handleOptionChange} />
                    Eraser
                </label>
            </div>
        );
    }
}