import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { actions, store } = useContext(Context);

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

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							id="name"
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={fillField}
							defaultValue={store.editContact ? store.editContact.name : ""}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							id="email"
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={fillField}
							defaultValue={store.editContact ? store.editContact.email : ""}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							id="phone"
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={fillField}
							defaultValue={store.editContact ? store.editContact.phone : ""}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							id="address"
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={fillField}
							defaultValue={store.editContact ? store.editContact.address : ""}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							if (store.editContact != null) {
								actions.updateContact(store.editContact.id, field);
							} else {
								actions.createContact(field);
							}
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
