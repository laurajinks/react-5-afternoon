const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: 'false',
    realEstateAgent: 'false',
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROP = 'UPDATE_PROP'
const UPDATE_FOUND = 'UPDATE_FOUND'
const UPDATE_REAL_ESTATE_AGENT = 'UPDATE_REAL_ESTATE_AGENT'
const UPDATE_COST = 'UPDATE_COST'
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT'
const UPDATE_CREDIT = 'UPDATE_CREDIT'
const UPDATE_HISTORY = 'UPDATE_HISTORY'
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE'
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO'
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE'
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'

export const updateLoanType = (loan) => {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loan
    }
}

export const updatePropertyType = (property) => {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export const updateCity = (city) => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export const updateProp = (prop) => {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export const updateFound = (x) => {
    return {
        type: UPDATE_FOUND,
        payload: x
    }
}

export const updateRealEstateAgent = (agent) => {
    return {
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: agent
    }
}

export const updateCost = (cost) => {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export const updateDownPayment = (payment) => {
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: payment
    }
}

export const updateCredit = (credit) => {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export const updateHistory = (history) => {
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}

export const updateAddressOne = (address) => {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: address
    }
}

export const updateAddressTwo = (address) => {
    return {
        type: UPDATE_ADDRESS_TWO,
        paylaod: address
    }
}

export const updateAddressThree = (address) => {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: address
    }
}

export const updateFirstName = (name) => {
    return {
        type: UPDATE_FIRST_NAME,
        payload: name
    }
}

export const updateLastName = (name) => {
    return {
        type: UPDATE_LAST_NAME,
        payload: name
    }
}

export const updateEmail = (email) => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_LOAN_TYPE: 
            return {
            loanType: action.payload
        }
        case UPDATE_PROPERTY_TYPE: 
            return {
            propertyType: action.payload
        }
        case UPDATE_CITY:
            return {
            city: action.payload
        }
        case UPDATE_PROP:
            return {
            propToBeUsedOn: action.payload
        }
        case UPDATE_FOUND:
            return {
            found: action.payload
        }
        case UPDATE_REAL_ESTATE_AGENT:
            return {
            realEstateAgent: action.payload
        }
        case UPDATE_COST:
            return {
            cost: action.payload
            }
        case UPDATE_DOWN_PAYMENT:
            return {
            downPayment: action.payload
            }
        case UPDATE_CREDIT:
            return {
            credit: action.payload
            }
        case UPDATE_HISTORY:
            return {
            history: action.payload
        }
        case UPDATE_ADDRESS_ONE:
            return {
            addressOne: action.payload
            }
        case UPDATE_ADDRESS_TWO:
            return {
            addressTwo: action.payload
            }
        case UPDATE_ADDRESS_THREE:
            return {
            addressThree: action.payload
            }
        case UPDATE_FIRST_NAME:
            return {
            firstName: action.payload
            }
        case UPDATE_LAST_NAME:
            return {
            lastName: action.payload
            }
        case UPDATE_EMAIL:
            return {
            email: action.payload
            }
        default: {
            return state;
        }
    }
}

export default reducer;