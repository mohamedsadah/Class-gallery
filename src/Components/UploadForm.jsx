const Uploadform = () => {
  return (
    <div className="text-center mt-15">
      <form className="flex items-center flex-col gap-8">
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        <button className="btn btn-secondary gap-5">Upload</button>
      </form>
    </div>
  )
}

export default Uploadform
