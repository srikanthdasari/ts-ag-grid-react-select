import * as React from "react";
import Badge from "react-bootstrap/Badge";

interface IFeatureRendererProps {
  value: string[];
}

interface IFeatureRendererStore {
  currentValue: string[];
}

class FeatureRenderer extends React.Component<
  IFeatureRendererProps,
  IFeatureRendererStore
> {
  constructor(props: IFeatureRendererProps) {
    super(props);
    this.state = {
      currentValue: []
    };
  }

  componentWillMount() {
    this.setData(this.props.value);
  }

  setData(data: string[]): void {
    if (data instanceof Array) {
      this.setState({
        currentValue: data
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.currentValue.map(x => (
          <Badge key={x} pill variant="primary" style={{ margin: 2 }}>
            {x}
          </Badge>
        ))}
      </div>
    );
  }
}

export default FeatureRenderer;
