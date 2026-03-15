export default function UploadPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="border-2 border-dashed border-gray-300 p-12 text-center rounded-lg">
          <p className="text-gray-500">
            Drag and drop a video file
          </p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Select File
          </button>
        </div>

        <div className="flex-1 ml-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Caption</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Add a caption..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Cover</label>
            <div className="h-20 bg-gray-200 rounded-md"></div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Who can view this video</label>
            <select className="w-full p-2 border rounded-md">
              <option>Public</option>
              <option>Friends</option>
              <option>Private</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Allow users to:</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="comments" className="mr-2" /> 
                <label htmlFor="comments">Comment</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="duet" className="mr-2" />
                <label htmlFor="stitch">Stitch</label>
              </div>
            </div>          
          </div>

          <div className="flex space-x-3 mt-6">
            <button className="px-6 py-2 border rounded-md">Discard</button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}