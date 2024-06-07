export const INITIAL_STATE = {
	isValid: {
		loginName: true,
	},
	values: {
		loginName: ''
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch (action.type) {
		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } };
		case 'CLEAR':
			return { ...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false };
		case 'RESET_VALIDITY':
			return { ...state, isValid: INITIAL_STATE.isValid };
		case 'SUBMIT': {
			const loginValidity = state.values.loginName?.trim().length;
			return {
				...state,
				isValid: {
					loginName: loginValidity,

				},
				isFormReadyToSubmit: loginValidity
			};
		}
		default: return state;
	}
}