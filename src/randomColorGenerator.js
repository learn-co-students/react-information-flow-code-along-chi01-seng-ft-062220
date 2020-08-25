// Nothing in this file needs to be altered (but it is your solution so feel free to!)
export function getRandomColor() {
  // this function generates a random hex color from the letters below
  const letters = '123456789AB' // <-- cutting off top end so we can lighten the color twice with 'reduceColor'
  let color = '#'
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 11)]
  }
  return color
}

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      color: getRandomColor()
    }
  }

  changeColor = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
      <Child handleColorChange={this.changeColor}/>
      <Child handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div onClick={this.props.handleColorChange}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}