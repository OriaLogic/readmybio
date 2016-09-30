const ME = 'me';
const ALL = 'all';

export const ProfilePath = () => `/profile`;
export const FriendsPath = () => `/friends`;
export const UserPath = (userId = ME) => `/users/${userId}`;
export const UserCategoriesPath = (userId = ME) => `/users/${userId}/categories`;
export const UserEventsPath = (userId = ME) => `/users/${userId}/events`;
export const NewUserEventPath = () => '/users/me/events/new';
export const UserEventPath = (userId, eventId) => `/users/${userId}/events/${eventId}`;
export const EditUserEventPath = (userId, eventId) => `/users/${userId}/events/${eventId}/edit`;
