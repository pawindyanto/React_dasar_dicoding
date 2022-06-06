import React from 'react';
 
class NotesInput extends React.Component {
 constructor(props) {
   super(props);
 
   // inisialisasi state
   this.state = {
     title: '',
     body: '',
     charcount:50,
     maxlen:50,
   }
 
   this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
   this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }
 
 
 onTitleChangeEventHandler(event) {
    const lencount=event.target.value.length;
    const max_Len=this.state.maxlen;
    const result  = max_Len - lencount;
    this.setState({
        charcount: result
    })
   this.setState((prevState) => {
     return {
       ...prevState,
       title: event.target.value,
     }
   });
 }
 
 onBodyChangeEventHandler(event) {
   this.setState((prevState) => {
     return {
       ...prevState,
       body: event.target.value,
     }
   });
 }
 
 onSubmitEventHandler(event) {
   event.preventDefault();
   this.props.addNotes(this.state);
 }
 
 
 render() {
    return (
      <form className='notes-input' onSubmit={this.onSubmitEventHandler}>
        <p>Sisa karakter Judul : {this.state.charcount}</p>
        <input type="text" placeholder="Judul" maxLength={50} value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
        <textarea type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Tambah Catatan</button>
      </form>
    )
  }
}
 
export default NotesInput;