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
    readNavState() {
        return (
            this.state.isNavigating ? 'active' : null
            )
    }
    readLoadingState() {
        return (
            this.state.isLoading ? 'active' : null
        )
    }
    render() {
        console.log(this.state)
        return (
            <main>
                {/* <Stage1 /> */}
                <div className='button-holder'>
                    <button onClick={this.handleNavStatusToggle} className={this.readNavState()} type='button'> Nav Status </button>
                    <button onClick={this.handleLoadingStatusToggle} className={this.readLoadingState()} type='button'> Loading Status </button>
                </div>
                <Outline isNavigating={this.state.isNavigating} isLoading={this.state.isLoading} />
            </main>
        )
    }
}

function Comparison() {
    return (
        <div className='app-holder'>
            <AppShell />
            <br />
            <AppShell />
        </div>
    )
}

ReactDOM.render(<Comparison />, document.getElementById('app'))

console.log('app started')