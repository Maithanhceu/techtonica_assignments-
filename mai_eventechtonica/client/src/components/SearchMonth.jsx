import React, { useReducer } from "react";

const initialState = {
    searchMonth: '',
};

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SEARCH_MONTH':
            return {
                ...state,
                searchMonth: action.payload,
            };
        default:
            return state;
    }
};

const SearchMonth = ({ onMonthChange }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSearchMonth = (e) => {
        const month = e.target.value;
        dispatch({ type: 'SET_SEARCH_MONTH', payload: month });
        onMonthChange(month);
    };

    return (
        <div className="searchbymonth">
            <label htmlFor="search-month">Search by Month:</label>
            <input
                type="month"
                id="search-month"
                value={state.searchMonth}
                onChange={handleSearchMonth}
                placeholder="Search by Month"
            />
        </div>
    );
};

export default SearchMonth;

