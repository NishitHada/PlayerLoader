import React, { Component, lazy, Suspense } from "react";
import styled from "styled-components";
import { Roller } from "react-awesome-spinners";
import Loader from "./Loader";
import Thumbnail from "./cat.jpg";
import WrapperYT from "./WrapperYT";
import ErrorBoundary from "./ErrorBoundary";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 180px;
  /* padding: 5px; */
  border: 1px solid;
  /* background-image: url(${Thumbnail}); */
  /* background-color: yellow; */
  background-size: 320px 180px;
`;

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      numRetry: 3,
      isLoading: true,
      module: null,
      hasError: false
    };
  }

  async componentDidMount() {
    // try{
    //   await this.loadYT();
    // } catch(Error){

    // }

    let x = await this.loadWrapper();
    while (x === -1 && this.state.numRetry > 0) {
      console.log(x);
      if (this.state.numRetry > 0) {
        x = await this.loadWrapper();
      }
    }

    if (x === -1 && this.state.numRetry <= 0) {
      console.log("Problem in loading the player!!");
      this.setState({
        hasError: true
      });
    } else console.log("Player load successful");

    // import("./YTPlayer")
    // .then(module => this.setState({ module: module.default }))
  }

  loadYT = () => {
    return new Promise((resolve) => setTimeout(resolve, 2 * 1000)).then(() =>
      Math.floor(Math.random() * 10) >= 6.5
        ? // ? import("./HippoPlayer").then((module) =>
          import("./YTPlayer").then((module) =>
            this.setState({
              module: module.default,
              isLoading: false
            })
          )
        : Promise.reject(new Error())
    );
  };

  loadWrapper = async () => {
    try {
      await this.loadYT();
    } catch (Error) {
      if (this.state.numRetry > 0) {
        this.setState(
          {
            numRetry: this.state.numRetry - 1
          },
          () => {
            console.log("Num of Retry left:", this.state.numRetry);
          }
        );
      } else {
        console.log("From Wrapper Problem in loading the player!!");
        this.setState({
          hasError: true
        });
      }
      return -1;
    }
    // this.setState({
    //   isLoading: false
    // });
    // return 1;
  };

  clickHandler = () => {
    this.setState({
      isClicked: true
    });
  };

  render() {
    const { module: Component } = this.state;

    if (!this.state.isClicked) {
      return (
        <Wrapper style={{ backgroundImage: `url(${Thumbnail})` }}>
          <button onClick={this.clickHandler}>Play</button>
        </Wrapper>
      );
    } else if (this.state.hasError) {
      return (
        <Wrapper>
          <h2>Problem loading player</h2>
        </Wrapper>
      );
    } else if (
      // !this.state.hasError &&
      // this.state.isClicked &&
      !this.state.isLoading
    ) {
      return (
        <Wrapper>
          <ErrorBoundary>
            {/* <Suspense fallback={<Loader />}> */}
            {/* {YTPlayer} */}
            {/* <WrapperYT /> */}
            {Component && <Component />}
            {/* </Suspense> */}
          </ErrorBoundary>
        </Wrapper>
      );
    } else if (
      // !this.state.hasError &&
      // this.state.isClicked &&
      this.state.isLoading
    ) {
      return (
        <Wrapper style={{ backgroundImage: `url(${Thumbnail})` }}>
          {/* <Loader /> */}
          <Roller />
        </Wrapper>
      );
    }
  }
}

export default App;
