import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchHeader from './components/SearchHeader/SearchHeader';
import SearchParagraph from './components/SearchParagraph/SearchParagraph';
import { films } from './const/const';

function App() {
	return (
		<>
			<Header />
			<Search>
				<SearchHeader></SearchHeader>
				<SearchParagraph></SearchParagraph>
			</Search>
			<CardList films={films}/>
		</>
	);
}

export default App;
