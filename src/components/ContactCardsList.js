import React, { Component } from 'react';
import data from '../data/contactCardsData.js';
import ContactCardItem from './ContactCardItem';

class ContactCardsList extends Component {
    render() {
        const list = data.map(card => {
            return <ContactCardItem key={card.id} data={card} />
        });

        return (
            <div className='contact-cards-list'>
                <h2 className="text-center mb-5 mt-3">Contact Cards List</h2>
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }
}

export default ContactCardsList;
