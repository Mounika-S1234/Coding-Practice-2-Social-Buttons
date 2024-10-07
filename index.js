const Button = ({label, backgroundColor}) => (
  <button className='social-button' style={{backgroundColor}}>
    {label}
  </button>
)

const App = () => (
  <div className='social-buttons-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='buttons-container'>
      <Button label='Like' backgroundColor='#eab308' />
      <Button label='Comment' backgroundColor='#ffffff' />
      <Button label='Share' backgroundColor='#1d4ed8' />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
