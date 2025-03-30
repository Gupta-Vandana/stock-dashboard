import { Header } from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
      <Header title="Hi, there! Your daily portfolio is here" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '3rem',
        }}
      >
        <Portfolio />
      </div>
    </>
  );
}

export default App;
