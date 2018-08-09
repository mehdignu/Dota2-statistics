

class Communicator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {message: this.props.message};
    }

    resetComm() {
        this.setState({message: ''});
    }

    updateComm(message) {
        this.setState({
            message
        });
    }

    render() {
        const {message} = this.state;
        return (
            <div>
                <input className='App' onChange={event => this.updateComm(event.target.value)}
                       value={message}/>
                <p>Scotty: {message}</p>
                <button
                    onClick={() => this.resetComm()}>
                    Clear
                </button>
            </div>
        );
    }
}

const initMessage = "They called the Enterprise a garbage scow!";

ReactDOM.render(
    <Communicator message={initMessage}/>,
    document.getElementById('appMount')
);
