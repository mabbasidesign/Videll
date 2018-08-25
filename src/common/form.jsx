import React, { Component } from 'react';
import joi from 'joi-browser';
import Input from "./input";
import Select from "./Select";

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     }

     validate = () => {
        const options = { abortErly: false }
        const {error} = joi.validate(this.state.data, this.schema, );

        if(!error) return null;

        const errors = {};
        for(let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const {error} = joi.validate(obj, schema);
        return error ? error.details[0].message: null;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if(errors) return;
        
        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
            else delete errors[input.name];
        
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data, errors });
    }

    renderButton(label) {
        return <button disabled={this.validate()} type="submit" className="btn btn-primary">{label}</button>
    }

    renderSelect(name, label, options){
        const {data, errors} = this.state;

        return (
            <Select 
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderInput(name, label, type= "text") {
        const { data,errors } = this.state;

        return(
            <Input
            name={name}
            label={label}
            error={errors[name]}
            type={type}
            value={data[name]}
            onChange={this.handleChange}
        />
        )
    }
}
 
export default Form;