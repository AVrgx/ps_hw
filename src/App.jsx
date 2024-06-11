import { useContext, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Search from './components/Search/Search';
import SearchHeader from './components/SearchHeader/SearchHeader';
import SearchParagraph from './components/SearchParagraph/SearchParagraph';
import { films } from './const/const';
import { UserContextProvider } from './context/user.context';


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

	return (
		<UserContextProvider>
			<Header
				activeUser={activeUser} />
			<Search>
				<SearchHeader></SearchHeader>
				<SearchParagraph></SearchParagraph>
			</Search>
			<CardList films={films} />
			<LoginForm name={name} setName={setName} />
		</UserContextProvider>
	);
}

export default App;
