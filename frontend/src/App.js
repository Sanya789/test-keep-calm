import './App.css';
import {Header} from './components/Header'
import {Main} from './components/Main'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const horizontalSections = gsap.utils.toArray('section.horizontal')
const oneSection = document.querySelector('.horizontal')

horizontalSections.forEach(function (sec, i) {	
  
  var thisPinWrap = sec.querySelector('.pin-wrap');
  var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
  
  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth + 220); 

  gsap.fromTo(thisAnimWrap, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
  }, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    ease: "none",
    scrollTrigger: {
      trigger: sec,		
      start: "top top",
      end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
      pin: '.wrapper',
      invalidateOnRefresh: true,
      // anticipatePin: 1,
      scrub: true,
      //markers: true,
    }
  });

});	

function App() {
  
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
       <Main/>
        <footer className="footer footer">
          <p className="footer__text"> © TEST, 1022–2022</p>
        </footer>
      </div>
      <script src="./js/script.js" type="text/javascript"></script>
    </div>
  );
}

export default App;
