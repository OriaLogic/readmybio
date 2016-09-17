export const ProfilePath = () => `/profile`;
export const FriendsPath = () => `/friends`;
export const UserPath = (userId = 'me') => `/users/${userId}`;
export const UserCategoriesPath = (userId) => `/users/${userId || 'me'}/categories`;
export const UserCategorieEventsPath = (userId, categoryId) => UserCategoriesPath(userId) +  `/${categoryId || 'all'}/events`;
export const NewUserEventPath = () => '/events/new';
export const UserEventPath = (userId, eventId, categoryId = 'all') => {
  let path = `/users/${userId}/events/${eventId}`;
  path += categoryId ? `?from_category=${categoryId}` : '';
  return path;
}
export const EditUserEventPath = (userId, eventId, categoryId = 'all') => {
  let path = `/users/${userId}/events/${eventId}/edit`;
  path += categoryId ? `?from_category=${categoryId}` : '';
  return path;
}
