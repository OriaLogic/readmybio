export const UserJSONPath = () => '/users/current.json';
export const LogoutUserPath = () => '/auth/sign_out';
export const EventsJSONPath = (userId, categoryId) => `/events.json?user_id=${userId}&category_id=${categoryId}`;
export const CreateEventJSONPath = () => '/events.json';
export const CategoriesJSONPath = () => '/tags.json';
export const UserCategoriesJSONPath = (userId) => `/users/${userId}/categories.json`;
export const EventJSONPath = (userId, eventId) => `/events/${eventId}.json?user_id=${userId}`;
export const UpdateEventJSONPath = (userId, eventId) => `/events/${eventId}.json?user_id=${userId}`;
export const UserValidateOnboardingJSONPath = () => '/users/validate_onboarding.json'
