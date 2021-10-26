import React from 'react'
import { Form } from 'react-advanced-form'
import { Input } from 'react-advanced-form-addons'
export default class MyForm extends React.Component {
  state = {
    username: ''
  }
  
  handleUsernameChange = ({ nextValue }) => {
    this.setState({ username: nextValue })
  }
  
  resetForm = () => {
    this.setState({ username: '' })
  }
    
  render() {
    const { username } = this.state
        
    return (
      <Form onReset={this.resetForm}>
        <Input
          name="username"
          value={username}
          onChange={this.handleUsernameChange} />
      <Form>
    )
  }
}