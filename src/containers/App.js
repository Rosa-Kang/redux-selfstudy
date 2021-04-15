import React, {Component} from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';
import getRandomColor from '../lib/getRandomColor';
import { connect } from 'react-redux';
import * as action from '../actions';
import '../styles/main.css';

class App extends Component {
    render() {
        const {onCreate, onRemove} = this.props;
        return (
            <div className="App">
                <Buttons
                onCreate={onCreate}
                onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate : () => dispatch(action.create(getRandomColor())),
    onRemove : () => dispatch(action.remove())
});

export default connect(null, mapToDispatch)(App);