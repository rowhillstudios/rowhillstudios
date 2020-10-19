import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cAv2N3y_Jus"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    );
  }
}
