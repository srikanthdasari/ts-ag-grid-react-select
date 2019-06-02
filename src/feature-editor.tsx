import * as React from "react";
import SelectComponent from "./selectComponent";

interface IFeatureEditorProps {
  value: string[];
  column: any;
}

interface IFeatureEditorState {
  newvalue: string[];
}

class FeatureEditor extends React.Component<
  IFeatureEditorProps,
  IFeatureEditorState
> {
  constructor(props: IFeatureEditorProps) {
    super(props);
    this.state = {
      newvalue: []
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  componentWillMount() {
    this.setState({ newvalue: this.props.value });
  }

  getValue() {
    return this.state.newvalue;
  }

  isPopup() {
    return true;
  }

  onChangeHandle(val: any, event: any) {
    // console.log(v);
    // console.log(e);
  }

  render() {
    return (
      <SelectComponent
        width={this.props.column.getActualWidth()}
        existingOptions={this.props.value}
        onChange={this.onChangeHandle}
      />
    );
  }
}

export default FeatureEditor;
