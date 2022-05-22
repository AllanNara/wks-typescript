import React from 'react';
import {connect} from 'react-redux';
import { User, fetchUsers } from '../src/redux/actions';
import { StoreState } from '../src/redux/reducers';

interface AppProps {
    users: User[];
    fetchUsers(): any;
}

function App(props: AppProps): JSX.Element {
    return (
        <div>
            <button onClick={props.fetchUsers}>FETCH USERS!</button>
            {props.users.map((user: User) => {
                return (
                    <div>
                        {user.id} {user.name}
                    </div>
                );
            })}
        </div>
    )
}

const mapStateToProps = (state: StoreState): {users: User[]} => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(App);


// function App({title}: AppProps): JSX.Element {
//     const [counter, setCounter] = React.useState(0);

//     return (
//         <div>
//             <h3>Henry Workshop - {title}</h3>
//             <hr></hr>
//             <button onClick={() => setCounter(counter + 1)}>Increment</button>
//             <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//             <br />
//             <span>{counter}</span>
//         </div>
//     );
// }

// class App extends React.Component<AppProps, AppState> {
//     constructor(props: AppProps) {
//         super(props);
//         this.state = {
//             counter: 0
//         };
//     }

//     onIncrement = (): void => {
//         this.setState({counter: this.state.counter + 1});
//     };

//     onDecrement = (): void => {
//         this.setState({counter: this.state.counter - 1});
//     };

//     render() {
//         return (
//             <div>
//                 <h3>Henry Workshop - {this.props.title}</h3>
//                 <hr />
//                 <button onClick={this.onIncrement}>Increment</button>
//                 <button onClick={this.onDecrement}>Decrement</button>
//                 <br />
//                 <span>{this.state.counter}</span>
//             </div>
//         )
//     }
// }

// interface AppProps {
//     title: string
// }

// interface AppState {
//     counter: number
// }