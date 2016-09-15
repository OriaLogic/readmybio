export const ProfilePath = () => `/profile`;
export const FriendsPath = () => `/friends`;
export const UserPath = (userId = 'me') => `/users/${userId}`;
export const UserCategoriesPath = (userId) => `/users/${userId || 'me'}/categories`;
export const UserCategorieEventsPath = (userId, categoryId) => UserCategoriesPath(userId) +  `/${categoryId || 'all'}/events`;
export const NewEventPath = () => '/events/new';
export const EditEventPath = (userId, eventId) => `/users/${userId}/events/${eventId}/edit`;
export const EventPath = (userId, eventId) => `/users/${userId}/events/${eventId}`;
