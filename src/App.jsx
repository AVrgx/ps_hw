import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import SearchHeader from './components/SearchHeader/SearchHeader'
import SearchParagraph from './components/SearpchParagraph/SearchParagraph'

function App() {
  

  return (
    <>
    <Header/>
    <Search>
      <SearchHeader></SearchHeader>
      <SearchParagraph></SearchParagraph>
    </Search>
    </>
      
  )
}

export default App
