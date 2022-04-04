/* eslint-disable react/jsx-key */

import { GetStaticProps } from "next";

interface IndexPageProps {
  data: {
    date: any,
    available: [{
      hour: number,
      min: number,
    }],
  }[];
}



function IndexPage({ data }: IndexPageProps) {


  return (
    <>

      <h1 >hello</h1>
      <ul>

        {data.map(({ date }) => {
          let dateApi = new Date(date);
          return (

            <>
              <button
                className="px-4 mx-2 font-semibold py-2 text-center md:focus:bg-[#449126] md:focus:text-white  rounded-lg border-2 active:outline-none border-[#264f8f]  focus:bg-[#264e8f] md:border-[#8aa2c4]">
                <p>{dateApi.toLocaleString('default', { weekday: 'short' })}</p>
                <p className="text-lg">{dateApi.getDate()}</p>
                <p>{dateApi.toLocaleString('default', { month: 'short' })}</p>
              </button>
              {/* {
                available.map((result) => (
                  <>
                    <div>
                      <div className="flex mt-4  overflow-x-auto scrollbar-hide mx-2">
                        <button className="flex items-center md:focus:bg-[#449126] md:focus:text-white md:border-[#8aa2c4] px-4 ml-2 font-semibold h-full py-2  rounded-lg border-2 active:outline-none focus:bg-[#264e8f] border-[#264e8f]">{result.hour} : {result.min} PM - {result.hour + 1} : {result.min} PM</button></div>
                    </div>
                  </>
                ))
              } */}

            </>
          )
        })
        }
        {data.map(({ available }) => (
          available.map(result => (
            <>
              <div>
                <div className="flex mt-4  overflow-x-auto scrollbar-hide mx-2">
                  <button className="flex items-center md:focus:bg-[#449126] md:focus:text-white md:border-[#8aa2c4] px-4 ml-2 font-semibold h-full py-2  rounded-lg border-2 active:outline-none focus:bg-[#264e8f] border-[#264e8f]">{result.hour} : {result.min} PM - {result.hour + 1} : {result.min} PM</button></div>
              </div>
            </>
          ))
        ))}
      </ul>
    </>
  )

}



export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json");

  const data = await res.json();
  // console.log(data)
  return {
    props: {
      data
    }
  }
}

export default IndexPage;