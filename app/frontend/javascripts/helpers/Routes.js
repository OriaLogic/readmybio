export const ProfilePath = () => `/profile`;
export const FriendsPath = () => `/friends`;
export const UserCategoriesPath = (userId) => `/users/${userId || 'me'}/categories`;
export const UserCategorieEventsPath = (userId, categorieId) => UserCategoriesPath(userId) +  `/${categorieId || 'all'}/events`;
export const NewEventPath = () => '/events/new';
export const EditEventPath = (eventId) => `/events/${eventId}/edit`;
export const EventPath = (eventId) => `/events/${eventId}`;
