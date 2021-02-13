const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []

		},
		actions: {

            // setUser: user => {
			// 	setStore({ user: user });
			// },

			getSingleContact: async id => {
				let response = await fetch('https://assets.breatheco.de/apis/fake/contact/' + id);
				response = await response.json();
				getActions().setUser(response);
            },
            
			getAllContacts: async () => {
				let response = await fetch('https://assets.breatheco.de/apis/fake/contact/agenda/Almu_Agenda');
				response = await response.json();
				setStore({ contacts: response });
			},
		}
	};
};

export default getState;
