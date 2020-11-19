import { createSelector } from 'reselect'

export const isUserLoggedInSelector = state => state.isUserLoggedIn;
// const countrySelector = state => state.user.location.country;

export const userLoggedInSelector = createSelector(
    isUserLoggedInSelector,
    (value) => value,
);