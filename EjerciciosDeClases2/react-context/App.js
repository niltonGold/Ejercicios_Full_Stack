import './App.css';
import LanguageProvider from './language/language-provider';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <LanguageProvider value='en'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </LanguageProvider>
  );
}

export default App;
