// Save data to local storage
function saveToLocalStorage(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving to local storage:', error);
  }
}

// Get data from local storage
function getFromLocalStorage(key, defaultValue) {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch (error) {
    return defaultValue;
  }
}

// Remove data from local storage
function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from local storage:', error);
  }
}

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
