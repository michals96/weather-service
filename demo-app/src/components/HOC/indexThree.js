import React from "react";
import { dataSrc } from "./datasrc";

function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(dataSrc, props),
      };
    }

    componentDidMount() {
      dataSrc.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      dataSrc.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(dataSrc, this.props),
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

export default withSubscription;
