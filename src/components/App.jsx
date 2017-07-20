class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      VideoPlayerVideo: window.exampleVideoData[0],
      VideoListVideos: window.exampleVideoData
    };
  }

  handleVideoItemClick(video) {
    console.log('THIS WAS CLICKED!!!');
    this.setState({
      VideoPlayerVideo: video
    });
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.VideoPlayerVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            handleVideoItemClick={this.handleVideoItemClick.bind(this)}
            videos={this.state.VideoListVideos}
          />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;