const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			id: null,
			editContact: null
		},
		actions: {
			setId: id => {
				setStore({ id: id });
			},

			setEditContact: (id, name, email, phone, address) => {
				setStore({
					editContact: {
						id: id,
						name: name,
						email: email,
						phone: phone,
						address: address
					}
				});
			},

			setEmptyContact: () => {
				setStore({ editContact: null });
			},

			getSingleContact: async id => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + id);
				response = await response.json();
				getActions().setContact(response);
			},

			getAllContacts: async () => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Almu_Agenda");
				response = await response.json();
				setStore({ contacts: response });
			},

			createContact: async data => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify(data)
				});
				response = await response.json();
				getActions().getAllContacts();
			},

			deleteContact: async id => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: new Headers({
						"Content-Type": "application/json"
					})
				});
				response = await response.json();
				getActions().getAllContacts();
			},

			updateContact: async (id, field) => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: new Headers({
						"Content-Type": "application/json"
					}),
					body: JSON.stringify(field)
				});
				response = await response.json();
				getActions().getAllContacts();
				getActions().setEmptyContact();
			}
		}
	};
};

export default getState;
