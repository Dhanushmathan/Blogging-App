import { useEffect, useState } from 'react'
import { getAllCategories, getToken } from '../Services/api';
import { toast } from 'react-toastify';
import { useCurrentUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../Services/post';

const CreatePost = () => {
  const { currentUser } = useCurrentUser();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const naviagte = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories(getToken());
        setCategorys(res.data);
      } catch (error) {
        toast.error(`Failed to load categories : ${error.message}`);
      }
    };
    fetchCategories();
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();

    if (!title || !content || !categoryId || !image) {
      toast.error("Please fill in all required fields.", {
        position: 'bottom-right',
        autoClose: 3000,
      });
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("postImage", image);

    try {
      setIsLoading(true);
      const res = await createPost(currentUser.id, categoryId, formData, getToken());
      toast.success(`Post created successfully: ${res.data.title}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
      naviagte('/');
    } catch (error) {
      toast.error(`Failed to create post: ${error.message}`, {
        position: 'bottom-right',
        autoClose: 3000
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <form className="max-w-3xl mx-auto bg-white p-4 md:p-8 rounded-xl shadow-lg" onSubmit={handleSubmitPost}>
        <h1 className="text-3xl font-bold mb-6">Create New Post</h1>

        {/* Image Upload */}
        <label htmlFor='img' className="mb-4 bg-gray-900 text-white items-center inline-flex px-4 py-2 cursor-pointer rounded-md">
          <span className="font-semibold mr-4">Upload Image</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="32" strokeDashoffset="32" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0" /><set fill="freeze" attributeName="stroke-dasharray" begin="0.8s" to="2 4" /></path><path strokeDasharray="32" strokeDashoffset="32" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="32;0" /></path><path strokeDasharray="10" strokeDashoffset="10" d="M12 16v-7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0" /></path><path strokeDasharray="6" strokeDashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="6;0" /></path></g></svg>
          <input
            id='img'
            type="file"
            className="mt-2 w-full hidden"
            onChange={handleImage}
            disabled={isLoading}
          />
        </label>

        {preview && (
          <img
            src={preview}
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
        )}

        {/* Title */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <input
            type="text"
            placeholder="Enter Post Title"
            className="p-3 border rounded-lg"
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
          />
          <select className='p-3 border rounded-lg w-full' value={categoryId} onChange={(e) => setCategoryId(e.target.value)} disabled={isLoading}>
            <option value="">Select Category</option>
            {categorys.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <textarea
          placeholder="Write your description..."
          rows="6"
          className="w-full p-3 border rounded-lg mb-6"
          onChange={(e) => setContent(e.target.value)}
          disabled={isLoading}
        ></textarea>

        {/* Submit */}
        <button type='submit' className="w-full cursor-pointer bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={isLoading}>
          {isLoading ? 'Publishing...' : 'Publish Post'}
        </button>
      </form>
    </div>
  )
}

export default CreatePost;