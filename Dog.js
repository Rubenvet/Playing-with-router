import React, { Component } from 'react';

class Dog extends Component {
    componentDidMount() {
        console.log("Dog did mount");
    }

    componentWillUnmount() {
        console.log("Dog will unmount");
    }

    render() {
        console.log("Render!");
        return (
            <div>
                <h1>Dog component</h1>
                <h3>This dog is named: {this.props.name}</h3>
                <img src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1
                &ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' />
            </div>
        )
    }
}

export default Dog;
