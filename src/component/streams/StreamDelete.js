import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../action'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const { id } = this.props.match.params;
        return <>
            <Link
                className="ui button negative"
                onClick={() => { this.props.deleteStream(id) }}
            >Delete</Link>
            <Link
                className="ui button"
                to='/'
            >Cancle</Link>
        </>

    }

    renderContent = () => {
        if (!this.props.stream)
            return 'Are you sure you want to delete the stream?'
        return `Are you sure you waant to delete the stream with title: ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

