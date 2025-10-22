import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
	// Get from localStorage then parse stored json or return initialValue
	const readValue = () => {
		if (typeof window === 'undefined') return initialValue;
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			return initialValue;
		}
	};

	const [storedValue, setStoredValue] = useState(readValue);

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(storedValue));
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}

export default useLocalStorage;
