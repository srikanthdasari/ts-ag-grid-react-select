import * as React from "react";
import Select from "react-select";
import * as _ from "lodash";

const options = [
  { value: "A", label: "ac" },
  { value: "LS", label: "leather-seats" },
  { value: "SD", label: "self-drive" },
  { value: "G", label: "gps" },
  { value: "HS", label: "heated-seats" }
];

interface ISelectComponentProps {
  width: number;
  existingOptions: string[];
  onChange(val: any, event: any): void;
  // height: number;
}

interface ISelectComponentState {
  selectedOptions: string[];
  selectedMenuOptions: any;
}
// to fix the height -> https://github.com/JedWatson/react-select/issues/1322

class SelectComponent extends React.Component<
  ISelectComponentProps,
  ISelectComponentState
> {
  /**
   *
   */
  constructor(props: ISelectComponentProps) {
    super(props);
    this.state = {
      selectedOptions: this.props.existingOptions,
      selectedMenuOptions: _.filter(options, o => {
        return this.props.existingOptions.indexOf(o.label) > -1;
      })
    };
  }

  render() {
    const adjHeight = 25;
    const colorStyles = {
      control: styles => ({
        // this is the total control
        ...styles,
        width: this.props.width,
        height: adjHeight,
        "min-height": adjHeight
      }),
      input: styles => ({
        //this is the input carrot and text
        ...styles
        // height: adjHeight,
        // "min-height": adjHeight
      }),
      placeholder: styles => ({
        ...styles,
        // this is the "select" text place
        fontSize: 9
        // height: adjHeight,
        //"min-height": adjHeight
      }),
      option: (provided, state) => ({
        // this the bottom options
        ...provided,
        textAlign: "left",
        width: this.props.width
      }),
      container: styles => ({
        // this is one layer above to container
        ...styles,
        width: this.props.width
        // height: adjHeight,
        // "min-height": adjHeight
      }),
      indicatorSeparator: styles => ({
        ...styles,
        dsiplay: "none",
        width: 0
        // height: adjHeight,
        // "min-height": adjHeight
      }),
      indicatorsContainer: styles => ({
        ...styles,
        padding: 0,
        verticalAlign: "text-top",
        height: adjHeight,
        "min-height": adjHeight
      }),
      dropdownIndicator: styles => ({
        ...styles,
        padding: 0
        // color: "red"
        // height: adjHeight,
        // "min-height": adjHeight
      }),
      valueContainer: styles => ({
        ...styles,
        padding: 0,
        height: adjHeight,
        "min-height": adjHeight,
        "overflow-y": "scroll",
        "::-webkit-scrollbar": {
          width: 3
        }
        // "::-webkit-scrollbar-track": {
        //   "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)"
        // },
        // "::-webkit-scrollbar-thumb": {
        //   backgroundColor: "#darkgrey",
        //   outline: "1px solid slategrey"
        // }
      }),
      multiValue: styles => ({
        ...styles,
        backgroundColor: "#007BFF",
        padding: 0
      }),
      multiValueLabel: styles => ({
        ...styles,
        padding: 0
      }),
      multiValueRemove: styles => ({
        ...styles,
        padding: 0
      }),
      clearIndicator: styles => ({
        ...styles,
        padding: 0
      })
    };
    console.log(this.state.selectedMenuOptions);
    return (
      <Select
        isMulti
        value={this.state.selectedMenuOptions}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={colorStyles}
        onChange={this.props.onChange}
      />
    );
  }
}

export default SelectComponent;
