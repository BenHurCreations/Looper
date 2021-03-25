import React from 'react';

// This class represents a sample of a looper button
class MusicBox extends React.Component {
  constructor(props) {
      super(props);
      this.state= {
          isActive: false,
          border: "white",
      };
  }


  clickHandler = () => {
    if(this.props.refresh[this.props.index])
    {
        this.setState({border: 'white'});
        console.log("yes");
        this.props.refresh[this.props.index] = false;
        this.setState({isActive: false},
            () => this.activateButton());
    }
    else
    {
        this.activateButton();
    }
  }

  activateButton = () => {
    // Activate / Deactivate the button
    const temp = this.state.isActive; // To solve asynchronous issue
    this.setState({isActive: !temp},
        () => this.handleChange());
  }

  handleChange = () =>
  {
    console.log(this.state.isActive);
    if(this.state.isActive)
    {
        // UX
        this.setState({border: 'blue'});
        console.log(this.state.border);

        // First song immidiate play
        if(!this.props.play)
        {
            document.getElementById("mainLoop").play();
            this.props.loop.play();
        }

        // Update parent vars
        this.props.array[this.props.index] = true;
        this.props.counter(1);
    }

    else
    {
        // UX
        this.setState({border: 'white'});

        // Stop music
        this.props.loop.pause();
        this.props.loop.currentTime = 0;

        // Update variables
        this.props.array[this.props.index] = false;
        this.props.counter(-1);
    }
  }

  render() {
      return <span>
              <button class="loopers" onClick={this.clickHandler} style={{borderColor: this.state.border}}>
                        <img src={this.props.icon} alt="Hi" height="50px" width="50px"/>
              </button>
           </span>
  }
};

export default MusicBox;
