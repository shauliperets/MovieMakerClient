function UploadFile(props) {
  return (
    <div className="upload-file">
      <label for="upload-file__upload" className="upload-file__label">
        בחר
      </label>
      <input id="upload-file__upload" className="upload-file__input" type="file" onChange={props.onChange}></input>

      {props.logo}
    </div>
  );
}

export default UploadFile;
