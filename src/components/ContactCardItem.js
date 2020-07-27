import React, { Component } from 'react';

class ContactCardItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const card = this.props.data;

        return (
            <div className="col-sm-3">
                <div className="card">
                    <img src={card.imgUrl} className="card-img-top img-thumbnail img-fluid" alt={card.imgUrl} />
                        <div className="card-body">
                            <h3 className="card-title text-center">{card.lastName}</h3>
                            <p className="card-text">Phone: {card.phone}</p>
                            <p className="card-text">Email: {card.email}</p>
                        </div>
                </div>
            </div>

        );
    }
}

export default ContactCardItem;
