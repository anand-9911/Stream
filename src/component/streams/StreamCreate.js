import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

    renderError = ({ touched, error }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderField = ({ label, type, input, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <div>
                    <input {...input} type={type} autoComplete="off" />
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="title"
                    type="text"
                    component={this.renderField}
                    label="Enter the stream title" />
                <Field name="description"
                    type="text"
                    component={this.renderField}
                    label="Enter the Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title)
        errors.title = 'Enter the name!!'
    if (!formValues.description)
        errors.description = 'Enter the description !!'
    return errors
}


export default reduxForm({
    form: 'StreamCreate',// a unique identifier for this form
    validate// used for validations
})(StreamCreate);