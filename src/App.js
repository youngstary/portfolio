import NavigationBar from './components/NavigationBar/NavigationBar'
import Banner from './components/Banner/Banner'
import AboutMe from './components/AboutMe/AboutMe'
import './styles/App.scss'

export default function App () {
  return (
      <>
        <NavigationBar />
        <Banner />
        <AboutMe />
      </>
  );
}
