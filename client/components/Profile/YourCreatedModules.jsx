import React from 'react'
import { connect } from 'react-redux'
import ModuleCard from '../Modules/ModuleCard'
import DeleteModule from '../Modules/Popups/DeleteModule'

class YourCreatedModules extends React.Component {
  state = {
      delete:false,
      moduleToDel: null
  }

  handleDelete = (boolean, module) => {
    console.log(module)
    this.setState({delete:boolean,
      moduleToDel:module})
  }

  render () {
    return (
      <>  
      {this.state.delete && <DeleteModule module={this.state.moduleToDel.id} setDelete={this.handleDelete}/>}
        {this.props.yourModules.map((module, idx) => {
          return( <><ModuleCard handleDelete={this.handleDelete} isYourModule={true} delete={true} key={idx} module={module} /> </>)
        })}
      </>
    )
  }
}

export default connect()(YourCreatedModules)
