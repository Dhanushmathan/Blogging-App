import { useState } from 'react';
import PostCard from '../Components/PostCard';
import { useCurrentUser } from '../context/UserContext';
import { getToken, uploadProfileImage, updateUserProfile } from '../Services/api';
import { toast } from 'react-toastify';

const Profile = () => {

  const { currentUser, setCurrentUser } = useCurrentUser();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "" });
  const [imageLoading, setImageLoading] = useState(false);

  const handleUploadImage = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) {
        toast.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      const res = await uploadProfileImage(currentUser.id, formData, getToken());
      setCurrentUser({ ...currentUser, profileImageUrl: res.data });
      toast.success("Profile image updated successfully!");
    } catch (error) {
      toast.error(`Image upload failed: ${error.response.data}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUserProfile(currentUser.id, form, getToken());
      setCurrentUser(res.data);
      setIsEditModalOpen(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(`Profile update failed: ${error.response.data}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  }

  const myPosts = [
    {
      id: 1,
      title: "My Travel Blog",
      desc: "An amazing place I visited...",
      img: "https://picsum.photos/600/403"
    },
    {
      id: 2,
      title: "Tech Review",
      desc: "Latest mobile unboxing...",
      img: "https://picsum.photos/600/404"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-3 md:p-10">
      <div className="max-w-4xl mx-auto">

        {/* USER INFO CARD */}
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg mb-10 flex flex-col md:flex-row items-center gap-3.5 md:gap-6">
          <div className='w-36 h-36 md:w-32 md:h-32 rounded-full border border-green-400 overflow-hidden'>
            <img
              src={currentUser?.profileImageUrl}
              className="md:w-full md:h-full object-cover"
            />
          </div>
          <div className="relative">
            <label htmlFor="image-upload" className="cursor-pointer">
              <div className="absolute left-9 bottom-6 md:-left-14 md:-bottom-13 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg">
                {imageLoading ? (
                  <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="15.7 47.1" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18q2.075 0 3.538-1.462Q17 15.075 17 13q0-2.075-1.462-3.538Q14.075 8 12 8Q9.925 8 8.463 9.462Q7 10.925 7 13q0 2.075 1.463 3.538Q9.925 18 12 18Zm0-2q-1.25 0-2.125-.875T9 13q0-1.25.875-2.125T12 10q1.25 0 2.125.875T15 13q0 1.25-.875 2.125T12 16Zm6-6q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8t-.712.287Q17 8.575 17 9t.288.712Q17.575 10 18 10ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.7 3.325q.15-.15.337-.238Q9.225 3 9.425 3h5.15q.2 0 .388.087q.187.088.337.238L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Z" /></svg>
                )}
              </div>
            </label>
            <input
              id="image-upload"
              type="file"
              onChange={(e) => {
                setImageLoading(true);
                handleUploadImage(e).finally(() => setImageLoading(false));
              }}
              className="hidden"
              accept="image/*"
              disabled={imageLoading}
            />
          </div>

          <div>
            <h2 className="text-xl md:text-3xl font-bold">{currentUser.name}</h2>
            <p className="text-gray-600 mt-1 text-base">Frontend + Java Full Stack Developer</p>
            <button onClick={() => setIsEditModalOpen(true)} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
              Edit Profile
            </button>
          </div>
        </div>

        {/* EDIT PROFILE MODAL */}
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4">Edit Profile</h3>
              <input type="text" placeholder="Name" defaultValue={currentUser.name} className="w-full p-2 border rounded mb-3" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <div className="flex gap-3">
                <button onClick={() => setIsEditModalOpen(false)} className="flex-1 bg-gray-500 text-white py-2 rounded">Cancel</button>
                <button className="flex-1 bg-blue-500 text-white py-2 rounded" onClick={updateProfile}>Save</button>
              </div>
            </div>
          </div>
        )}

        {/* MY POSTS */}
        <h2 className="text-2xl font-bold mb-4">My Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myPosts.map((p) => (
            <PostCard key={p.id} title={p.title} desc={p.desc} img={p.img} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile;