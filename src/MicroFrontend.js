import React, { PureComponent } from 'react';

class MFrontend extends PureComponent {
  componentDidMount = async () => {
    const { name, host } = this.props;
    const scriptId = `mfrontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    const fetchedMfrontend = await fetch(`${host}/asset-manifest.json`);
    const manifest = await fetchedMfrontend.json();
    const script = document.createElement('script');
    script.id = scriptId;
    script.crossOrigin = '';
    script.src = `${host}${manifest['main.js']}`;
    script.onload = this.renderMicroFrontend;
    document.head.appendChild(script);
  }

  componentWillUnmount = () => {
    const { name } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, history } = this.props;

    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    const { name } = this.props;
    return <main id={`${name}-container`} />;
  }
}

export default MicroFrontend;
