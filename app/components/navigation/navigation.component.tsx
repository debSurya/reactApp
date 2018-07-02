import * as React from 'react';

import Constants from '../../constants';
import './navigation.component.less';

export class Navigation extends React.Component {

    questionSets: {}[] = Constants.questionSets;

    render() {
        return (
            <div className="navigation-container">
                <div className="pagination-container">
                    <button className="prev">Prev</button>
                    <div className="page-holders">
                        {
                            this.questionSets.map((item, index) => {
                                return <button className="page" key={"moon" + index}></button>;
                            })
                        }
                    </div>
                    <button className="next">Next</button>
                </div>
            </div>
        )
    }
}