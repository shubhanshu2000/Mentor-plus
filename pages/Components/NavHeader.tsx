/* eslint-disable react/jsx-key */
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';









function NavHeader(): JSX.Element {
  return <div>
    <div className='flex items-center md:bg-[#fafafa] md:inline-block md:w-52    md:h-screen md:flex-col md:items-baseline shadow-md md:shadow-none md justify-between   px-6 py-4'>
      <div className='flex font-bold'>
        <div className='flex mx-auto '>
          <SupervisorAccountOutlinedIcon className='text-blue-900 mr-1' />
          <span className='text-blue-800'>Mentor</span>
          <span className='text-pink-600'>Plus</span>
        </div>
      </div>
      <div className='hidden md:block  text-[#3d5881] font-bold'>
        <ul>
          <li className='mt-6   py-4 rounded-lg bg-[#e8f2ff]  focus:bg-[#95bfff]  '><a href="#" className='block w-12 h-1/2 mx-auto' >Home</a></li>
          <li className='mt-6   py-4 rounded-lg bg-[#95bfff]  '><a href="#" className='block w-12 h-1/2 mx-auto' >Profile</a></li>
          <li className='mt-6  w-full py-4 rounded-lg bg-[#95bfff]  '><a href="#" className='block w-20 h-1/2 mx-auto' >Something...</a></li>
          <li className='mt-6   py-4 rounded-lg bg-[#95bfff]  '><a href="#" className='block w-20 h-1/2 mx-auto' >Something...</a></li>
          <li className='mt-6   py-4 rounded-lg bg-[#95bfff]  '><a href="#" className='block w-20 h-1/2 mx-auto' >Something...</a></li>


        </ul>
      </div>
      <MenuOutlinedIcon className='md:hidden' />
    </div>
  </div>
}

export default NavHeader