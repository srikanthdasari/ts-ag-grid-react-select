import * as React from "react";
import { render } from "react-dom";
import SelectComponent from "./selectComponent";
import FeatureRenderer from "./feature-renderer";
import FeatureEditor from "./feature-editor";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { data } from "./data";
import Button from "react-bootstrap/Button";
import CustomHeader from "./customHeader";
// function App() {
//   return (
//     <div className="App">
//       <SelectComponent />
//     </div>
//   );
// }

// https://www.ag-grid.com/react-getting-started/
// https://www.ag-grid.com/react-more-details/
// https://www.ag-grid.com/react-redux-integration-pt1/
// https://www.ag-grid.com/react-redux-integration-pt2/
// https://www.ag-grid.com/javascript-grid-cell-rendering-components/
// https://www.ag-grid.com/javascript-grid-components/#registering-custom-components
// https://www.ag-grid.com/best-react-data-grid/
// https://www.ag-grid.com/javascript-grid-cell-editing/
interface IAppState {
  gridApi: any;
  columnDefs: any;
  rowData: any;
  frameworkComponents: any;
}

class App extends React.Component<{}, IAppState> {
  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      gridApi: null,
      columnDefs: [
        {
          headerName: "Make",
          field: "make",
          sortable: true,
          filter: true,
          checkboxSelection: true,
          headerComponentParams: { showCustom: false }
        },
        {
          headerName: "Model",
          field: "model",
          sortable: true,
          filter: true,
          headerComponentParams: { showCustom: false }
        },
        {
          headerName: "price",
          field: "price",
          sortable: true,
          filter: true,
          editable: true,
          headerComponentParams: { showCustom: true }
        },
        {
          headerName: "features",
          field: "features",
          editable: true,
          cellRendererFramework: FeatureRenderer,
          cellEditorFramework: FeatureEditor,
          headerComponentParams: { showCustom: true }
        }
      ],
      rowData: data,
      frameworkComponents: { agColumnHeader: CustomHeader }
      // For Grouping
      // autoGroupColumnDef: {
      //   headerName: "Model",
      //   field: "model",
      //   cellRenderer:'agGroupCellRenderer',
      //   cellRendererParams: {
      //     checkbox: true
      //   }
      // }
    };
  }

  onButtonClick = e => {
    const selectedNodes = this.state.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + " " + node.model)
      .join(", ");
    alert(`selected nodes ${selectedDataStringPresentation}`);
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "850px"
        }}
      >
        <Button
          onClick={this.onButtonClick}
          style={{ margin: 2 }}
          variant="primary"
        >
          Get Selected Rows
        </Button>
        <AgGridReact
          onGridReady={params => this.setState({ gridApi: params.api })}
          rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          singleClickEdit={true}
          frameworkComponents={this.state.frameworkComponents}
          // groupSelectsChildren={true}
          // autoGroupColumnDef={this.state.autoGroupColumnDef}
        />
        {/* <SelectComponent width={200} /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
