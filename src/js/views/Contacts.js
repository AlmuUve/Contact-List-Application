import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { actions, store } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	const [field, setField] = useState({});

	const fillField = event => {
		let name = document.querySelector("#name").value;
		let email = document.querySelector("#email").value;
		let phone = document.querySelector("#phone").value;
		let address = document.querySelector("#address").value;

		let contact = {
			full_name: name,
			email: email,
			phone: phone,
			address: address,
			agenda_slug: "Almu_Agenda"
		};

		setField(contact);

		return contact;
	};

	let cards = store.contacts.map((contact, index) => {
		return (
			<ContactCard
				key={index}
				onDelete={() => setState({ showModal: true })}
				id={contact.id}
				name={contact.full_name}
				address={contact.address}
				phone={contact.phone}
				email={contact.email}
			/>
		);
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.length == 0 ? null : cards}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={store.id} />
		</div>
	);
};
