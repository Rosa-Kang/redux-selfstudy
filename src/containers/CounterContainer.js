import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        '#c4b5f0',
        '#c6e2ff',
        '#fff2a7',
        '#cbfff8',
        '#ffcbd2',
        '#ffdecb',
        '#ffcbd2',
        '#c6e2ff',
        '#31dcbd',
        '#a18f6d',
        '#a8842e',
        '#7e6f50'
    ];

    const random = Math.floor(Math.random() *13); // 0 ~ 12까지 랜덤숫자
    return colors[random];
}

//connect 함수를 사용하여 컴포넌트를 스토어에 연결. connect함수에 들어가는 3가이 파라미터 : connect([mapStateToProps], [mapDispatchToProps], [mergeProps])
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;