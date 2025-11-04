import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Capabilities from './components/Capabilities/Capabilities'
import Showcase from './components/Showcase/Showcase'
import Profile from './components/Profile/Profile'
import GetInTouch from './components/GetInTouch/GetInTouch'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import SocialAccount from './components/SocialAccount/SocialAccount'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <HeroSection />
      <section id="capabilities">
        <Capabilities />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="profile">
        <Profile />
      </section>
      <section id="getInTouch">
        <GetInTouch />
      </section>
      <ScrollToTopButton />
      <SocialAccount />
      <Footer />
    </>
  )
}

export default App
