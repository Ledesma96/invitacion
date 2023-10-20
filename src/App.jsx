import './App.css'
import CountdownTimer from './components/CountdownTimer'

function App() {


  return (
    <div className='container'>
      <div className='container__div'>
        <CountdownTimer></CountdownTimer>
        <img className='container__div__image' src="../public/D_NQ_NP_713381-MLA54936235795_042023-O.png" alt="escudo de river" />
      </div>
      <section className='container__section'>
        <aside className='container__section__1'>
          <p className='container__section__1__p'>¡TE INVITO A MI CUMPLE!</p>
          <h1 className='container__section__1__h1'>JAMPIER</h1>
        </aside>
        <aside className='container__section__2'>
          <div className='container__section__2__div1'>
            <p className='container__section__2__div1__dia'>DOMINGO</p>
            <p className='container__section__2__div1__fecha'>22</p>
            <p className='container__section__2__div1__mes'>OCTUBRE</p>
          </div>
          <div className='container__section__2__div2'>
            <p className='container__section__2__div2__p1'>DE 17:00 A 21:00 HS</p>
            <span className='container__section__2__div2__span'></span>
            <p className='container__section__2__div2__p2'>CALLE 121 N° 134 BERAZATEGUI</p>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default App
