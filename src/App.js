import {connect} from 'react-redux';
import MyComponent from './myComponent';

function mapStateToProps(state,ownProps) {
    console.log(state)
    console.log(ownProps)
    return {text: state.text, name: state.name}
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (e) => {
            console.log(dispatch)
            console.log(e)
            dispatch({type: 'change', payload: e})
        }

    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyComponent);

export default App;
