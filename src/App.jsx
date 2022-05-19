import Input from './components/Input/Input';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Input Component</h1>

        <div className='input-grid'>
          <div className='card colors'>
            <p>{`<Input />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' />
          </div>

          <div className='card colors'>
            <p>{`<Input error />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' error />
          </div>

          <div className='card colors'>
            <p>{`<Input disabled />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' disabled />
          </div>

          <div className='card colors'>
            <p>{`<Input helperText=”Some interesting text” />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' helperText='Some interesting text' />
          </div>

          <div className='card colors'>
            <p>{`<Input helperText='Some interesting text' error />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' helperText='Some interesting text' error />
          </div>

          <div className='card colors'>
            <p>{`<Input startIcon />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' startIcon='call' />
          </div>

          <div className='card colors'>
            <p>{`<Input endIcon />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' endIcon='lock' />
          </div>

          <div className='card colors'>
            <p>{`<Input value=”text” />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' value='text' />
          </div>

          <div className='card colors'>
            <p>{`<Input size=”sm” />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' size='sm' />
          </div>

          <div className='card colors'>
            <p>{`<Input size=”md” />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' size='md' />
          </div>

          <div className='card colors'>
            <p>{`<Input fullWidth />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' fullWidth value='text' />
          </div>

          <div className='card colors'>
            <p>{`<Input multiline row=”4” />`}</p>
            <Input className='myInput' labelText='Label' placeholder='Placeholder' multiline row='4' />
          </div>
        </div>

        <footer className='footer'>
          created by{' '}
          <a href='https://github.com/leandrogtabak' style={{ fontWeight: 600 }}>
            leandrogtabak
          </a>{' '}
          - devChallenges.io
        </footer>
      </div>
    </div>
  );
}

export default App;
