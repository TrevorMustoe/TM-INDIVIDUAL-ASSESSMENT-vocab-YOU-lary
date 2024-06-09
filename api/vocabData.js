import client from '../utils/client';
// API CALLS FOR Vocab

const endpoint = client.databaseURL;

// TODO: GET Vocab
const getVocab = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// Gets all cards that belong to the python category
const getPython = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo="Python"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// Gets all cards that belong to the javascript category
const getJavascript = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo="JavaScript"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// Gets all cards that belong to the CSS category
const getCSS = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo="CSS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// Gets all cards that belong to the html category
const getHTML = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="language_id"&equalTo="HTML"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// FIXME: CREATE Vocab Card
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: GET SINGLE Vocab
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// FIXME: DELETE Vocab Card
const deleteSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: UPDATE Vocab Card
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getVocab, getPython, getJavascript, getCSS, getHTML, updateVocab, deleteSingleVocab, getSingleVocab, createVocab
};
