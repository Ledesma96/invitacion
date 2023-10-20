import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.calculateTimeRemaining(), // Calcular el tiempo restante inicial
    };
  }

  componentDidMount() {
    // Iniciar la cuenta regresiva cuando el componente se monta
    this.countdownInterval = setInterval(() => {
      this.setState({
        timeRemaining: this.calculateTimeRemaining(),
      });
    }, 1000); // Actualiza cada segundo (1000 ms)
  }

  componentWillUnmount() {
    // Detener la cuenta regresiva cuando el componente se desmonta
    clearInterval(this.countdownInterval);
  }

  calculateTimeRemaining() {
    // Calcular el tiempo restante en milisegundos
    const targetDate = new Date('2023-10-22T17:00:00'); // Fecha y hora de destino
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      // La cuenta regresiva ha llegado a su fin
      this.stopCountdown();
      return 0;
    }

    return timeRemaining;
  }

  stopCountdown() {
    clearInterval(this.countdownInterval);
  }

  render() {
    const { timeRemaining } = this.state;

    const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) || 0).padStart(2, '0');
const hours = String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || 0).padStart(2, '0');
const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)) || 0).padStart(2, '0');
const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000) || 0).padStart(2, '0');


    return (
      <div>
        {timeRemaining > 0 ? (
            <div className='containerTimer'>
                <div className='containerTimer__days'>
                    <p className='containerTimer__days__day'>{days} dias</p>
                </div>
                <div className='containerTimer__hours'>
                    <p>{hours} : {minutes} : {seconds}</p>
                </div>
                
            </div>
          
        ) : (
          <p>Cuenta regresiva finalizada</p>
        )}
      </div>
    );
  }
}

export default CountdownTimer;
