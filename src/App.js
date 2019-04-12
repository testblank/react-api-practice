import React, { Component } from "react";
import "./styles/main.scss";
import ViewerTemplate from "./components/ViewerTemplate";
import SpaceNavigator from "./components/SpaceNavigator";
import Viewer from "./components/Viewer";

import * as pixabay from "./lib/api/pixbay";

class App extends Component {
  state = {
    loading: false,
    pictures: []
  };
  getImage = async (pageNum) => {
    // if (!this.state.loading) return;
    this.setState({ loading: true });
    try {
      const res = await pixabay.getImage();
      const pictureArray = res.data.hits;

      for (const key in pictureArray) {
        if (pictureArray.hasOwnProperty(key)) {
          this.setState({
            pictures: this.state.pictures.concat([
              {
                number: key,
                id: pictureArray[key].id,
                webformatURL: pictureArray[key].webformatURL
              }
            ])
          });
        }
      }
      // console.log(this.state.pictures);
    } catch (e) {
      console.log(e);
    }
    this.setState({
      loading: false
    });
  };

  handlePrev = () => {};
  handleNext = () => {
    let pageNum = 2;
    this.getImage(pageNum);
  };

  componentDidMount = () => {
    this.getImage();
  };

  render() {
    const { loading, pictures } = this.state;
    const { handleNext, handlePrev } = this;
    const pictureList = pictures.map(pic => (
      <Viewer loading={loading} src={pic.webformatURL} id={pic.number} key={pic.id} alt={pic.id}/>
    ))
    return (
      <div className="App">
        <ViewerTemplate
          spaceNavigator={
            <SpaceNavigator onPrev={handlePrev} onNext={handleNext} />
          }
          viewer={pictureList}
        />
      </div>
    );
  }
}

export default App;
