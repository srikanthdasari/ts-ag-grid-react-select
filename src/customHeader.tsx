import * as React from "react";
import Form from "react-bootstrap/Form";

interface ICustomHeaderProps {
  displayName: any;
  showCustom: boolean;
  api: any;
}

class CustomHeader extends React.Component<ICustomHeaderProps, {}> {
  constructor(props: ICustomHeaderProps) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(checked, key) {
    console.log(key);
    if (checked) {
      var model = this.props.api.getModel();
      console.log(model.rowsToDisplay.length);
      for (var i = 0; i < model.rowsToDisplay.length; i++) {
        this.props.api.startEditingCell({
          rowIndex: i,
          colKey: key
        });
      }
    } else {
      this.props.api.stopEditing();
    }
  }
  render() {
    return (
      <div>
        <div className="customHeaderLabel">
          {this.props.showCustom ? (
            <Form.Check
              custom
              type={"checkbox"}
              id={`custom-${this.props.displayName}`}
              label={this.props.displayName}
              onClick={e =>
                this.onCheck(e.target.checked, this.props.displayName)
              }
            />
          ) : (
            this.props.displayName
          )}
        </div>
      </div>
    );
  }
}

export default CustomHeader;
