import { useState, useEffect } from 'react'
// import _avatar from '../assets/img/img_avatar.png'
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Cards from '../components/Cards';
import { getBlogsData } from '../../api/apiCalls'
import { useDispatch} from 'react-redux';
import joinedDate from '../utils/joinedDate'
import endpointForUser from '../utils/endpointForUser';
import { BsThreeDots } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import profileCoverImage from '../assets/img/profileCover.jpg'
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { logout } from '../redux/features/userSlice';
import { IoCreate } from "react-icons/io5";
import RandomColor from '../utils/RandomColor';
import UserProfileSkeleton from '../components/Skeleton/UserProfileSkeleton';
import { Helmet } from 'react-helmet';

function UserProfile() {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUserData] = useState({})
  const [cardData, setCardData] = useState([])

  const token = sessionStorage.getItem('token')
  const dispatch = useDispatch()

  // console.log(cardData)

  const userBlogs = cardData.filter(data => data.user === user?._id)


  if (user === undefined || user.message === 'Invalid token') {
    navigate('/')
  }

  const getUserData = async () => {
    try {
      const userData = await endpointForUser(token);
      setUserData(userData?.user)
      if(userData?.user) return setIsLoading(false)
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  const BlogCardData = async () => {
    const data = await getBlogsData()
    setCardData(data?.blogs_data)
  }

  // console.log(user)

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    navigate("/");
  };

  const getColorClass = (index) => {
    return RandomColor[index % RandomColor.length];
  };

  useEffect(() => {
    getUserData()
    BlogCardData()
  }, [])

  return (
    <>
    <Helmet>
      <title>{!user ? "Profile | BlogHub": `${user?.name} | BlogHub` }</title>
    </Helmet>
      {isLoading ? <UserProfileSkeleton />
        : <div className="bg-gray-100">
          <div className="relative">
            <img
              src={profileCoverImage}
              alt="Cover"
              className="w-full h-40 md:h-64 object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute top-0  py-6 px-6">
              <FaArrowLeft className='form-text text-2xl text-white cursor-pointer' onClick={() => navigate('/')} />

            </div>

            <div className="absolute bottom-0 left-20 lg:left-34 md:left-36 transform -translate-x-1/2 translate-y-1/3 bg-white p-1 rounded-full">
              <img
                src={user.profile_pic}
                alt=""
                className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover"
              />
            </div>
          </div>


          <div className="container mx-auto px-6 py-8 md:flex">

            {/* Left Section - User Details */}
            <div className="md:w-1/2">
              <div className="flex items-center">

                {/* User Info */}
                <div className="ml-2 lg:ml-14 md:ml-8 mt-2 lg:mt-4 md:mt-4">
                  <div className='flex justify-between gap-5'>
                    <h1 className="text-3xl form-heading font-bold text-gray-800">{user.name}</h1>
                    <div className="relative inline-block text-left">
                      <div>
                        <button onClick={toggleMenu} className="flex items-center focus:outline-none">
                          <BsThreeDots className='text-2xl' />
                        </button>
                      </div>
                      {isOpen && (
                        <div className="absolute z-10 right-0 lg:left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg">
                          <div className="py-1 form-text ">
                            <Link to={'/create-post'} className="flex items-center cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100">
                              <IoCreate className='text-xl mr-2' />
                              Create Post
                            </Link>
                            <Link to={'/edit-profile'} className="flex items-center cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100">
                              <FaUserEdit className='text-xl mr-2' />
                              Edit Profile
                            </Link>
                            <span className="flex items-center cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100">
                              <RiLockPasswordFill className='text-lg ml-[-2px] mr-3' />
                              Change Password
                            </span>
                            <span onClick={handleLogout} className="flex items-center cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100">
                              <IoLogOut className='text-xl mr-2' />
                              Logout
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-lg form-text text-gray-600">{(user.user_title)}</p>
                  {/* Additional user details */}

                </div>
              </div>
              {/* User bio */}
              <div className="mt-3 text-gray-700 ml-2 md:ml-8 lg:ml-14 md:mr-2 max-w-md">
                <p className="text-base form-text" dangerouslySetInnerHTML={{ __html: user.bio }} />
              </div>
              <div className="ml-2 lg:ml-14 md:ml-8 mt-2 lg:mt-4 md:mt-4">
                <div className="text-sm form-text text-gray-600 mt-4 flex gap-2">
                  {(user.location) ?
                    <div className='flex gap-1'>
                      <FaLocationDot className='mt-1' />
                      <p>{user.location}</p>
                    </div>
                    : ''}
                  <div className='flex gap-1'>
                    <MdDateRange className='mt-1' />
                    <p>Joined {joinedDate(user.createdAt)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Skills */}
            <div>

            </div>
            {(user.skills) ? (
              <div className="md:w-1/2 mt-8 lg:mt-0 md:mt-8 md:mr-12 ml-2 lg:ml-0 ">
                <h2 className="text-2xl form-text font-bold mb-4">{((!user.skills[0]) ? '' : 'Skills')}</h2>
                <div className="flex flex-wrap text-md form-text gap-1">
                  {user.skills.map((skill, i) => (
                    <span className={`${getColorClass(i)} text-white py-1 px-3 rounded-sm `} key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            ) : ''}
          </div>

        </div>

      }
      <Cards cardsData={userBlogs} totalCards={userBlogs.length || 4} isLoading={(userBlogs.length === 0) ? true : false} isProfile />

    </>
  )
}

export default UserProfile