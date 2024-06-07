import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Search from './components/Search/Search';
import SearchHeader from './components/SearchHeader/SearchHeader';
import SearchParagraph from './components/SearchParagraph/SearchParagraph';
import { films } from './const/const';


function App() {
	const [activeUser, setActiveUser] = useState(null);
	const [name, setName] = useState('');
	const [login, setLogin] = useState("");

	
	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('activeUser'));
		if (userData && userData.name) {
			setActiveUser(userData.name);
		}
	}, [login]);


	const onLogin = (e) => {
		e.preventDefault();

		if (!name.trim()) {
			alert("Пожалуйста, введите ваше имя.");
			return;
		}

		const profile = {
			name: name,

		};

		const profiles = JSON.parse(localStorage.getItem('profiles')) || [];


		if (!profiles.find(profile => profile.name === name)) {
			profiles.push(profile);
			localStorage.setItem('profiles', JSON.stringify(profiles));
			localStorage.setItem('activeUser', JSON.stringify({ name: name }));

		} else { localStorage.setItem('activeUser', JSON.stringify({ name: name })); }
		setName('')
		setLogin(true);

	};

	const onLogout=(e)=>{
		e.preventDefault();
		localStorage.removeItem('activeUser');
		setActiveUser(null)
		setLogin(false)
	}

	return (
		<>
			<Header
			activeUser={activeUser}
			onLogout={onLogout} />
			<Search>
				<SearchHeader></SearchHeader>
				<SearchParagraph></SearchParagraph>
			</Search>
			<CardList films={films}/>
			<LoginForm onLogin={onLogin} name={name} setName={setName}/>
		</>
	);
}

export default App;
