import { useState } from "react"
import {
  DataSheetGrid,
  keyColumn,
  textColumn,
} from "react-datasheet-grid"
import Select from 'react-select'

// Import the style only once in your app!
import 'react-datasheet-grid/dist/style.css'
import "./App.css";

const SelectComponent = () => {
  return (
    <Select
    menuPortalTarget={document.body}
      styles={{
        container: (provided) => ({
          ...provided,
          flex: 1, // full width
          alignSelf: 'stretch', // full height
          pointerEvents: focus ? undefined : undefined,
          border: '0px',
        }),
        control: (provided, state) => ({
          ...provided,
          border: '0px',
          borderColor: state.isSelected ? 'grey' : 'red'
        })
      }}
      options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]}
    />
  )
}



function App() {
  // const [ data, setData ] = useState(['chocolate', 'strawberry'])

  const [data, setData] = useState([
    { title: "yooo", workflow: 'Elon', tags: 'Musk', created: "abc@gmail.com" },
    { title: "hadjafasfgas", workflow: 'Jeff', tags: 'Bezos', created: "xyz@gmail.com" },
  ])

  const columns = [
    {
      ...keyColumn('title', textColumn),
      title: 'Title',
    },
    {
      component: SelectComponent,
      title: 'Workflow',
    },
    {
      ...keyColumn('tags', textColumn),
      title: 'Tags',
    },
    {
      ...keyColumn('created', textColumn),
      title: 'Created By',
    },
  ]


  return (
    <DataSheetGrid
      value={data}
      onChange={setData}
      columns={columns}
    />
  )

}

export default App


/*
{
  "id": "string",
  "name": "string",
  "description": "string",
  "workspaceId": "string",
  "tags": [
    "string"
  ],
  "status": "string",
  "approver": "string",
  "references": [
    "string"
  ],
  "reviewers": [
    "string"
  ],
  "ideaWorkflows": [
    {
      "name": "string",
      "description": "string",
      "workflowId": "string",
      "workflowName": "string",
      "nodesVersion": "string",
      "taskIds": [
        "string"
      ],
      "createdBy": "string",
      "createdOn": "string",
      "isDeleted": true,
      "deleted": true
    }
  ],
  "createdBy": "string",
  "createdOn": "2024-10-02T11:18:14.342Z",
  "updatedBy": "string",
  "updatedOn": "string",
  "isDeleted": true,
  "deleted": true
}
*/