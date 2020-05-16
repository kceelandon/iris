import Button from '@material-ui/core/Button';
import React, {Component} from 'react';

class ClassButton extends Component {
    render() {
        return (
            <div className="classButton">
                <Button onClick={this.props.addTrip}>
                    {this.props.value}
                </Button>
            </div>
        );
    }
}

export default ClassButton;