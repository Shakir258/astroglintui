import api from './api';

export const saveBirthDetails = (data) => api.post('/saveBirthDetails', data);
export const getBirthDetails = () => api.post('/getBirthDetails');
export const listMyCompatibility = () => api.post('/listMyCompatibility');
export const askQuestion = (data) => api.post('/askQ', data);
export const getRelationList = () => api.get('/RelationList');
export const getLocationList = () => api.get('/locationList');
export const dayPrediction = (data) => api.post('/dayPrediction', data);
export const rangePrediction = (data) => api.post('/rangePrediction', data);
export const knowCompatibility = (data) => api.post('/knowCompatibility', data);
