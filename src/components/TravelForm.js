import React, { Component } from 'react';

class TravelForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            gender: '',
            location: '',
            restrictions: {
                vegetarian: {
                    status: false,
                    label: '',
                },
                kosher: {
                    status: false,
                    label: '',
                },
                lactoseFree: {
                    status: false,
                    label: '',
                },
            }
        };
    }

    handleChange = (event) =>  {
        const {name, value, type, checked} = event.target;

        if (type === 'checkbox') {
            let param = name.split('.');
            let key = param[0];
            let restrictions = this.state[key];
            let restrictionType = param[1];
            restrictions[restrictionType].status = checked;
            restrictions[restrictionType].label = value;

            this.setState((prevState) => ({
                ...prevState,
                [key]: restrictions
            }));
        } else {
            this.setState( {
                [name]: value
            });
        }
    };

    showDietaryRestrictions = () => {
        let output = '';
        for (const property in this.state.restrictions) {
            if (this.state.restrictions[property].status) {
                output += this.state.restrictions[property].label + ', ';
            }
        }

        return output.slice(0, -2);
    };

    render () {
        return <div className="container">
            <form>
                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               id="firstName"
                               name="firstName"
                               value={this.state.firstName}
                               placeholder="Enter first name"
                               onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               id="lastName"
                               name="lastName"
                               value={this.state.lastName}
                               placeholder="Enter last name"
                               onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                        <input type="number"
                               className="form-control"
                               id="age"
                               name="age"
                               value={this.state.age}
                               placeholder="0"
                               onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                    <div className="form-check form-check-inline" style={{marginLeft: "20px"}}>
                        <input type="radio"
                               className="form-check-input"
                               name="gender"
                               id="male"
                               value="male"
                               onChange={this.handleChange} />
                            <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio"
                               className="form-check-input"
                               name="gender"
                               id="female"
                               value="female"
                               onChange={this.handleChange} />
                            <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
                    <div className="col-sm-10">
                        <select className="browser-default custom-select custom-select-m"
                                name="location"
                                value={this.state.location}
                                onChange={this.handleChange}>
                            <option value="0">Please select</option>
                            <option value="France">France</option>
                            <option value="Spain">Spain</option>
                            <option value="Italy">Italy</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label">Dietary restrictions</label>
                    <div className="form-check" style={{marginLeft: "20px"}}>
                        <input type="checkbox"
                               className="form-check-input"
                               value="Vegetarian"
                               name="restrictions.vegetarian"
                               checked={this.state.restrictions.vegetarian.status}
                               onChange={this.handleChange} />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Vegetarian
                            </label>
                    </div>
                    <div className="form-check" style={{marginLeft: "20px"}}>
                        <input type="checkbox"
                               className="form-check-input"
                               value="Kosher"
                               id="defaultCheck1"
                               name="restrictions.kosher"
                               checked={this.state.restrictions.kosher.status}
                               onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Kosher
                        </label>
                    </div>
                    <div className="form-check" style={{marginLeft: "20px"}}>
                        <input type="checkbox"
                               className="form-check-input"
                               value="Lactose free"
                               id="defaultCheck1"
                               name="restrictions.lactoseFree"
                               checked={this.state.restrictions.lactoseFree.status}
                               onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Lactose free
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
            <hr />
                <div>
                    <h2>Input data:</h2>
                    <p>Full Name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Age: {this.state.age} years old</p>
                    <p>Gender: {this.state.gender}</p>
                    <p>Location: {this.state.location}</p>
                    <p>Dietary Restrictions: {this.showDietaryRestrictions()}</p>
                </div>
        </div>
    }
}

export default TravelForm;
