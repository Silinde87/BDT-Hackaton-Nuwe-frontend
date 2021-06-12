import jsSHA from "jssha";

//const localStorage = window.localStorage;

export const saveUser = (name, email, password) => {
	const users = getUsers();
	let newUsers = [];

	if (users) newUsers = users;

	if (!userExists(email, users)) {
		const hashedPassword = calculateHash(password);
		newUsers.push({ name, email, password: hashedPassword });
		localStorage.setItem("users", JSON.stringify(newUsers));
		return true;
	} else {
		return false;
	}
};

const getUsers = () => {
	const users = JSON.parse(localStorage.getItem("users"));
	if (users) return users;
	else return [];
};

const calculateHash = (password) => {
	const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
	shaObj.update(password);
	const hash = shaObj.getHash("HEX");
	return hash;
};

const userExists = (email, users) => {
	console.log(email, users);
	return users.some((user) => user.email === email);
};
