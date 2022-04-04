/* eslint-disable react/jsx-key */
import { DataSaverOnTwoTone } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { GetStaticProps } from "next";

interface IndexPageProps {
  dataSet: {
    date: any,
    available: [{
      hour: number,
      min: number,
    }],
  }[];
}






function Main({ dataSet }: IndexPageProps): JSX.Element {
  return <div className='md:border-t-4 md:mt-10 border-[#f6f6f6] w-screen'>
    <div className="px-6 md:ml-10 pt-8">
      <ArrowBackIcon className='hidden md:block' />
      <div className="flex mt-6 items-center tracking-wide font-extrabold text-xl">
        <h1><span className="border-b-4 border-[#325994]">Bo</span><span className="border-b-4 border-[#df2e52]">ok</span></h1>
        <h1 className="ml-2">Demo session Slot</h1>
      </div>

      {/* Date selection */}
      <div>
        <h1 className="mt-10 text-lg font-bold">Select Date</h1>

        <div className="flex mt-4  overflow-x-auto scrollbar-hide mx-2">
          {dataSet.map(({ date }) => {
            let dateApi = new Date(date);
            return (

              <>
                <button
                  className="px-4 mx-2 font-semibold py-2 text-center md:focus:bg-[#449126] md:focus:text-white  rounded-lg border-2 active:outline-none border-[#264f8f]  focus:bg-[#264e8f] md:border-[#8aa2c4]">
                  <p>{dateApi.toLocaleString('default', { weekday: 'short' })}</p>
                  <p className="text-lg">{dateApi.getDate()}</p>
                  <p>{dateApi.toLocaleString('default', { month: 'short' })}</p>
                </button>
              </>
            )
          })
          }
        </div>

      </div>


      {/* Select Slot */}
      <div>
        <h1 className="mt-10 text-lg font-bold">Select Slot</h1>
        <div className="flex mt-4  overflow-x-auto scrollbar-hide mx-2">
          { dataSet.map(({ available }) => (
            available.map(result => (
              <>
                <div>
                  <div className="flex mt-4  overflow-x-auto scrollbar-hide">
                    <button className="flex items-center md:focus:bg-[#449126] md:focus:text-white md:border-[#8aa2c4] px-4 ml-2 font-semibold w-max py-2  rounded-lg border-2 active:outline-none focus:bg-[#264e8f] border-[#264e8f]">{result.hour}: {result.min} PM - {result.hour + 1}: {result.min} PM</button></div>
                </div>
              </>
            ))
          ))}
        </div>
      </div>


      {/* Pay Button */}
      <button className="text-white ml-4 mt-8 font-semibold bg-gradient-to-r from-[#09193d] to-[#1b355a] px-6 py-2 rounded-lg">Proceed to Pay</button>


    </div>
  </div>
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json");

  const dataSet = await res.json();
  // console.log(data)
  return {
    props: {
      dataSet,
    }
  }
}
export default Main;