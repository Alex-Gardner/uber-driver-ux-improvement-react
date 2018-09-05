import React from 'react'
import ReactDOM from 'react-dom'
import Stage1 from './stage1.js'
import Outline from './phone-container.js'

class AppShell extends React.Component {
    // initialize states
    constructor(props) {
        super(props);
        this.handleNavStatusToggle = this.handleNavStatusToggle.bind(this);
        this.handleLoadingStatusToggle = this.handleLoadingStatusToggle.bind(this);
        this.state = {
            isLoading: true,
            isNavigating: false,
        }
    }
    handleNavStatusToggle()  {
        this.setState({
            isLoading: this.state.isLoading,
            isNavigating: !this.state.isNavigating,
        })
    }
    handleLoadingStatusToggle() {
        this.setState({
            isLoading: !this.state.isLoading,
            isNavigating: this.state.isNavigating,
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <main>
                <h1>hey</h1>
                <Stage1 />
                <button onClick={this.handleNavStatusToggle}> Nav Status </button>
                <button onClick={this.handleLoadingStatusToggle}> Loading Status </button>
                <Outline isNavigating={this.state.isNavigating} isLoading={this.state.isLoading} />
                {/* <Outline /> */}
            </main>
        )
    }
}

ReactDOM.render(<AppShell />, document.getElementById('app'))

console.log('app started')