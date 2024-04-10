const INITIAL_STATE = {
contacts: 
		[
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
],
filters: "",}

export const contactboxReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case "contactbox/ADD_CONTACT":
            return {...state,
            contacts: [...state.contacts, action.payload]
    }
        case "contactbox/DELETE_CONTACT":
            return {...state,
                contacts:state.contacts.filter((contact) => contact.id !== action.payload)
            }
            
        case "contactbox/FILTER_CONTACT":
            return {...state,
                filters:action.payload
            }
       
        default:
            return state;
            
    }
  
}
